export type Product = {
  id: string;
  image: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: string[];
};
