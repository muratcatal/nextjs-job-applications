import { getUserFromClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();
  const user = await getUserFromClerkId();
  console.log(data, user);
  const entry = await prisma.jobApplication.create({
    data: {
      ...data,
      userId: user.id,
    },
  });

  return NextResponse.json({
    data: entry,
  });
};
