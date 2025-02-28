import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useProductStore } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";

const DeleteButton = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false);
  const { deleteProduct } = useProductStore();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteProduct(product.id!);
    handleClose();
  };

  return (
    <>
      <Stack spacing={1} direction={"row"} justifyContent={"center"} mt={1}>
        <IconButton onClick={handleClick} className="bg-red-600 text-gray-100">
          <Delete fontSize="small" />
        </IconButton>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza que deseja excluir o produto "{product.title}"?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
