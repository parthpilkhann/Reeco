import { AppShell } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import MainBody from "./MainBody";
import UpperBody from "./UpperBody";

export default function Body() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 50, collapsed: !pinned, offset: false }}
      padding="md"
    >
      <UpperBody />
      <MainBody />
    </AppShell>
  );
}
