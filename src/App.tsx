import "@mantine/core/styles.css";
import { MantineProvider, Button } from "@mantine/core";
import { theme } from "./theme";
import { Provider } from "react-redux";

import Body from "./components/Body";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Body />
      </MantineProvider>
    </Provider>
  );
}
