import "@mantine/core/styles.css";
import { MantineProvider, Button } from "@mantine/core";
import { theme } from "./theme";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Navbar />
    </MantineProvider>
  );
}
