"use client";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Field, Form } from "react-final-form";
import { FormItem } from "../form-item";

type ApplicationForm = {
  jobApplication?: {
    company: string;
    jobLink: string;
    details: string;
    status: string;
  };
  onSubmit: (values: any) => void;
  onDelete?: () => void;
};

export const ApplicantForm = ({
  jobApplication,
  onSubmit,
  onDelete,
}: ApplicationForm) => {
  return (
    <Form
      initialValues={jobApplication}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className="flex flex-col gap-4 max-w-md" onSubmit={handleSubmit}>
          <FormItem label="Name" name="company">
            <TextField
              label="Company"
              variant="outlined"
              placeholder="Company"
            />
          </FormItem>
          <FormItem label="Job link" name="jobLink">
            <TextField
              label="Job link"
              variant="outlined"
              placeholder="Job link"
            />
          </FormItem>
          <FormItem label="Details" name="details">
            <TextField
              label="Details"
              multiline
              rows={4}
              variant="outlined"
              placeholder="Details"
            />
          </FormItem>
          <FormItem label="Salary Expectation" name="salaryExpectation">
            <TextField
              label="Salary Expectation"
              variant="outlined"
              placeholder="Salary Expectation"
            />
          </FormItem>

          <Field
            name={"createdAt"}
            render={(props) => {
              return (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    name="createdAt"
                    value={new Date(props.input.value)}
                    onChange={props.input.onChange}
                  />
                </LocalizationProvider>
              );
            }}
          />

          <FormItem label="Status" name="status">
            <Select label="Status" defaultValue={"APPLIED"}>
              <MenuItem value={"APPLIED"}>APPLIED</MenuItem>
              <MenuItem value={"INTERVIEW"}>INTERVIEW</MenuItem>
              <MenuItem value={"REJECTED"}>REJECTED</MenuItem>
              <MenuItem value={"OFFER"}>OFFER</MenuItem>
            </Select>
          </FormItem>
          <div className="flex flex-row w-full gap-2">
            {onDelete && (
              <Button variant="contained" color="warning" onClick={onDelete}>
                Delete
              </Button>
            )}
            <Button type="submit" variant="contained" fullWidth>
              Save
            </Button>
          </div>
        </form>
      )}
    />
  );
};
