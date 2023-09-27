import {
  Group,
  Text,
  Button,
  Paper,
  Stack,
  useMantineTheme,
} from "@mantine/core";

export default function OrderCard() {
  const theme = useMantineTheme();
  return (
    <Paper shadow="lg">
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
  );
}
