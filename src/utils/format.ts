export const formatPathname = (pathname: string) => {
  const cleanedPathname = pathname.replace(/[\/-]/g, " ");

  const capitalizedPathname = cleanedPathname
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizedPathname;
};
