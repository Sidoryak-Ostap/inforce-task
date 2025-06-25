import * as yup from "yup";

export const schema = yup.object({
  productName: yup.string().required("Product Name is required"),
  imageUrl: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
  weight: yup
    .number()
    .typeError("Width must be a number")
    .positive("Width must be positive")
    .required("Width is required"),
  count: yup
    .number()
    .typeError("Count must be a number")
    .positive("Count must be positive")
    .required("Count is required"),
  sizeWidth: yup
    .number()
    .typeError("Width must be a number")
    .positive("Width must be positive")
    .required("Width is required"),
  sizeHeight: yup
    .number()
    .typeError("Height must be a number")
    .positive("Height must be positive")
    .required("Height is required"),
});
