import React from "react";
import home_one from "../assests/home_one.jpg";
import home_two from "../assests/home_two.jpg";
import home_three from "../assests/home_three.jpg";
import home_four from "../assests/home_four.jpg";
import home_five from "../assests/home_five.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="outer-grid">
        <div className="image_one">
          <div className="image-text-container">
            <div className="image-heading">Womens Fashion</div>
            <div className="image-sub-heading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              esse harum amet quos nobis!
            </div>
            <a href="">
              <div className="image-sub-shop-now">Shop Now</div>
            </a>
          </div>
        </div>
        <div className="inner-grid">
          <div className="image_two">
            <div className="image-two-text-container">
              <div className="image-two-heading">Men's Fasion</div>
              <div className="image-two-sub-heading">380 Items</div>
              <a href="">
                <div className="image-two-sub-shop-now">Shop Now</div>
              </a>
            </div>
          </div>
          <div className="image_three">
            <div className="image_two">
              <div className="image-two-text-container">
                <div className="image-two-heading">Summer Collection</div>
                <div className="image-two-sub-heading">300 Items</div>
                <a href="">
                  <div className="image-two-sub-shop-now">Shop Now</div>
                </a>
              </div>
            </div>
          </div>
          <div className="image_four">
            <div className="image_two">
              <div className="image-two-text-container">
                <div className="image-two-heading">Luxury wear</div>
                <div className="image-two-sub-heading">280 Items</div>
                <a href="">
                  <div className="image-two-sub-shop-now">Shop Now</div>
                </a>
              </div>
            </div>
          </div>
          <div className="image_five">
            <div className="image_two">
              <div className="image-two-text-container">
                <div className="image-two-heading">Foot wear</div>
                <div className="image-two-sub-heading">380 Items</div>
                <a href="">
                  <div className="image-two-sub-shop-now">Shop Now</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
