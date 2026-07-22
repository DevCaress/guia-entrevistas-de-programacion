---
name: create-commit
description: Create a safe, focused Git commit for this repository. Use when the user asks to commit completed work, prepare a commit, or choose a Conventional Commit message. Inspect the working tree, stage only intended files, validate relevant changes, and create the commit without pushing.
---

# Create Commit

Create small, reviewable commits that follow this repository's contribution rules. Do not push, amend, rebase, reset, or change branches unless the user explicitly asks.

## Workflow

1. Inspect `git status --short`, the staged and unstaged diffs, and recent commit messages.
2. Determine the smallest coherent commit. Preserve unrelated user changes; never use `git add -A` or `git add .`.
3. If the intended files or scope are unclear, ask the user before staging or committing.
4. Stage only the chosen paths with `git add <path>...`.
5. Select a Conventional Commit message. Prefer a scoped type when useful:

   ```text
   docs(scope): describe documentation change
   feat(scope): describe user-facing addition
   fix(scope): describe corrected behavior
   test(scope): describe test change
   chore(scope): describe maintenance work
   ci: describe workflow change
   ```

   Use a concise, lowercase imperative subject with no final period. Reuse an explicit user-provided message if it is suitable.

6. Run the relevant validation commands from `CONTRIBUTING.md` when they are practical for the changed files. Report any pre-existing or environment-related failure; do not conceal it by weakening checks.
7. Review the staged diff one final time, then create the commit with `git commit -m "<message>"`.
8. Confirm success with `git status --short` and `git log -1 --oneline`.

## Safety rules

- Do not commit secrets, generated output, local configuration, or unrelated files.
- Do not modify existing commits, force-push, or push any branch as part of this skill.
- Do not bypass hooks with `--no-verify` unless the user explicitly authorizes it after the failure is explained.
- If validation fails because of the proposed change, fix it before committing when the user asked for a finished commit. If it is unrelated, report it clearly.
