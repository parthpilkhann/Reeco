import { Group, ActionIcon, Button, useMantineTheme } from "@mantine/core";
import { IconCheck, IconSquareRoundedLetterX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { getStatusJsx } from "./utils";
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/dataSlice";
import ProductModal from "./ProductModal";
import EditModal from "./EditModal";

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

  return (
    <Group justify="space-between" wrap="nowrap">
      {getStatusJsx(status)}
      <Group wrap="nowrap">
        <ActionIcon variant="transparent" onClick={handleCheckClick}>
          <IconCheck />
        </ActionIcon>
        <ActionIcon variant="transparent" onClick={open}>
          <IconSquareRoundedLetterX />
        </ActionIcon>
        <Button
          radius="xl"
          color={theme.colors.green[9]}
          variant="filled"
          onClick={open}
        >
          Edit
        </Button>
      </Group>
      <ProductModal
        status={status}
        name={name}
        id={id}
        open={open}
        opened={opened}
        close={close}
      />
      <EditModal
        status={status}
        name={name}
        id={id}
        open={open}
        opened={opened}
        close={close}
      />
    </Group>
  );
}
