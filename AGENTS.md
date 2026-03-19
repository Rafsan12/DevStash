# DevStash

A developer knowledge hub for snippets,commands, prompts,notes,files,image,links and custom types.

## Context Files

Read the following to get this full context of the project:

- ./context/project-overview.md

## Project Structure & Module Organization

This repository is a small Next.js App Router project. Application code lives under `src/app`, with `layout.tsx` defining the root layout, `page.tsx` providing the home route, and `globals.css` holding global styles. Static assets such as SVGs belong in `public/`. Build output is generated in `.next/` and should not be edited manually. Use the `@/*` TypeScript path alias for imports from `src/`.

## Build, Test, and Development Commands

- `npm run dev`: start the local development server on `http://localhost:3000`.
- `npm run build`: create the production build with Next.js.
- `npm run start`: serve the production build locally after `npm run build`.
- `npm run lint`: run ESLint with the Next.js core-web-vitals and TypeScript rules.

Run commands from the repository root, for example: `npm run lint`.

## Coding Style & Naming Conventions

Write TypeScript with `strict` mode assumptions in mind. Follow the existing style:

- Use 2-space indentation and double quotes.
- Prefer function components for routes and layouts.
- Name route files according to Next.js conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, etc.
- Use PascalCase for React component names and camelCase for variables, functions, and props.
- Keep shared assets in `public/` and import internal modules via `@/...` when practical.

## Testing Guidelines

There is currently no dedicated test runner or `npm test` script configured. For now, treat `npm run lint` and a successful `npm run build` as the minimum validation before opening a PR. When tests are added, place them close to the feature or in a clearly named test directory, and use filenames ending in `.test.ts` or `.test.tsx`.

## Commit & Pull Request Guidelines

The current Git history uses short, imperative commit subjects such as `Initial commit from Create Next App`. Continue with concise imperative messages, for example `Add hero section layout`. Keep commits focused on one change. PRs should include:

- a brief description of the change,
- linked issue or task reference when available,
- screenshots for UI changes,
- confirmation that `npm run lint` and `npm run build` passed.

## Agent-Specific Notes

Do not edit generated files in `.next/` or dependency contents in `node_modules/`. Prefer small, targeted changes inside `src/app` and document any new scripts or project structure changes in this file.
