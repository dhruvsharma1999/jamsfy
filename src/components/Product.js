import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../redux/store";
import { addCart } from "../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import { getSingleProduct } from "../actions/products";
import { Ellipsis } from "react-spinners-css";
import { Rating } from "react-simple-star-rating";

const Product = () => {
  //extracting the dynamic ID
  const { Id } = useParams();
  const dispatch = useDispatch();

  //dispatch action to add product
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  //state
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  //effect Call
  useEffect(() => {
    getSingleProduct(Id).then(function(response) {
      let res = response.data;
      setProductData(res);
      setLoading(false);
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

  //show product
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img
            src={productData.image}
            alt={productData.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="text-uppercase text-black-50">
            {productData.category}
          </h4>
          <h1 className="display-5">{productData.title}</h1>
          <div>
            <p className="lead">
              <Rating initialValue={productData.rating.rate} />
            </p>
            <p>Rating: {productData.rating.rate}</p>
          </div>
          <h3 className="display-6 fw-bold my-4">${productData.price}</h3>
          <p className="lead">{productData.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(productData)}
          >
            Add to Cart
          </button>
        </div>
      </>
    );
  };

  //return
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
