import { Link, Route, useParams } from "react-router-dom";
import { Wrapper, Images } from "./style";

import { Product } from "./Product/Product";
import { useState } from "react";
export const Products = (props) => {
  console.log(props);
  const {
    match: { url },
  } = props;
  console.log(url);
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

      {modifiedProducts.length > 0 && (
        <Images>
          {modifiedProducts.map((product) => {
            return (
              <Link key={product.id} to={`${url}/${product.id}`}>
                <img src={product.image} alt={product.image} />
              </Link>
            );
          })}
        </Images>
      )}
      <Route
        exact
        path={`${url}/:id`}
        render={(renderProps) => (
          <Product {...renderProps} products={props.products} />
        )}
      />
    </Wrapper>
  );
};
