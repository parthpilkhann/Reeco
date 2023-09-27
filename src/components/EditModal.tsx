import {
  Modal,
  Title,
  Text,
  Stack,
  Group,
  Image,
  Chip,
  Button,
  NumberInput,
  useMantineTheme,
} from "@mantine/core";

interface ProductModalProps {
  status: string;
  name: string;
  id: string;
  price: number;
  quantity: number;
  total: number;
  opened: boolean;
  open?: () => void;
  close: () => void;
}

export default function EditModal({
  name,
  opened,
  price,
  quantity,
  total,
  close,
}: ProductModalProps) {
  const theme = useMantineTheme();

  return (
    <Modal opened={opened} onClose={close}>
      <Stack>
        <Title order={4}>Missing Product?</Title>
        <Text>is {name} product really missing?</Text>
        <Group justify="space-between" wrap="nowrap">
          <Image h={100} w={100} src="public\Avocado Hass.jpg" />
          <Stack w="40%">
            <Group wrap="nowrap">
              <Text>Price</Text>
              <NumberInput allowNegative={false} defaultValue={price} />
            </Group>
            <Group wrap="nowrap">
              <Text>Quantity</Text>
              <NumberInput allowNegative={false} defaultValue={quantity} />
            </Group>
            <Group wrap="nowrap">
              <Text>Total</Text>
              <NumberInput allowNegative={false} defaultValue={total} />
            </Group>
          </Stack>
        </Group>
        <Text fw={600}>Choose Reason </Text>
        <Chip.Group>
          <Group justify="center">
            <Chip value="quantity">Quantity</Chip>
            <Chip value="price">Price</Chip>
            <Chip value="missing">Missing</Chip>
            <Chip value="other">Other</Chip>
          </Group>
        </Chip.Group>
        <Group justify="flex-end">
          <Button radius="xl" color={theme.colors.green[9]} variant="outline">
            Cancel
          </Button>
          <Button color={theme.colors.green[9]} radius="xl">
            Send
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
