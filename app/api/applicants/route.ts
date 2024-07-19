import { getQueryParams } from "@/utils/api";
import { getUserFromClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const searchParams = getQueryParams<{
    searchKeyword: string;
  }>(req.url);

  const user = await getUserFromClerkId();
  const entries = await prisma.jobApplication.findMany({
    where: {
      userId: user.id,
      AND: {
        company: {
          contains: searchParams.searchKeyword.toLowerCase(),
          mode: "insensitive",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({
    data: entries,
  });
};
