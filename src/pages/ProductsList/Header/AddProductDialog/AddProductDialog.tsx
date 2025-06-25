import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { StyledCreateLessonDialog, StyledForm } from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";
import TextFieldController from "../../../../components/TextFieldController";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./formValidation";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { createProduct } from "../../../../store/products/productsThunks";

type Props = {
  isDialogOpen: boolean;
  handleClose: () => void;
};

type IFormFields = {
  productName: string;
  imageUrl: string;
  weight: number;
  sizeWidth: number;
  sizeHeight: number;
  count: number;
};

const AddProductDialog = ({ isDialogOpen, handleClose }: Props) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.products);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormFields>({ resolver: yupResolver(schema) });

  const handleCloseWithReset = () => {
    reset();
    handleClose();
  };

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    const newProduct = {
      id: uuidv4(),
      name: data.productName,
      count: data.count,
      imageUrl: data.imageUrl,
      weight: `${data.weight}g`,
      size: {
        width: data.sizeWidth,
        height: data.sizeHeight,
      },
      comments: [],
    };
    dispatch(createProduct(newProduct));
  };

  return (
    <StyledCreateLessonDialog open={isDialogOpen}>
      <DialogTitle sx={{ fontWeight: 700 }}>Add New Product</DialogTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextFieldController
            name="productName"
            control={control}
            label="Product Name"
            errors={errors}
          />

          <TextFieldController
            name="imageUrl"
            control={control}
            label="Image URL"
            errors={errors}
          />

          <TextFieldController
            name="weight"
            control={control}
            label="Weight"
            errors={errors}
            type="number"
          />

          <TextFieldController
            name="count"
            control={control}
            label="Count"
            errors={errors}
            type="number"
          />

          <TextFieldController
            type="number"
            name="sizeWidth"
            control={control}
            label="Width"
            errors={errors}
          />

          <TextFieldController
            type="number"
            name="sizeHeight"
            control={control}
            label="Height"
            errors={errors}
          />
        </DialogContent>

        <DialogActions sx={{ mt: 2 }}>
          <Button
            onClick={handleCloseWithReset}
            size="small"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            size="small"
          >
            Create
          </Button>
        </DialogActions>
      </StyledForm>
    </StyledCreateLessonDialog>
  );
};

export default AddProductDialog;
