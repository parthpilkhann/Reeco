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


export default function StatusComp({
  status,
  name,
}: {
  status: string;
  name: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

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
