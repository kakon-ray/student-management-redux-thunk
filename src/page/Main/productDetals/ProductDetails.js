import React, {useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import getProductData from "../../../redux/thunk/action/getProductData";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {

  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData())
  }, [dispatch]);
  
    const allProduct = useSelector(
      (state) => state.product.product
    );


  const productDetailsitem = allProduct.filter((item) => item.id == id);


console.log(productDetailsitem)


  return (
    <>
      <div id="product-details" className="container">
        <div className="row">
        
          <div className="col-md-12">
            {productDetailsitem[0] && (
              <Card>
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={productDetailsitem[0].image}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="col-md-7 ">
                    <div className="mt-3 p-3">
                      <h2>{productDetailsitem[0].productName}</h2>
                      <div className="d-flex aligen-items-center">
                        <StarRatings
                          className="py-3 "
                          rating={2.5}
                          starDimension="20px"
                          starSpacing="15px"
                          starRatedColor="#f79837"
                        />
                        <span className="mt-1 ms-3">
                          (Total 20 Customar Review)
                        </span>
                      </div>
                      <div className="my-3">
                        <h2>
                          {productDetailsitem[0].price}{" "}$
                          <del style={{ color: "#f79837", marginLeft: "40px" }}>
                            $60.00
                          </del>
                        </h2>
                      </div>
                      <div>
                        <p className="text-secondary">
                          {productDetailsitem[0].productDetails}
                        </p>
                      </div>
                      <div>
                        <select
                          className="my-2"
                          name=""
                          id="dress-size"
                          style={{
                            width: "200px",
                            height: "40px",
                            border: "1px solid #f79837",
                          }}
                        >
                          <option value="mediam">Size</option>
                          <option value="xl">XL</option>
                          <option value="small">S</option>
                          <option value="large">L</option>
                        </select>
                      </div>
                    
                
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;