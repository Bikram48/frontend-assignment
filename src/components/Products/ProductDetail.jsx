import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSingleProductData } from "../../redux/actions/actions";
import { fetchSingleProduct } from "../../redux/apis";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetail = useSelector((state) => state.productDetail);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchSingleProductData(await fetchSingleProduct(id)));
    };

    fetchData();
  });

  const renderProduct = productDetail && (
    <>
      <div className="mb-4 relative">
        <img src={productDetail.image} />
        <p className="bg-[#de2176] w-10 p-1 flex items-center justify-center absolute top-0 right-0">
          {productDetail.rating.rate}
        </p>
      </div>
      <div>
        <p className="font-bold mb-2">${productDetail.price}</p>
        <h2 className="text-2xl mb-2">{productDetail.title}</h2>
        <p className="text-base mb-5">{productDetail.description}</p>

        <p className="text-sm mb-1x">
          <span className="font-bold">Category: </span>
          {productDetail.category}
        </p>
        <p className="text-sm">
          <span className="font-bold">Rating Count: </span>
          {productDetail.rating.count}
        </p>
      </div>
    </>
  );

  console.log(productDetail);
  return <div className="p-4 mt-5">{renderProduct}</div>;
}
