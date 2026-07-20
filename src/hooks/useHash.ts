import { useState, useEffect } from "react";

export function useHash() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setHashValue = (newHash: string) => {
    window.location.hash = newHash;
    setHash(newHash);
  };

  return [hash, setHashValue] as const;
}
