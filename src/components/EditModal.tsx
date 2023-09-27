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
import { useState } from "react";

interface ProductModalProps {
  status: string;
  name: string;
  id: string;
  price: number;
  quantity: number;
  opened: boolean;
  reason: string;
  open?: () => void;
  close: () => void;
}

export default function EditModal({
  name,
  opened,
  price,
  quantity,
  close,
  reason,
}: ProductModalProps) {
  const theme = useMantineTheme();
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newReason, setNewReason] = useState(reason);

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
              <NumberInput
                allowNegative={false}
                onChange={(e) => setNewPrice(e as number)}
                value={newPrice}
              />
            </Group>
            <Group wrap="nowrap">
              <Text>Quantity</Text>
              <NumberInput
                allowNegative={false}
                onChange={(e) => setNewQuantity(e as number)}
                value={newQuantity}
              />
            </Group>
            <Group wrap="nowrap">
              <Text>Total</Text>
              <NumberInput
                allowNegative={false}
                readOnly
                value={newQuantity * newPrice}
              />
            </Group>
          </Stack>
        </Group>
        <Text fw={600}>Choose Reason</Text>
        <Chip.Group
          multiple={false}
          value={newReason}
          onChange={(e) => setNewReason(e)}
        >
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
