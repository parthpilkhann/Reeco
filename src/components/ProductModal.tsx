import {
  Group,
  Button,
  Modal,
  Title,
  Text,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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

export default function ProductModal({
  status,
  name,
  id,
  opened,
  close,
}: ProductModalProps) {
  const theme = useMantineTheme();
  const dispatch = useDispatch();

  function handleNoClick() {
    if (status !== "missing") {
      dispatch(changeStatus({ id, newStatus: "missing" }));
    }
    close();
  }

  function handleYesClick() {
    if (status !== "urgentlyMissing") {
      dispatch(changeStatus({ id, newStatus: "urgentlyMissing" }));
    }
    close();
  }

  return (
    <Modal opened={opened} onClose={close}>
      <Stack>
        <Title order={4}>Missing Product?</Title>
        <Text>is {name} product really missing?</Text>
        <Group>
          <Button
            onClick={handleYesClick}
            radius="xl"
            color={theme.colors.green[9]}
            variant="outline"
          >
            Yes
          </Button>
          <Button
            onClick={handleNoClick}
            radius="xl"
            color={theme.colors.green[9]}
            variant="outline"
          >
            No
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
