import React from "react";
import { Visibility } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

import { useRouter } from "next/navigation";

interface VisualizeButtonProps {
  id: number;
}

const VisualizeButton = ({ id }: VisualizeButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/visualize/${id}`);
  };

  return (
    <Stack spacing={1} direction={"row"} justifyContent={"center"} mt={1}>
      <IconButton onClick={handleClick} className="bg-blue-600 text-gray-100">
        <Visibility fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default VisualizeButton;
