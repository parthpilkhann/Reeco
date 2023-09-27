import { Modal, Title, Text, Stack } from "@mantine/core";

interface ProductModalProps {
  status: string;
  name: string;
  id: string;
  opened: boolean;
  open?: () => void;
  close: () => void;
}

export default function EditModal({ name, opened, close }: ProductModalProps) {
  return (
    <Modal opened={opened} onClose={close}>
      <Stack>
        <Title order={4}>Missing Product?</Title>
        <Text>is {name} product really missing?</Text>
      </Stack>
    </Modal>
  );
}
