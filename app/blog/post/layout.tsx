import Header from "../../../components/header";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <Header logoLink={`/?back=true`} />
      <main className="post-main">{children}</main>
    </div>
  );
}
