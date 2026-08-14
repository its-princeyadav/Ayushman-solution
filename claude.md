# CLAUDE.md

## Project Overview

Production-grade Next.js 16+ / React 19 application.

Priorities:
1. Correctness
2. Maintainability
3. Performance
4. Scalability
5. Minimal, safe changes

Preserve existing functionality and architecture unless explicitly asked otherwise.

---

## Core Workflow

Before editing:

1. Understand the request.
2. Inspect only the relevant files.
3. Understand the existing implementation and dependencies.
4. Plan medium/large or complex changes before coding.
5. Verify framework/library behavior when needed.
6. Make the smallest practical change.
7. Validate the result and check for regressions.

Never guess when the issue can be verified.

Modify only files relevant to the task. Avoid unrelated formatting, refactoring, renaming, moving files, or dependency changes.

---

## Automatic MCP Selection

Automatically choose the appropriate MCP(s) for the task. The user should not need to specify them.

Use only relevant MCPs and avoid unnecessary calls.

### Filesystem MCP

Use for:
- Codebase/file inspection
- Repository search
- Architecture and dependency tracing
- Finding components, routes, APIs, and utilities
- Debugging and refactoring
- Creating or modifying project files

Rules:
- Inspect relevant files before editing.
- Do not scan the entire repository unless necessary.
- Expand the search only when required.

### Context7 MCP

Use when official or version-specific documentation is useful for:
- Next.js
- React
- Tailwind CSS
- TypeScript
- Node.js
- Third-party libraries
- Framework APIs
- Library upgrades or deprecated APIs
- Best practices

Prefer current official documentation.

Do not use Context7 for generic JavaScript, CSS, HTML, or basic programming concepts.

### Sequential Thinking MCP

Use for:
- Complex debugging and root-cause analysis
- Architecture decisions
- Large feature planning
- Multi-step reasoning
- Refactoring strategy
- Migrations
- Performance or security planning

### Chrome DevTools MCP

Use for browser-related investigation:
- Console errors
- Network failures
- CSS/layout/rendering issues
- Performance and Lighthouse
- Core Web Vitals
- Accessibility
- Memory or browser behavior

Skip it for backend-only or non-browser tasks.

### Playwright MCP

Use for:
- UI verification
- Browser/user flows
- Responsive testing
- Forms and navigation
- Screenshots
- Visual regression
- Frontend bug reproduction

Verify affected frontend behavior after changes when practical. Skip it for backend-only work.

### Preferred Workflow

Understand → Filesystem → Analyze/Plan if needed → Context7 if needed → Implement → DevTools/Playwright if applicable → Verify

Choose the shortest workflow that safely solves the task.

---

## Planning

For medium, large, or non-trivial tasks:

- Identify affected files.
- Explain the implementation approach when useful.
- Consider risks and trade-offs.
- Keep implementation incremental.
- Avoid unnecessary refactoring.

For simple tasks, do not over-plan or overuse MCPs.

---

## Code & Architecture

- Respect the existing architecture and conventions.
- Reuse existing components, utilities, services, and patterns.
- Avoid duplicate logic.
- Prefer composition and modular code.
- Keep business logic outside UI components where practical.
- Avoid unnecessary abstractions and dependencies.
- Do not create technical debt to solve a short-term problem.
- Preserve comments unless they are obsolete.

### Editing

- Keep diffs as small as possible.
- Do not rewrite working code unnecessarily.
- Do not reformat unrelated code.
- Do not rename or move files unless necessary.
- Do not modify unrelated files.

---

## Performance

Prefer:
- Server Components where appropriate
- `next/image` where appropriate
- Lazy loading
- Code splitting
- Small client bundles
- Efficient rendering

Avoid:
- Unnecessary Client Components
- Duplicate dependencies
- Large runtime costs
- Unnecessary re-renders

Consider performance impact for frontend changes.

---

## Debugging

For bugs:

1. Reproduce the issue.
2. Gather evidence.
3. Identify the root cause.
4. Verify the cause.
5. Implement the safest minimal fix.
6. Verify the fix.
7. Check for regressions.

Never present assumptions as facts.

If uncertain, state:
- Assumption
- Confidence: High / Medium / Low
- How to verify

Fix root causes rather than symptoms.

---

## UI & UX

Preserve the existing:
- Design language
- Spacing
- Typography
- Colors
- Responsiveness
- Accessibility
- Visual consistency
- Animation behavior

Avoid unexpected:
- Layout shifts (CLS)
- Spacing changes
- Typography changes
- Color changes
- Responsive regressions

Do not redesign unless requested.

---

## Security

Never expose, log, or commit:
- Secrets
- API keys
- Passwords
- Tokens
- Environment variables

Prefer secure defaults.

Never disable security controls or recommend insecure practices without explicit justification.

---

## Git & Approval Rules

Never automatically:
- Commit changes
- `git push`
- Force push
- `git reset --hard`
- `git clean`
- Destructive rebase operations
- Delete branches

Ask before:
- Installing or removing packages
- Deleting files
- Editing `.env` files
- Modifying environment variables
- Database migrations
- Deployments
- Destructive Git operations
- `git push`

Do not ask before:
- Reading/searching project files
- Using Filesystem
- Using Context7
- Using Sequential Thinking
- Using Chrome DevTools
- Using Playwright
- Running analysis
- Reviewing architecture or performance

---

## Quality Standard

Before completing a task, verify:

- Requested functionality is addressed.
- Root cause is solved when applicable.
- Existing functionality is preserved.
- No unrelated files were changed.
- Changes are minimal and maintainable.
- Existing architecture is respected.
- Documentation was verified when appropriate.
- Browser behavior was verified when applicable.
- No obvious regressions remain.
- The solution is production-ready.

Do not over-validate simple changes with unnecessary tools.

---

## Response Standard

Be concise but complete.

For technical changes, summarize when relevant:
- What changed
- Why
- Files affected
- Verification performed
- Risks/trade-offs
- Breaking changes

Do not present speculation as fact.

Recommend the safest and most maintainable solution.

---

## Project Preferences

Framework:
- Next.js 16+
- React 19

Preferred stack:
- Tailwind CSS
- Modern React patterns
- Reusable components

Priority:
1. Correctness
2. Maintainability
3. Performance
4. Scalability
5. Readability
6. Developer experience

When solving problems:
- Fix the root cause instead of the symptom.
- Keep changes minimal.
- Avoid unrelated refactoring.
- Preserve existing behavior unless requested.
- Prefer production-ready solutions over quick hacks.