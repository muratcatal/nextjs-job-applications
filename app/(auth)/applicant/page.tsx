"use client";
import { ApplicantForm } from "@/components/applicant-form";
import { Snackbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const Page = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (values: Record<string, any>) => {
    axios.post("/api/job-applicant", values);
    setOpen(true);
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
      <ApplicantForm onSubmit={(values) => handleSubmit(values)} />
    </>
  );
};

export default Page;
