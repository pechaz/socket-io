import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome Page",
  description: "Welcome Page",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Link href="/client">Go To Client</Link>
      <Link href="/webapp">Go To WeeApp</Link>
    </div>
  );
}
