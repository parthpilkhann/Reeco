import { Group, Badge, ActionIcon, Button } from "@mantine/core";
import { IconCheck, IconSquareRoundedLetterX } from "@tabler/icons-react";

export default function StatusComp({ status }: { status: string }) {
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
        <ActionIcon variant="transparent">
          <IconSquareRoundedLetterX />
        </ActionIcon>
        <Button>Edit</Button>
      </Group>
    </Group>
  );
}
