import AuthHeader from "./authenticated/main.header";

export default function LayoutMainAuth({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AuthHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
