import { useEffect, useRef } from 'react';
import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';

/**
 * Runs accessibility checks in a post-commit effect (never during render) and
 * emits each resulting warning via `console.warn`.
 *
 * `getWarnings` is a thunk so the underlying `a11yChecks.*` call only runs after
 * commit. Warnings are de-duplicated against the previous run, so a genuine
 * issue is reported exactly once - including under StrictMode, which mounts the
 * effect, runs its (no-op) cleanup, then mounts it again.
 */
export const useA11yWarnings = (
  getWarnings: () => string[] | null | undefined,
  deps: React.DependencyList
) => {
  const lastWarned = useRef<string | null>(null);

  useEffect(() => {
    if (!DEVELOPMENT) return;

    const warnings = getWarnings();
    const signature = warnings?.length ? warnings.join('\n') : null;

    if (signature === lastWarned.current) return;
    lastWarned.current = signature;

    if (signature) warnings!.forEach(warn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
