import { Table, Group, Image } from "@mantine/core";
import StatusComp from "./StatusComp";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function ProductTable() {
  const productData = useSelector((state: RootState) => state.data.items);

  const rows = productData?.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>
        <Group wrap="nowrap">
          <Image h="xl" w="xl" src="public\Avocado Hass.jpg" />
          {row.name}
        </Group>
      </Table.Td>
      <Table.Td>{row.brand}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
      <Table.Td>{row.quantity}</Table.Td>
      <Table.Td>{row.total}</Table.Td>
      <Table.Td>
        {
          <StatusComp
            status={row.status}
            name={row.name}
            id={row.id}
            quantity={row.quantity}
            price={row.price}
            reason={row.reason}
          />
        }
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table miw={700}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product Name</Table.Th>
          <Table.Th>Brand</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
