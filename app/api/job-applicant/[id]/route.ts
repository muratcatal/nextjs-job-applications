import { getUserFromClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await getUserFromClerkId();

  const entry = await prisma.jobApplication.findUniqueOrThrow({
    where: {
      id: params.id,
      userId: user.id,
    },
  });

  return NextResponse.json({
    data: entry,
  });
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const data = await req.json();
  const user = await getUserFromClerkId();
  console.log("------>", data);
  const entry = await prisma.jobApplication.update({
    where: {
      id: params.id,
      userId: user.id,
    },
    data: data,
  });

  return NextResponse.json({
    data: entry,
  });
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await getUserFromClerkId();
  const entry = await prisma.jobApplication.delete({
    where: {
      id: params.id,
      userId: user.id,
    },
  });

  return NextResponse.json({});
};
