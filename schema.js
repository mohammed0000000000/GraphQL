const { gql } = require("apollo-server");
// console.log(products);
exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
    deleteCategory(categoryId: ID!): Boolean!
    deleteProduct(productId: ID!): Boolean!
    deleteReview(reviewId: ID!): Boolean!
    updateProduct(productId: ID, input: UpdateProductInput): Product!
  }
  type Product {
    id: ID!
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    category: Category
    reviews: [Review!]!
    averageRating: Int
  }
  type Category {
    id: ID!
    name: String!
    products(filter: ProductFilterInput): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    # product: Product!
  }
  input ProductFilterInput {
    price: Float
    category: String
    avgRating: Int
    onSale: Boolean
  }
  input AddCategoryInput {
    name: String
  }
  input AddProductInput {
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    categoryId: String
  }
  input AddReviewInput {
    date: String
    title: String
    comment: String
    rating: Int
    productId: String
  }
  input UpdateProductInput {
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    categoryId: String
  }
`;
