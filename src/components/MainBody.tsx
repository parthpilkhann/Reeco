import { AppShell, rem } from "@mantine/core";
import DetailsCard from "./DetailsCard";
import TableWrapper from "./TableWrapper";

export default function MainBody() {
  return (
    <AppShell.Main  pt={`calc(${rem(120)} + var(--mantine-spacing-md))`}>
      <DetailsCard />
      <TableWrapper />
    </AppShell.Main>
  );
}
