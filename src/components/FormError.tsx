import { Alert } from "@mui/material";

interface FormErrorProps {
  message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  return <p>{message}</p>;
};
