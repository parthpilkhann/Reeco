import {
  Modal,
  Title,
  Text,
  Stack,
  Group,
  Image,
  Chip,
  Button,
  useMantineTheme,
} from "@mantine/core";

interface ProductModalProps {
  status: string;
  name: string;
  id: string;
  opened: boolean;
  open?: () => void;
  close: () => void;
}

export default function EditModal({ name, opened, close }: ProductModalProps) {
  const theme = useMantineTheme();
  return (
    <Modal opened={opened} onClose={close}>
      <Stack>
        <Title order={4}>Missing Product?</Title>
        <Text>is {name} product really missing?</Text>
        <Group justify="space-between" wrap="nowrap">
          <Image h={100} w={100} src="public\Avocado Hass.jpg" />
          <Stack w="40%">
            <Group>
              <Text>Price</Text>
              <Text>9900</Text>
            </Group>
            <Group>
              <Text>Price</Text>
              <Text>9900</Text>
            </Group>
            <Group>
              <Text>Price</Text>
              <Text>9900</Text>
            </Group>
          </Stack>
        </Group>
        <Text fw={600}>Choose Reason </Text>
        <Chip.Group>
          <Group justify="center">
            <Chip value="1">Single chip</Chip>
            <Chip value="2">Can be selected</Chip>
            <Chip value="3">At a time</Chip>
          </Group>
        </Chip.Group>
        <Group justify="flex-end">
          <Button radius="xl" color={theme.colors.green[9]} variant="outline">
            Cancel
          </Button>
          <Button radius="xl" color={theme.colors.green[9]} variant="outline">
            Send
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
