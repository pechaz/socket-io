import { Metadata } from "next";

import { ChatAdminPage } from "@/components/atomic/pages";

export const metadata: Metadata = {
  title: "Chat Admin",
  description: "Chat Admin",
};

export default function AdminPage() {
  return <ChatAdminPage />;
}
