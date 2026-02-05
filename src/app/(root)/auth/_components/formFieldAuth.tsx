import { Field, FieldLabel } from "@/ui/components/field";
import { Input } from "@/ui/components/input";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface FormFieldAuthProps extends ComponentPropsWithoutRef<typeof Input> {
  label: string;
  error?: string; // Propiedad para el mensaje de error
}

// Usamos forwardRef para que react-hook-form pueda controlar el input
export const FormFieldAuth = forwardRef<HTMLInputElement, FormFieldAuthProps>(
  ({ label, id, error, ...props }, ref) => {
    return (
      <Field className="space-y-1">
        <FieldLabel htmlFor={id} className={error ? "text-destructive" : ""}>
          {label}
        </FieldLabel>

        <Input
          id={id}
          ref={ref}
          {...props}
          className={
            error ? "border-destructive focus-visible:ring-destructive" : ""
          }
        />

        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}
      </Field>
    );
  },
);

FormFieldAuth.displayName = "FormFieldAuth";
