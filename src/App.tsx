import "@mantine/core/styles.css";
import { MantineProvider, Button } from "@mantine/core";
import { theme } from "./theme";
import Body from "./components/Body";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Body />
    </MantineProvider>
  );
}
