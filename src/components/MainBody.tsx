import { AppShell, Group, Text, Paper, Divider, rem } from "@mantine/core";

export default function MainBody() {
  return (
    <AppShell.Main px={0} pt={`calc(${rem(120)} + var(--mantine-spacing-md))`}>
      <Paper>
        <Group>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            distinctio?
          </Text>
          <Divider size="md" orientation="vertical" />
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            distinctio?
          </Text>
          <Divider size="md" orientation="vertical" />
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            distinctio?
          </Text>
          <Divider size="md" orientation="vertical" />
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            distinctio?
          </Text>
          <Divider size="md" orientation="vertical" />
        </Group>
      </Paper>
    </AppShell.Main>
  );
}
