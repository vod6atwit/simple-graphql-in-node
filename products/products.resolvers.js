const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: async () => {
      const product = await Promise.resolve(productsModel.getAllProducts());
      return product;
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productsById: (_, args) => {
      return productsModel.getProductsById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
