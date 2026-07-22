---
name: create-pr
description: Prepare and open a safe GitHub pull request for this repository. Use when the user asks to create, open, or prepare a pull request from completed branch work. Inspect the branch and diff, validate changes, follow the repository PR template, push only when authorized, and open a draft PR by default.
---

# Create Pull Request

Prepare reviewable pull requests for `main`. Keep the branch focused, preserve unrelated work, and never merge or modify another person's pull request.

## Workflow

1. Inspect the current branch, `git status --short`, the diff against `main`, recent commits, and any existing pull request for the branch.
2. Confirm the branch is not `main` and that it contains a small, coherent change. If the scope, target branch, or included files are unclear, ask before proceeding.
3. Ensure all intended work is committed. Use the `create-commit` skill if a commit is needed.
4. Run the relevant validation commands from `CONTRIBUTING.md`. Report failures accurately; do not weaken checks or use bypass flags.
5. Derive a concise Conventional Commit-style PR title, such as `docs(react): add testing resources`. Reuse a suitable user-provided title.
6. Build the description from `.github/pull_request_template.md`:

   - Explain what changed and why.
   - Add `Closes #<number>` only when an issue is known.
   - Mark only validation commands that actually passed.
   - Keep unchecked items unchecked and do not claim work that was not performed.

7. If the user asked to open the PR, push the current branch and create a **draft** pull request targeting `main`. Use GitHub CLI or an authenticated GitHub integration. If the user asked only to prepare it, provide the title and body without pushing or creating anything.
8. Return the PR URL, target branch, title, validation results, and any limitations.

## Safety rules

- Do not push or create a PR unless the user explicitly requested that external action.
- Do not use `--force`, alter branch history, merge, approve, or request review unless explicitly asked.
- Do not include secrets, generated output, local configuration, or unrelated changes.
- Do not create a duplicate PR. Update or report an existing PR instead.
- Use `main` as the base branch unless the user specifies another target.
