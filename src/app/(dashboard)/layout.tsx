import NavBar from "@/components/navbar/NavBar";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <NavBar />
        { children }
    </>
  );
}