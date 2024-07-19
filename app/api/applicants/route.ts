import { getUserFromClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const user = await getUserFromClerkId();
  const entries = await prisma.jobApplication.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({
    data: entries,
  });
};
