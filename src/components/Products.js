import React, { useEffect, useState } from "react";
import { getProducts } from "../actions/products";
import { Ellipsis } from "react-spinners-css";
import { Rating } from "react-simple-star-rating";
import { NavLink } from "react-router-dom";

const Products = () => {
  //states
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState(product);
  const [loading, setLoading] = useState(true);
  let componentMounted = true;

  console.log("filter", filter);
  //effect calls
  useEffect(() => {
    getProducts().then(function(response) {
      let res = response.data;
      if (componentMounted) {
        setProduct(res);
        setFilter(res);
        setLoading(false);
        console.log(filter);
      }

      //clean up
      return () => {
        componentMounted = false;
      };
    });
  }, []);

  //loading
  const Loading = () => {
    return (
      <>
        <div>
          <Ellipsis color="#ca1515" size={200} />
        </div>
      </>
    );
  };

  //show products
  const ShowProducts = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            {filter.map((item) => {
              return (
                <>
                  <div className="col-md-3 mb-5">
                    <div className="card h-80 text-center p-4" key={product.id}>
                      <img
                        src={item.image}
                        className="card-img-top card-title"
                        alt={item.title}
                        height="320px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">
                          {item.title.substring(0, 12)}
                        </h5>
                        <p className="card-text lead fw-bold"> ${item.price}</p>
                        <div>
                          <Rating
                            initialValue={
                              item.rating.rate
                            } /* Available Props */
                          />
                        </div>
                        <div>
                          <NavLink
                            to={`/products/${item.id}`}
                            className="card-link buy-now"
                          >
                            Buy Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  //filter product on the basis of category
  const filterProduct = (cat) => {
    const updatedList = product.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-4">
              <div className="new-products">New products</div>
              <div className="underline"></div>
            </div>
            <div className="col-8">
              <div className="d-flex flex-row justify-content-end bd-highlight">
                <div
                  className="p-2 bd-highlight product-categories"
                  onClick={() => setFilter(product)}
                >
                  All
                </div>
                <div
                  className="p-2 bd-highlight product-categories"
                  onClick={() => filterProduct("women's clothing")}
                >
                  Women's
                </div>
                <div
                  className="p-2 bd-highlight product-categories"
                  onClick={() => filterProduct("men's clothing")}
                >
                  Men's
                </div>
                <div
                  className="p-2 bd-highlight product-categories"
                  onClick={() => filterProduct("kid's clothing")}
                >
                  Kid's
                </div>
                <div
                  className="p-2 bd-highlight product-categories"
                  onClick={() => filterProduct("jewelery")}
                >
                  Accessories
                </div>
                <div
                  className="p-2 bd-highlight product-categories"
                  onClick={() => filterProduct("electronics")}
                >
                  Electronics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="container my-auto">
            <Loading />{" "}
          </div>
        ) : (
          <ShowProducts />
        )}
      </div>
    </>
  );
};

export default Products;
