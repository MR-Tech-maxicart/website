import { google } from 'googleapis'
import {
  safeParse,
  object,
  string,
  optional,
  minLength,
  trim,
  email as vEmail,
  pipe,
  literal
} from 'valibot'
import type { H3Event } from 'h3'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const Schema = object(
  {
    fullName: pipe(string(), trim(), minLength(2, 'Name must be at least 2 characters')),
    email: optional(pipe(string(), trim(), vEmail())),
    phone: optional(pipe(string(), trim())),
    message: optional(pipe(string(), trim())),
    consent: literal(true, 'Consent is required')
  }
)

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)

  const parsed = safeParse(Schema, body)
  if (!parsed.success) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Validation error',
      data: {
        issues: parsed.issues
      }
    })
  }

  const config = useRuntimeConfig(event)
  if (!config.googleServiceAccountJsonPath || !config.googleSheetsSpreadsheetId) {
    throw createError({ statusCode: 500, statusMessage: 'Sheets config missing' })
  }

  const keyPath = config.googleServiceAccountJsonPath
  const json = await readFile(resolve(process.cwd(), keyPath), 'utf8')

  const auth = new google.auth.GoogleAuth({
    credentials: await JSON.parse(json),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheets = google.sheets({ version: 'v4', auth })

  // consent НЕ отправляем
  const row = [
    new Date().toISOString(),
    parsed.output.fullName,
    parsed.output.email?.trim() || '',
    parsed.output.phone?.trim() || '',
    parsed.output.message?.trim() || ''
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId: config.googleSheetsSpreadsheetId,
    range: config.googleSheetsRange,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [row] }
  })

  return { ok: true }
})
