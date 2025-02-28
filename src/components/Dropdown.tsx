import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FilterAlt } from "@mui/icons-material";

export default function DropdownMenu() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className="text-gray-500 text-md flex w-44 bg-slate-200"
      >
        <FilterAlt fontSize="small" className="mr-2 text-green-600" />
        Filtrar
      </Button>
      <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} className="hover:bg-gray-100">
          Categoria
        </MenuItem>
        <MenuItem onClick={handleClose} className="hover:bg-gray-100">
          Menor Preço
        </MenuItem>
        <MenuItem onClick={handleClose} className="hover:bg-gray-100">
          Maior Preço
        </MenuItem>
      </Menu>
    </div>
  );
}
