export const theme = {
  fonts: {
    body: 'Lato, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  colors: {
    base: "#000000",
    surface: "#0A0A0A",
    primary: "#c6f135",
    secondary: "#ff6b4a",
    tertiary: "#7B7CFF",
    text: "#f5f5f5",
    muted: "#9ca3af",
  },
} as const;

export type Theme = typeof theme;
