import {
  AppShell,
  Group,
  Text,
  Button,
  rem,
  Paper,
  Stack,
  useMantineTheme,
} from "@mantine/core";

export default function OrderCard() {
  const theme = useMantineTheme();
  return (
    <AppShell.Main px={0} pt={`calc(${rem(36)} + var(--mantine-spacing-md))`}>
      <Paper shadow="lg" py="md">
        <Group px="xl" justify="space-between">
          <Stack>
            <Text>Orders &#62; Order 35467ACV</Text>
            <Text fw={700}>Order 35467ACV</Text>
          </Stack>
          <Group>
            <Button radius="xl" color={theme.colors.green[9]} variant="outline">
              Back
            </Button>
            <Button color={theme.colors.green[9]} radius="xl">
              Approve Order
            </Button>
          </Group>
        </Group>
      </Paper>
    </AppShell.Main>
  );
}
