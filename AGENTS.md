# Repository Guidelines

## Project Structure & Module Organization
The Nuxt 4 app lives in `app/`: `pages/` define routes, `layouts/` share chrome, and `components/` host reusable UI. Styles, tokens, or media go in `app/assets/`; long-lived static files belong in `public/`. Runtime configuration sits in `nuxt.config.ts`, while project-wide UI tweaks belong in `app.config.ts`. Localized strings in `i18n/` mirror the route tree—update every language when touching copy. ESLint extends Nuxt defaults via `eslint.config.mjs`; add overrides there instead of per-file directives.
Nuxt UI information located in `llms-full.txt`

## Build, Test, and Development Commands
- `pnpm install` — install dependencies (repo pins `pnpm@10`).
- `pnpm dev` — run the dev server with hot reload at `http://localhost:3000`.
- `pnpm build` — create the production bundle; run before opening a PR.
- `pnpm preview` — locally serve the build artifact to catch deployment-only bugs.
- `pnpm lint` / `pnpm lint --fix` — run ESLint across the workspace.
- `pnpm typecheck` — call `nuxt typecheck` (vue-tsc) for strict typing.

## Coding Style & Naming Conventions
Author components with `<script setup lang="ts">`, two-space indentation, and PascalCase filenames (e.g., `HeroBanner.vue`). Route files stay kebab-case (`product-list.vue`) to match Nuxt routing rules. Prefix composables with `use` and colocate them in `app/composables/`. Prefer Nuxt UI primitives and utility classes over bespoke CSS; when needed place shared variables in `app/assets/variables.scss`. Keep translation keys descriptive and namespaced (`header.cta.buy`), and run `pnpm lint --fix` before committing to enforce the Nuxt ESLint preset.

## Testing Guidelines
Automated tests are not yet wired up, so combine `pnpm typecheck` with manual validation in `pnpm dev` and `pnpm preview`. When adding logic-heavy code, introduce Vitest + Vue Test Utils specs named `ComponentName.spec.ts` next to the source to ease future automation. Document manual test notes in your PR until a runner is installed.

## Commit & Pull Request Guidelines
History follows Conventional Commits (`feat(scope): message`, `chore(scope): message`), so continue that format for clean changelogs. Each pull request should include: a summary of the user-facing change, linked issues (`Fixes #123`), screenshots or recordings for UI tweaks, a checklist of commands executed (`pnpm lint`, `pnpm build`, etc.), and mention of any localization or config edits. Request review only after linting, typechecking, and build succeed locally.
