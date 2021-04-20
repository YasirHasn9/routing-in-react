import { Wrapper } from "./style";
export const Product = ({ product }) => {
  console.log(product);
  return <Wrapper>{product.title}</Wrapper>;
};
