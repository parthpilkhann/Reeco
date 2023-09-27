import {
  Group,
  ActionIcon,
  Button,
  Modal,
  Title,
  Text,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { IconCheck, IconSquareRoundedLetterX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { getStatusJsx } from "./utils";
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/dataSlice";

export default function StatusComp({
  status,
  name,
  id,
}: {
  status: string;
  name: string;
  id: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const dispatch = useDispatch();

  function handleCheckClick() {
    if (status !== "approved") {
      dispatch(changeStatus({ id, newStatus: "approved" }));
    }
    close();
  }

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
    <Group justify="space-between">
      {getStatusJsx(status)}
      <Group>
        <ActionIcon variant="transparent" onClick={handleCheckClick}>
          <IconCheck />
        </ActionIcon>
        <ActionIcon variant="transparent" onClick={open}>
          <IconSquareRoundedLetterX />
        </ActionIcon>
        <Button radius="xl" color={theme.colors.green[9]} variant="filled">
          Edit
        </Button>
      </Group>
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
    </Group>
  );
}
