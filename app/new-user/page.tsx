import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();

  if (!user) {
    console.error("[ERROR]: No user found");
    return;
  }

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id,
        email: user?.emailAddresses[0]?.emailAddress,
      },
    });
  }

  redirect("/");
};
export default async function Page() {
  await createNewUser();

  return <div>Loading...</div>;
}
