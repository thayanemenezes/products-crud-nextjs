import React, { useState } from "react";

export const useFilter = () => {
  const [sortOption, setSortOption] = useState<"priceAsc" | "priceDesc" | null>(
    null
  );

  const handleSortChange = (option: "priceAsc" | "priceDesc") => {
    setSortOption(option);
  };

  return { handleSortChange, sortOption };
};
