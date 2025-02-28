"use client";
import React from "react";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import { usePathname } from "next/navigation";
import { formatPathname } from "@/utils/format";

const NavBar = () => {
  const pathname = usePathname();
  const formattedPathname = formatPathname(pathname);

  return (
    <Box p={4} width={"100%"} position={"fixed"} top={0} bgcolor={"#fff"}>
      <h1 className="text-gray-600 text-xl my-0">Produtos</h1>
      <p className="text-[12px] text-gray-500 mb-2">
        Home {">"} {formattedPathname}
      </p>
      <Divider />
    </Box>
  );
};

export default NavBar;
