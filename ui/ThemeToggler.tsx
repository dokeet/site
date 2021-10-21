import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button className="flex space-x-4">
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>light</button>
      ) : (
        <button onClick={() => setTheme("dark")}>dark</button>
      )}
    </button>
  );
};
