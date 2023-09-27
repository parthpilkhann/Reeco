import { Stack, AppShell, useMantineTheme } from "@mantine/core";
import Navbar from "./Navbar";
import OrderCard from "./OrderCard";

export default function UpperBody() {
  const theme = useMantineTheme();

  return (
    <AppShell.Header style={{ backgroundColor: theme.colors.green[9] }}>
      <Stack>
        <Navbar />
        <OrderCard />
      </Stack>
    </AppShell.Header>
  );
}
