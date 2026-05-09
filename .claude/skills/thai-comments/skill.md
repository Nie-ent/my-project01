# Thai Comments Skill

Add Thai language comments to code files.

## When to use

Invoked via `/thai-comments` — adds Thai comments to the specified file or the current file being worked on.

## Instructions

1. Read the target file(s) specified by the user, or ask which file if none is specified.
2. For each function, class, and non-obvious block of logic, add a comment in Thai that explains:
   - **What** it does (briefly)
   - **Why** it exists (if non-obvious)
3. Keep comments concise and natural — write as a Thai developer would, not a literal translation.
4. Do not comment obvious one-liners or self-explanatory variable assignments.
5. Preserve all existing comments (English or otherwise) — do not remove or replace them.
6. After editing, run the typecheck (`npm run typecheck`) to confirm no formatting errors were introduced.

## Comment style

- Single-line: `// คำอธิบาย`
- Multi-line: use `//` per line, not `/* */`, unless the existing codebase uses block comments
- Place comments on the line **above** the code they describe, not inline, unless it's a short label

## Example

```ts
// คำนวณภาษีมูลค่าเพิ่ม 7%
function calculateVAT(amount: number): number {
  return amount * 0.07;
}
```
