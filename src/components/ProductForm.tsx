import React from "react";
import { useFormContainer } from "@/hooks/useFormContainer";
import { productSchema } from "@/schemas/productSchema";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FormInput from "./UI/FormInput";
import { Controller } from "react-hook-form";
import { Product } from "@/interfaces/product";
import { useCategories } from "@/hooks/useCategories";

interface ProductFormProps {
  defaultValues?: Product;
  onSubmit: (data: Product) => void;
  onCancel?: () => void;
}

const ProductForm = ({
  defaultValues,
  onSubmit,
  onCancel,
}: ProductFormProps) => {
  const { categories } = useCategories();
  const { control, errors, handleSubmit } = useFormContainer(
    productSchema,
    defaultValues
  );

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-3 gap-4">
        <FormInput
          control={control}
          className="col-start-1"
          label="Título"
          name="title"
          errors={errors}
        />
        <FormInput
          control={control}
          className="col-start-2"
          label="Preço"
          name="price"
          errors={errors}
        />
        <FormInput
          control={control}
          className="col-start-3"
          label="Imagem"
          name="image"
          errors={errors}
        />
        <FormInput
          control={control}
          className="col-start-1"
          label="Descrição"
          name="description"
          errors={errors}
        />
        <Controller
          control={control}
          name="category"
          render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth error={!!error}>
              <InputLabel>Categoria</InputLabel>
              <Select {...field} label="Categoria" value={field.value || ""}>
                {categories?.map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
              {error && <FormHelperText error>{error?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button
          className=" text-gray-600 bg-slate-200 w-44 mt-8"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </Button>
        <Button
          className=" bg-green-600 text-white w-44 mt-8"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};
export default ProductForm;
