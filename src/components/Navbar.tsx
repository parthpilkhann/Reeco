import { Group, Title, Button, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
export default function Navbar() {
  return (
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
        <Text style={{ color: "rgba(255, 255, 255, 1)" }}>Hello, James</Text>
      </Group>
    </Group>
  );
}
