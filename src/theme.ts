import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    green: [
      "#EBFBEE",
      "#D3F9D8",
      "#B2F2BB",
      "#8CE99A",
      "#69DB7C",
      "#51CF66",
      "#40C057",
      "#37B24D",
      "#2F9E44",
      "#2B8A3E",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});
