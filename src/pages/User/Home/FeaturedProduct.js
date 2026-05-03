import React from "react";
import { ProductCardSkeleton } from "../../../components/ui/ProductCardSkeleton";
import { ContainerHeader } from "../../../components/user/ContainerHeader";
import { ProductCard } from "../../../components/user/ProductCard";
// ❌ removed API import
// import { useGetFeatureProductsQuery } from "../../../features/product/productApi";
import { products } from "../../../mock/data";

export const FeaturedProduct = () => {
  const data = products;

  // ✅ manually define these (since no API)
  const isLoading = false;
  const isError = false;
  const isSuccess = true;

  let content;

  if (isLoading)
    content = (
      <>
        <ProductCardSkeleton /> <ProductCardSkeleton /> <ProductCardSkeleton />
        <ProductCardSkeleton /> <ProductCardSkeleton />
      </>
    );

  if (!isLoading && isError)
    content = (
      <h3 className=" uppercase font-medium text-red-600">
        something went wrong!
      </h3>
    );

  if (!isError && !isLoading && isSuccess && data?.length === 0)
    content = (
      <p className="text-center uppercase font-medium">No Product found!</p>
    );

  if (!isError && !isLoading && data?.length > 0)
    content = data.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));

  return (
    <div className="container mx-auto ">
      <ContainerHeader title="featured product!" />
      <div className=" mb-7 grid grid-cols-1 justify-center xs:justify-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5">
        {content}
      </div>
    </div>
  );
};