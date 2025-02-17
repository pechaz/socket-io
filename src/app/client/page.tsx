import { Metadata } from "next";

import { ChatClientPage } from "@/components/atomic/pages";

export const metadata: Metadata = {
  title: "Chat Client",
  description: "Chat Client",
};

export default function ClientPage() {
  return <ChatClientPage />;
}
