exports.Query = {
  products: (parent, { filter }, { products, reviews }) => {
    console.log(filter);
    // console.log(products);
    if (filter) {
      const filterObjectKeys = Object.keys(filter);
      return products.filter((product) => {
        return filterObjectKeys.every((key) => {
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
        });
      });
    } else {
      return products;
    }
  },
  product: (parent, args, context) => {
    const { id } = args;
    return context.products.find((product) => product.id == id);
  },
  categories: (parent, args, context) => {
    return context.categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    return context.categories.find((category) => category.id == id);
  },
};
