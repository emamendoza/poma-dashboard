import { Field, FieldLabel } from "@/ui/components/field";
import { Input } from "@/ui/components/input";
import { ComponentPropsWithoutRef } from "react";

interface FormFieldAuthProps extends ComponentPropsWithoutRef<typeof Input> {
  label: string;
}

export const FormFieldAuth = ({ label, id, ...props }: FormFieldAuthProps) => {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input id={id} {...props} />
    </Field>
  );
};
