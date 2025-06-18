import LayoutMainPublic from "../../_ui/layouts/main.public";

export default function LayoutPublic({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutMainPublic>{children}</LayoutMainPublic>;
}
