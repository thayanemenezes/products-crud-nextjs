import React from "react";
import { FormControl, TextField } from "@mui/material";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  control?: Control<any>;
  isRequired?: boolean;
  errors: any;
  size?: any;
}

const FormInput: React.FC<IProps> = ({
  label,
  name,
  control,
  isRequired,
  errors,
  ...props
}: IProps) => {
  const { color, ...restProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <TextField
            label={label}
            className="w-full"
            {...field}
            {...restProps}
            value={field.value || ""}
            error={!!error}
            helperText={error?.message}
          />
        </FormControl>
      )}
    />
  );
};

export default FormInput;
