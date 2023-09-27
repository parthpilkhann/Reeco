import { Group, Text, Paper, Divider, Stack, Title } from "@mantine/core";

export default function DetailsCard() {
  return (
    <Paper shadow="md" p="md">
      <Group justify="space-between" gap="xl" wrap="nowrap">
        <Stack>
          <Title order={5} style={{ color: "gray" }}>
            Lorem{" "}
          </Title>
          <Text fw={700}>Lorem ipsu</Text>
        </Stack>
        <Divider size="md" orientation="vertical" />
        <Stack>
          <Title order={5} style={{ color: "gray" }}>
            Lorem{" "}
          </Title>
          <Text fw={700}>Lorem ipsu</Text>
        </Stack>
        <Divider size="md" orientation="vertical" />
        <Stack>
          <Title order={5} style={{ color: "gray" }}>
            Lorem{" "}
          </Title>
          <Text fw={700}>Lorem ipsu</Text>
        </Stack>
        <Divider size="md" orientation="vertical" />
        <Stack>
          <Title order={5} style={{ color: "gray" }}>
            Lorem{" "}
          </Title>
          <Text fw={700}>Lorem ipsu</Text>
        </Stack>
        <Divider size="md" orientation="vertical" />
        <Stack>
          <Title order={5} style={{ color: "gray" }}>
            Lorem{" "}
          </Title>
          <Text fw={700}>Lorem ipsu</Text>
        </Stack>
        <Divider size="md" orientation="vertical" />
        <Stack>
          <Title order={5} style={{ color: "gray" }}>
            Lorem{" "}
          </Title>
          <Text fw={700}>Lorem ipsu</Text>
        </Stack>
      </Group>
    </Paper>
  );
}
