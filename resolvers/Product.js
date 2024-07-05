exports.Product = {
  category({ categoryId }, args, { categories }) {
    return categories.find((category) => category.id == categoryId);
  },
  reviews({ id }, args, { reviews }) {
    return reviews.filter((review) => review.productId == id);
  },
  averageRating({ id }, args, { reviews }) {
    productRating = reviews
      .filter((review) => review.productId == id)
      .map((review) => review.rating);
    const result =
      productRating.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / productRating.length;
    // console.log(Math.round(result));
    return Math.round(result);
  },
};
