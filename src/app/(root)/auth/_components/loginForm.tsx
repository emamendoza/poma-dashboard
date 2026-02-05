"use client";
import { Button } from "@/ui/components/button";
import { Field, FieldSet } from "@/ui/components/field";
import { FormFieldAuth } from "./formFieldAuth";

export const LoginForm = () => {
  return (
    <form>
      <FieldSet className="w-full max-w-xs">
        <FormFieldAuth
          id="email"
          label="Correo Electrónico"
          type="email"
          placeholder="ejemplo@correo.com"
          required
        />

        <FormFieldAuth id="password" label="Contraseña" type="password" />
      </FieldSet>
      <Field orientation="horizontal">
        <Button type="submit">loguearse</Button>
      </Field>
    </form>
  );
};
