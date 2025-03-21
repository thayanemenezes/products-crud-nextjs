import React from "react";
import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";

interface DropdownMenuProps {
  onFilterChange: (option: "priceAsc" | "priceDesc") => void;
}

export default function DropdownMenu({ onFilterChange }: DropdownMenuProps) {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleFilterChange = (option: "priceAsc" | "priceDesc") => {
    onFilterChange(option);
    handleClose();
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
        <MenuItem
          onClick={() => handleFilterChange("priceAsc")}
          className="hover:bg-gray-100"
        >
          Menor Preço
        </MenuItem>
        <MenuItem
          onClick={() => handleFilterChange("priceDesc")}
          className="hover:bg-gray-100"
        >
          Maior Preço
        </MenuItem>
      </Menu>
    </div>
  );
}
