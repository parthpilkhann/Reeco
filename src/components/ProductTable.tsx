import { Table, Badge } from "@mantine/core";
import { data } from "./utils";

export function ProductTable() {
  function getStatusJsx(status: string) {
    let badge;
    if (status === "missing") {
      badge = <Badge color="red">{status}</Badge>;
    } else if (status === "urgentlyMissing") {
      badge = <Badge color="rgba(189, 25, 25, 1)">{status}</Badge>;
    }
    if (status === "approved") {
      badge = <Badge color="green">{status}</Badge>;
    }
    return badge;
  }

  const rows = data.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.brand}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
      <Table.Td>{row.quantity}</Table.Td>
      <Table.Td>{row.total}</Table.Td>
      <Table.Td>{getStatusJsx(row.status)}</Table.Td>
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
