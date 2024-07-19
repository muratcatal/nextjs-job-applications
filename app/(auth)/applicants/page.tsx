"use client";

import { ListItem } from "@/components/list-item";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export const Page = () => {
  const [applicants, setApplicants] = useState<
    {
      id: string;
      company: string;
      jobLink: string;
      createdAt: string;
      status: string;
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/applicants");
      setApplicants(response.data.data);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {applicants.length > 0 && (
        <div>
          There are <b>{applicants.length}</b> applicants since{" "}
          <b>
            {format(
              applicants?.[applicants?.length - 1].createdAt,
              "yyyy-MM-dd"
            )}
          </b>
        </div>
      )}
      <ul>
        {applicants.map((applicant) => (
          <ListItem
            key={applicant.id}
            applicant={{
              company: applicant.company,
              createdAt: applicant.createdAt,
              id: applicant.id,
              status: applicant.status,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Page;
