import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    redirect("/setup-org");
  }
  return (
    <div>
      <h2 className="text-blue-400">hello</h2>
    </div>
  );
}
