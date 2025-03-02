import { Card } from "@/components/card";
import { ListItem } from "@/components/list-item";
import { prisma } from "@/utils/db";

const getTotalApplications = async () => {
  const result = await prisma.jobApplication.count();
  return result;
};

const getReviewApplications = async () => {
  const result = await prisma.jobApplication.count({
    where: {
      status: "INTERVIEW",
    },
  });
  return result;
};

const getRejectedApplications = async () => {
  const result = await prisma.jobApplication.count({
    where: {
      status: "REJECTED",
    },
  });
  return result;
};

const getOtherThanRejectedApplications = async () => {
  const result = await prisma.jobApplication.count({
    where: {
      NOT: {
        status: "REJECTED",
      },
    },
  });
  return result;
};

const getOfferedApplications = async () => {
  const result = await prisma.jobApplication.count({
    where: {
      status: "OFFER",
    },
  });
  return result;
};

const getMostRecentApplications = async () => {
  const result = await prisma.jobApplication.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });
  return result;
};

export const Page = async () => {
  const totalApplications = await getTotalApplications();

  const rejectedApplications = await getRejectedApplications();

  const otherThanRejectedApplications =
    await getOtherThanRejectedApplications();

  const offeredApplications = await getOfferedApplications();

  const interviewApplications = await getReviewApplications();

  const mostRecentApplications = await getMostRecentApplications();

  return (
    <div className="flex flex-auto flex-col gap-8">
      <div className="flex flex-auto gap-8">
        <Card
          title={totalApplications.toString()}
          description="Total Applications"
        />
        <Card
          title={offeredApplications.toString()}
          description="Offered Applications"
        />
        <Card
          title={interviewApplications.toString()}
          description="Interview Applications"
        />

        <Card
          title={rejectedApplications.toString()}
          description="Rejected Applications"
        />
        <Card
          title={otherThanRejectedApplications.toString()}
          description="In progress Applications"
        />
      </div>
      <div>
        <p>Recent applicants</p>
        <ul>
          {mostRecentApplications.map((applicant) => (
            <ListItem
              key={applicant.id}
              applicant={{
                company: applicant.company,
                createdAt: applicant.createdAt.toString(),
                id: applicant.id,
                status: applicant.status,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
