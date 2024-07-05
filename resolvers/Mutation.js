const { v4: uuid } = require("uuid");
exports.Mutation = {
  addCategory: function (parent, { input }, { categories }) {
    const newCategory = {
      id: uuid(),
      name: input.name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: function (parent, { input }, { products }) {
    const { name, description, quantity, price, image, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      image: image,
      onSale: onSale,
      categoryId: categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },
  addReview: function (parent, { input }, { reviews }) {
    const { date, title, comment, rating, productId } = input;
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };
    reviews.push(newReview);
    return newReview;
  },
  deleteCategory: function (parent, { categoryId }, { categories, products }) {
    const oldLen = categories.length;
    const newCategories = categories.filter(
      (category) => category.id != categoryId
    );
    const newLen = newCategories.length;
    if (oldLen == newLen) return false;
    products.forEach((product) => {
      if (product.categoryId == categoryId) product.categoryId = null;
    });
    categories = newCategories;
    return true;
  },
  deleteProduct: function (parent, { productId }, { products, reviews }) {
    const oldLen = products.length;
    const newProducts = products.filter((product) => product.id != productId);
    const newLen = newProducts.length;
    if (oldLen == newLen) return false;
    products = newProducts;
    reviews = reviews.filter((review) => review.productId != productId);
    return true;
  },
  deleteReview: function (parent, { reviewId }, { reviews }) {
    const newReview = reviews.filter((review) => review.id != reviewId);
    reviews = newReview;
    return true;
  },
  updateProduct: function (parent, { productId, input }, { products }) {
    products.forEach((product) => {
      if (product.id == productId) {
        product = { ...product, ...input };
      }
    });
    return true;
  },
};
