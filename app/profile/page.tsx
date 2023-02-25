import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Profile | Budgee", description: "Budgee profile page" };
}

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
    </div>
  );
}
