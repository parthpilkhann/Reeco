import { Table } from "@mantine/core";
import { data } from "./utils";
import StatusComp from "./StatusComp";

export function ProductTable() {
  const rows = data.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.brand}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
      <Table.Td>{row.quantity}</Table.Td>
      <Table.Td>{row.total}</Table.Td>
      <Table.Td>{<StatusComp status={row.status} name={row.name} />}</Table.Td>
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
