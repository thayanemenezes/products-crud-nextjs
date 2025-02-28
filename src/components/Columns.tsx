import { GridColDef } from "@mui/x-data-grid";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Product } from "@/interfaces/product";
import DeleteButton from "./UI/DeleteButton";
import EditButton from "./UI/EditButton";
import VisualizeButton from "./UI/VisualizeButton";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 60,
    filterable: false,
    sortable: false,
  },
  {
    field: "title",
    headerName: "Title",
    width: 130,
    flex: 1,
    filterable: false,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    type: "number",
    flex: 0.5,
  },
  { field: "category", headerName: "Category", width: 130, flex: 0.5 },
  {
    field: "description",
    headerName: "Description",
    width: 200,
    sortable: false,
    flex: 1.5,
  },
  {
    field: "image",
    headerName: "Image",
    width: 130,
    sortable: false,
    renderCell: (params) => (
      <img
        src={params.value}
        alt={params.row.title}
        style={{ width: 50, height: 50 }}
      />
    ),
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 100,
    flex: 0.5,
    filterable: false,
    valueGetter: (value, row) => {
      if (!value) return value;
      return row.rating.rate;
    },
    renderCell: (params) => {
      const rating = params.value as number;
      const color = rating > 4 ? "green" : "red";
      return (
        <span style={{ color }} className="flex items-center">
          {rating}
          {rating > 4 ? (
            <ArrowUpward style={{ fontSize: "15px" }} />
          ) : (
            <ArrowDownward style={{ fontSize: "15px" }} />
          )}
        </span>
      );
    },
  },
  {
    field: "visualize",
    headerName: "Visualizar",
    width: 80,
    filterable: false,
    sortable: false,
    renderCell: (params) => {
      const product = params.row as Product;
      if (product.id === undefined) {
        return null;
      }
      return <VisualizeButton id={product.id} />;
    },
  },
  {
    field: "edit",
    headerName: "Editar",
    width: 60,
    filterable: false,
    sortable: false,
    renderCell: (params) => {
      const product = params.row as Product;
      if (product.id === undefined) {
        return null;
      }
      return <EditButton id={product.id} />;
    },
  },
  {
    field: "delete",
    headerName: "Deletar",
    width: 70,
    filterable: false,
    sortable: false,
    renderCell: (params) => {
      const product = params.row as Product;
      return <DeleteButton product={product} />;
    },
  },
];
