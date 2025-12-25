# Fix GitHub Issue

Fix GitHub issue #$ARGUMENTS following this workflow:

## 1. Understand the Issue

First, fetch the issue details:

```bash
gh issue view $ARGUMENTS
```

Read the issue carefully and identify:

- What is the expected behavior?
- What is the actual behavior?
- What files are likely affected?

## 2. Create a Branch

```bash
git checkout -b fix/issue-$ARGUMENTS
```

## 3. Explore the Codebase

Before making changes:

- Read relevant component files
- Check existing tests for the affected code
- Review related CSS styles
- Look for similar patterns in other components

## 4. Plan the Fix

Before writing code, create a plan:

1. List the files that need to be modified
2. Describe the changes needed for each file
3. Identify any new tests that should be added
4. Consider edge cases and accessibility implications

## 5. Implement the Fix

Make the changes following project standards:

- Use TypeScript types
- Use design tokens (no hardcoded values)
- Follow component patterns in CLAUDE.md
- Ensure accessibility compliance

## 6. Write/Update Tests

Add or update tests to cover:

- The bug that was fixed
- Any edge cases discovered
- Accessibility requirements

## 7. Verify the Fix

Run all verification commands:

```bash
pnpm typecheck
pnpm lint
pnpm test:run
pnpm build
```

## 8. Create the Commit

Use conventional commit format:

```bash
git add .
git commit -m "fix: [description of fix]

Fixes #$ARGUMENTS"
```

## 9. Create Pull Request

```bash
gh pr create --title "fix: [description]" --body "Fixes #$ARGUMENTS

## Changes
- [list changes]

## Testing
- [describe testing done]"
```

## Important Notes

- Always run tests before committing
- Keep changes focused on the issue
- Update Storybook stories if UI changed
- Add changeset if this is a user-facing change (`pnpm changeset`)
