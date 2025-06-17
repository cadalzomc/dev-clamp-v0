import { Header } from "./main.header";
import { MainPublicFooter } from "./main.public.footer";

export default function LayoutMainPublic({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <MainPublicFooter />
    </div>
  );
}
