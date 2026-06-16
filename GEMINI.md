# Project Instructions: Hydration Error Prevention

This project uses Next.js with App Router and React 19 (React Compiler). Hydration errors can occur when the server-rendered HTML does not match the client-rendered HTML.

## Common Causes in this Project

1. **Logo Structure Mismatch**: The `Navbar` logo `Image` component was previously rendered without an explicit wrapper `div` on the server, but the client expected a specific structure with Tailwind classes.
2. **Conditional Rendering based on Window**: Using `typeof window !== 'undefined'` in the render body causes mismatches.
3. **Dynamic Data**: Using `Date.now()`, `Math.random()`, or local-specific date formatting.

## Permanent Solutions & Best Practices

### 1. Structural Consistency
Always wrap `Image` components in a stable container if they are prone to hydration shifts, especially when using specific Tailwind layouts.

```tsx
<div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
  <Image src="..." width={32} height={32} className="w-full h-full object-contain" />
</div>
```

### 2. Use `useEffect` for Client-Only State
Ensure that any state that depends on browser APIs (like `window.scrollY` or `localStorage`) is only applied after the component has mounted.

```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

// Only render client-specific parts after mount
return (
  <>
    {mounted && <ClientOnlyComponent />}
  </>
);
```

### 3. Stable Dates
For components displaying the current year (e.g., Footer), use Server Components whenever possible. If it must be a Client Component, ensure the initial render is stable.

### 4. Valid HTML Nesting
Avoid nesting elements incorrectly (e.g., `<div>` inside `<p>`, or `<a>` inside `<a>`).

## Troubleshooting
If a hydration error persists:
1. Check the browser console for the specific diff (indicated by `+` for Client and `-` for Server).
2. Look for "uncaughtError: Hydration failed" in the development logs.
3. Verify that browser extensions are not injecting HTML before React hydrates.
