import {
  Paper,
  TextInput,
  ActionIcon,
  Stack,
  rem,
  Group,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconPrinter } from "@tabler/icons-react";
import { ProductTable } from "./ProductTable";

export default function TableWrapper() {
  const theme = useMantineTheme();

  return (
    <Paper shadow="md" p="md">
      <Stack>
        <Group justify="space-between">
          <TextInput
            radius="xl"
            size="md"
            placeholder="Search questions"
            rightSectionWidth={42}
            leftSection={
              <IconSearch
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            }
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
              >
                <IconArrowRight
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            }
          />
          <Group justify="center">
            <Button radius="xl" color={theme.colors.green[9]} variant="outline">
              Add Item
            </Button>
            <IconPrinter />
          </Group>
        </Group>
        <ProductTable />
      </Stack>
    </Paper>
  );
}
