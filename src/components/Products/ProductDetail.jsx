import React from "react";
import { useDispatch } from "react-redux";
import { fetchSingleProductData } from "../../redux/actions/actions";
import { fetchSingleProduct } from "../../redux/apis";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { useQuery } from "react-query";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(["detail", id], () =>
    fetchSingleProduct(id)
  );

  if (data) {
    dispatch(fetchSingleProductData(data));
  }

  const productDetail = useSelector((state) => state.productDetail);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    <p className="text-orange-700">Error while fetching data</p>;
  }

  const renderProduct = productDetail && (
    <>
      <div className="mb-4 relative basis-5/12">
        <img src={productDetail.image} />
        <p className="bg-[#de2176] w-10 p-1 flex items-center justify-center absolute top-0 right-0">
          {productDetail.rating.rate}
        </p>
      </div>
      <div className="basis-7/12">
        <p className="font-bold mb-2 md:text-lg md:mb-4">
          ${productDetail.price}
        </p>
        <h2 className="text-2xl mb-2 md:text-3xl font-bold md:mb-8">
          {productDetail.title}
        </h2>
        <p
          style={{ lineHeight: 1.7 }}
          className="text-base mb-5 md:text-xl md:mb-10"
        >
          {productDetail.description}
        </p>

        <p className="text-sm mb-1 md:text-base md:mb-2">
          <span className="font-bold">Category: </span>
          {productDetail.category}
        </p>
        <p className="text-sm md:text-base">
          <span className="font-bold">Rating Count: </span>
          {productDetail.rating.count}
        </p>
      </div>
    </>
  );

  return (
    <>
      <div className="p-4 mt-5 md:flex max-w-5xl mx-auto md:gap-14 md:mt-12">
        {renderProduct}
      </div>
    </>
  );
}
