"use client";
import { ApplicantForm } from "@/components/applicant-form";
import { Snackbar } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Page = ({ params }: { params: { id: string } }) => {
  const [jobApplication, setJobApplication] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const route = useRouter();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/job-applicant/${params.id}`);

      setJobApplication(data.data);
    })();
  }, [params.id]);

  const handleSave = async (values: any) => {
    await axios.patch(`/api/job-applicant/${params.id}`, values);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/job-applicant/${params.id}`);
    route.back();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        open={open}
        onClose={handleClose}
        message="Applicant added"
      />
      {!jobApplication && <div>Loading...</div>}
      {jobApplication && (
        <ApplicantForm
          jobApplication={jobApplication}
          onSubmit={handleSave}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Page;
