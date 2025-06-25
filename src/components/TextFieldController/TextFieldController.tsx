import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputType } from "../../types/inputType";

type Props = {
  name: string;
  control: any;
  label: string;
  errors?: any;
  defaultValue?: string;
  type?: InputType;
};

const TextFieldController = ({
  control,
  errors,
  name,
  label,
  type = "text",
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          type={type}
          fullWidth
        />
      )}
    />
  );
};

export default TextFieldController;
