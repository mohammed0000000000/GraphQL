exports.Category = {
  products: ({ id }, { filter }, { products }) => {
    if (filter) {
      const filterKeys = Object.keys(filter);
      return products.filter((product) => {
        return (
          product.categoryId == id &&
          filterKeys.every((key) => {
            if (key == "price") {
              return product[key] >= filter[key];
            } else if (key == "avgRating") {
              productRating = reviews
                .filter((review) => review.productId == product.id)
                .map((review) => review.rating);
              const result = Math.round(
                productRating.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) / productRating.length
              );
              return result >= filter[key];
            } else return product[key] == filter[key];
          })
        );
      });
    } else return products.filter((product) => product.categoryId == id);
  },
};
