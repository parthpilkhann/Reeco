import { Group, ActionIcon, Button, useMantineTheme } from "@mantine/core";
import { IconCheck, IconSquareRoundedLetterX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { getStatusJsx } from "./utils";
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/dataSlice";
import ProductModal from "./ProductModal";
import EditModal from "./EditModal";

interface StatusCompProps {
  status: string;
  name: string;
  id: string;
  quantity: number;
  price: number;
  reason: string;
}

export default function StatusComp({
  status,
  name,
  id,
  quantity,
  price,
  reason,
}: StatusCompProps) {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  // Note: we could have just de-structured the stuff out of useDiclosure but since we are using 2 different useDiclosure hooks hence we had to name them.
  const edit = useDisclosure(false);
  const openedEdit = edit[0];
  const openEdit = edit[1].open;
  const closeEdit = edit[1].close;

  const product = useDisclosure(false);
  const openedProduct = product[0];
  const openProduct = product[1].open;
  const closeProduct = product[1].close;

  function handleCheckClick() {
    if (status !== "approved") {
      dispatch(changeStatus({ id, newStatus: "approved" }));
    }
  }

  return (
    <Group justify="space-between" wrap="nowrap">
      {getStatusJsx(status)}
      <Group wrap="nowrap">
        <ActionIcon variant="transparent" onClick={handleCheckClick}>
          <IconCheck />
        </ActionIcon>
        <ActionIcon variant="transparent" onClick={openProduct}>
          <IconSquareRoundedLetterX />
        </ActionIcon>
        <Button
          radius="xl"
          color={theme.colors.green[9]}
          variant="filled"
          onClick={openEdit}
        >
          Edit
        </Button>
      </Group>
      <ProductModal
        status={status}
        name={name}
        id={id}
        open={openProduct}
        opened={openedProduct}
        close={closeProduct}
      />
      <EditModal
        status={status}
        name={name}
        id={id}
        open={openEdit}
        opened={openedEdit}
        close={closeEdit}
        quantity={quantity}
        price={price}
        reason={reason}
      />
    </Group>
  );
}
