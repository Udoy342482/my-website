import { requireSession } from "@/lib/dal";
import { AdminShell } from "@/app/admin/_components/admin-shell";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireSession();

  return <AdminShell>{children}</AdminShell>;
}
