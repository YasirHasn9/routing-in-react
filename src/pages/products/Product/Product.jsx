import { useLocation, withRouter } from "react-router-dom";
import { Wrapper } from "./style";
export const Product = (props) => {
  console.log(props);
  const location = useLocation();
  return <Wrapper>{props.item.title}</Wrapper>;
};
