# Contributing to the guide

Thank you for helping improve this guide! Content contributions, link corrections, accessibility improvements, bug fixes, and tests are all welcome.

## Before you start

- Follow the [Code of Conduct](CODE_OF_CONDUCT.md).
- Check open issues before starting a large change. If none exists, open one to propose the change and agree on its scope.
- Keep each pull request small and focused on a single goal.

## Set up the project

Node.js `>=22.12.0` is required.

1. Fork the repository on GitHub.
2. Clone your fork and enter the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a branch from the latest version of `main`:

   ```bash
   git checkout main
   git pull origin main
   git checkout -b docs/add-react-resources
   ```

## Branches and commits

Use lowercase, hyphen-separated branch names. The prefix should describe the type of change:

- `docs/add-react-resources`
- `fix/sidebar-link`
- `feat/add-search`
- `chore/update-dependencies`

Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```text
docs(react): add testing resources
fix(links): correct Python Clean Code URL
feat(content): add system design guide
test(seo): cover canonical URL metadata
```

Write a short, imperative title without a final period. Do not combine unrelated changes in one commit.

## Contribute content

The navigable content lives in `src/content/guide/**/*.mdx`. Every new section must include the required frontmatter: `title`, `description`, `category`, `sidebar.order`, and `references`.

- Add useful, trustworthy resources relevant to technical interviews.
- Check that every URL is valid and clearly describe each resource.
- Do not copy copyrighted content without permission.
- Follow the style and structure of nearby MDX files.

## Validate your changes

Before opening a pull request, run the applicable checks:

```bash
npm run lint
npm run build
npm test
npm run verify:content
npm run check:links
```

For visual changes, run `npm run dev` and review them in a browser. If you change interface behavior, also run `npm run test:e2e`.

> The repository still has existing global formatting issues. Do not run `npm run format` across the entire project as part of a small contribution; it will be added to CI after formatting is normalized in a dedicated change.

## Open a pull request

1. Push your branch to your fork:

   ```bash
   git push -u origin docs/add-react-resources
   ```

2. Open a pull request against this repository's `main` branch.
3. Use a Conventional Commits-style title, for example: `docs(react): add testing resources`.
4. Complete the pull request template and link the related issue with `Closes #123`, when applicable.
5. Respond to review comments and update your branch when needed.

By submitting a pull request, you confirm that you have the right to contribute the content under this repository's license.
