import LayoutMainPublic from "../_ui/layouts/main.public";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutMainPublic>{children}</LayoutMainPublic>;
}
