import {
  Group,
  Badge,
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

export default function StatusComp({
  status,
  name,
}: {
  status: string;
  name: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  function getStatusJsx(status: string) {
    let badge;
    if (status === "missing") {
      badge = <Badge color="red">Missing</Badge>;
    } else if (status === "urgentlyMissing") {
      badge = <Badge color="rgba(189, 25, 25, 1)">Urgently Missing</Badge>;
    } else if (status === "approved") {
      badge = <Badge color="green">Approved</Badge>;
    } else {
      badge = <Badge color="green">Approved</Badge>;
    }
    return badge;
  }

  return (
    <Group justify="space-between">
      {getStatusJsx(status)}
      <Group>
        <ActionIcon variant="transparent">
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
            <Button radius="xl" color={theme.colors.green[9]} variant="outline">
              Yes
            </Button>
            <Button radius="xl" color={theme.colors.green[9]} variant="outline">
              No
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Group>
  );
}
