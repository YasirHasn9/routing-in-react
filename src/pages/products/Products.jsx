import { Link, Route, useLocation } from "react-router-dom";
import { Wrapper } from "./style";

import { Product } from "./Product/Product";
export const Products = (props) => {
  console.log(props.products);
  const location = useLocation();
  let filterCategories = {};
  props.products.forEach((product) => {
    if (filterCategories[product.category]) {
      filterCategories[product.category] += 1;
    }
    filterCategories[product.category] = 1;
  });

  // let menClothing = props.products.filter()
  // menClothing.map((item) => (
  //   <Product item={item} />
  // ))}

  return (
    <Wrapper>
      <ul>
        {Object.keys(filterCategories).map((category) => (
          <li>
            <Link to={`${location.pathname}/${category.split(" ").join("")}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
