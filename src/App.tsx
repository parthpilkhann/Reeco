import "@mantine/core/styles.css";
import { MantineProvider, Button } from "@mantine/core";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Navbar />
    </MantineProvider>
  );
}
