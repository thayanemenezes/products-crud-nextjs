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
import FormInput from "./FormInput";
import { Controller } from "react-hook-form";

export const ProductForm = () => {
  const {
    control,
    handleSubmit,
    handleCreateProduct,
    handleCancel,
    errors,
    categories,
  } = useFormContainer(productSchema);

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(handleCreateProduct)}
    >
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
              <Select {...field} label="Categoria">
                {categories?.map((value: string) => (
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
          onClick={handleCancel}
        >
          Cancelar
        </Button>
        <Button
          className=" bg-green-600 text-white w-44 mt-8"
          type="submit"
          onClick={handleSubmit(handleCreateProduct)}
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};
