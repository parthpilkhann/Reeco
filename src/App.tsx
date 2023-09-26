import "@mantine/core/styles.css";
import { MantineProvider, Button } from "@mantine/core";
import { theme } from "./theme";

export default function App() {
  return <MantineProvider theme={theme}>App </MantineProvider>;
}
