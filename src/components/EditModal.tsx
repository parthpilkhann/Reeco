import {
  Group,
  Button,
  Modal,
  Title,
  Text,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/dataSlice";

interface ProductModalProps {
  status: string;
  name: string;
  id: string;
  opened: boolean;
  open?: () => void;
  close: () => void;
}

export default function EditModal({
  status,
  name,
  id,
  opened,
  close,
}: ProductModalProps) {
  const theme = useMantineTheme();
  const dispatch = useDispatch();

  return (
    <Modal opened={opened} onClose={close}>
      <Stack>
        <Title order={4}>Missing Product?</Title>
        <Text>is {name} product really missing?</Text>
      </Stack>
    </Modal>
  );
}
