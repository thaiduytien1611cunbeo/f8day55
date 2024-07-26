"use client";

import { ThemeProvider } from "acme-theme";
import { AuthProvider } from "acme-auth";

export function ProviderContext({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
