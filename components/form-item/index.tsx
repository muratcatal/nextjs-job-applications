import React, { isValidElement } from "react";
import { Field } from "react-final-form";

type FormItemProps = {
  label: string;
  children: React.ReactNode;
  name: string;
};
export const FormItem = ({ children, label, name }: FormItemProps) => {
  return (
    <Field
      name={name}
      render={(props) => {
        return (
          isValidElement(children) &&
          React.cloneElement(children, {
            value: props.input.value || "",
            onChange: props.input.onChange,
          } as any)
        );
      }}
    />
  );
};
