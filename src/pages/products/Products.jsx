import { Link, Route, useLocation } from "react-router-dom";
import { Wrapper } from "./style";

import { Product } from "./Product/Product";
import { useState } from "react";
export const Products = (props) => {
  const [modifiedProducts, setModifiedProducts] = useState([]);
  let filterCategories = {};
  props.products.forEach((product) => {
    if (filterCategories[product.category]) {
      filterCategories[product.category] += 1;
    }
    filterCategories[product.category] = 1;
  });

  const filterProducts = (products, key) => {
    let data = [...products].filter((product) => product.category === key);
    setModifiedProducts([...data]);
  };

  return (
    <Wrapper>
      <ul>
        {Object.keys(filterCategories).map((category) => (
          <li>
            <Link onClick={() => filterProducts(props.products, category)}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
      {modifiedProducts.map((product) => {
        return <Product product={product} />;
      })}
    </Wrapper>
  );
};

// i receive the data
// loop over them
// make a button for each category
// make a function that filter the data that belongs for the category
