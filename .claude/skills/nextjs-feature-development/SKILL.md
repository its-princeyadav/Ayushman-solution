---
name: nextjs-feature-development
description: Build or modify Next.js features using project architecture, official documentation, and safe implementation practices.
---

# Next.js Feature Development

## Purpose

Use this skill whenever the task involves:

- Creating a new page
- Creating or modifying a component
- Adding a feature
- Integrating an API
- Updating existing functionality
- Refactoring a feature
- Building reusable UI

---

## Workflow

### Step 1 — Understand

- Read the user's request carefully.
- Clarify only if essential information is missing.

---

### Step 2 — Inspect

Use the Filesystem MCP to:

- Locate affected files.
- Understand the current implementation.
- Trace dependencies.
- Identify reusable components.

Do not scan unrelated directories.

---

### Step 3 — Verify

Use Context7 whenever:

- Next.js behavior matters.
- React APIs matter.
- Tailwind syntax matters.
- Library APIs may have changed.
- Version-specific features are involved.

Always prefer the latest official documentation.

---

### Step 4 — Plan

For medium or large tasks:

- Identify affected files.
- Explain the implementation approach.
- Consider risks.
- Keep the change minimal.

Use Sequential Thinking when multiple implementation paths exist.

---

### Step 5 — Implement

Follow these rules:

- Preserve existing architecture.
- Keep changes small.
- Reuse existing utilities.
- Avoid duplicate logic.
- Avoid unnecessary abstractions.
- Follow project conventions.

---

### Step 6 — Validate

If frontend behavior changed:

Use Playwright to verify:

- Navigation
- Responsive layout
- User interaction
- Forms
- Visual regressions

Use Chrome DevTools when browser debugging is needed.

---

## Code Standards

Always:

- Prefer Server Components where appropriate.
- Keep components reusable.
- Keep business logic outside UI.
- Avoid unnecessary Client Components.
- Use next/image where appropriate.
- Keep bundle size small.

Never:

- Rewrite unrelated code.
- Introduce unnecessary dependencies.
- Change architecture without reason.
- Modify unrelated files.

---

## Output Format

When complete, summarize:

### Files Modified

- List changed files.

### What Changed

- Brief explanation.

### Why

- Explain why the solution works.

### Verification

- Describe how the change was validated.

### Risks

- Mention any remaining considerations.
