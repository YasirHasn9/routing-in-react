import { useParams } from "react-router-dom";
import { Wrapper } from "./style";
export const Product = (props) => {
  let itemId = useParams().id;
  console.log(itemId);
  let item = props.products.filter((item) => item.id == itemId)[0];
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </Wrapper>
  );
};
