import { IconButton, Stack } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface EditButtonProps {
  id: number;
}

const EditButton = ({ id }: EditButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/update/${id}`);
  };

  return (
    <Stack spacing={1} direction={"row"} justifyContent={"center"} mt={1}>
      <IconButton onClick={handleClick} className="bg-yellow-600 text-gray-100">
        <Edit fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default EditButton;
