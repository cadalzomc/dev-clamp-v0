import LayoutMainAuth from "../../_ui/layouts/main.auth";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutMainAuth>{children}</LayoutMainAuth>;
}
