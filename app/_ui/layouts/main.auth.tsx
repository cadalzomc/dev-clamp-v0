export default function LayoutMainAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div>AUTH</div>
      <main className="flex-1">{children}</main>
    </div>
  );
}
