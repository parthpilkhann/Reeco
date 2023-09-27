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
import { useEffect, useState } from "react";
import { data } from "./utils";
import { useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";
import type { ProductDataItem } from "./utils";

export default function TableWrapper() {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState<ProductDataItem[]>([]);

  useEffect(() => {
    // make an api call and set the data in this state.
    setProductData(data);
    dispatch(setData(productData));
  }, [dispatch, productData]);

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
        <ProductTable productData={productData} />
      </Stack>
    </Paper>
  );
}
