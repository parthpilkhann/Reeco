import { AppShell, rem } from "@mantine/core";
import DetailsCard from "./DetailsCard";

export default function MainBody() {
  return (
    <AppShell.Main pt={`calc(${rem(120)} + var(--mantine-spacing-md))`}>
      <DetailsCard />
    </AppShell.Main>
  );
}
