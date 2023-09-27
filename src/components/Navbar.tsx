import {
  AppShell,
  Group,
  Title,
  Text,
  Button,
  Stack,
  Divider,
  rem,
  Paper,
  useMantineTheme,
} from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import { IconShoppingCart } from "@tabler/icons-react";
import Header from "./Header";
import OrderCard from "./OrderCard";

export default function Navbar() {
  const pinned = useHeadroom({ fixedAt: 120 });
  const theme = useMantineTheme();

  return (
    <AppShell
      header={{ height: 50, collapsed: !pinned, offset: false }}
      padding="md"
    >
      <AppShell.Header style={{ backgroundColor: theme.colors.green[9] }}>
        <Stack>
          <Group justify="space-between" px="xl" h="100%">
            <Group gap="md">
              <Title order={2} style={{ color: "rgba(255, 255, 255, 1)" }}>
                Reeco
              </Title>
              <Button variant="subtle" color="rgba(255, 255, 255, 1)">
                Store
              </Button>
              <Button variant="subtle" color="rgba(255, 255, 255, 1)">
                Order
              </Button>
              <Button variant="subtle" color="rgba(255, 255, 255, 1)">
                Analytics
              </Button>
            </Group>
            <Group gap="md">
              <IconShoppingCart color="white" />
              <Text style={{ color: "rgba(255, 255, 255, 1)" }}>
                Hello, James
              </Text>
            </Group>
          </Group>
          <OrderCard />
        </Stack>
      </AppShell.Header>
      <Header />
    </AppShell>
  );
}
