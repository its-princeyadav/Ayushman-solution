"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe matchMedia hook - starts `false` (matches every consumer's own
 * `mounted` gating, so there's no server/client value to hydrate around)
 * then tracks live changes for the lifetime of the query.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handleChange = (event) => setMatches(event.matches);
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
