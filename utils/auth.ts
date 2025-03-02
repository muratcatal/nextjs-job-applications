import { auth } from "@clerk/nextjs/server";
import { prisma } from "./db";

export const getUserFromClerkId = async (select = { id: true }) => {
  const { userId } = auth();
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
    select,
  });

  return user;
};
