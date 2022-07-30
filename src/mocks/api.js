import { createServer, Model } from "miragejs";

import { products } from "./api-data";

const createMockServer = () => {
  return createServer({
    models: {
      product: Model,
    },
    routes() {
      this.get("/products", (schema) => {
        return schema.all("product").models;
      });

      this.get("/products/:slug", (schema, request) => {
        const product = schema.findBy("product", {
          slug: request.params.slug,
        });

        return {
          id: product.id,
          name: product.name,
          slug: product.slug,
          image: product.image,
          alt: product.alt,
          description: product.description,
          price: product.price,
          is_available: product.is_available,
        };
      });

      this.post("/products", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id =
          new Date().getTime().toString() +
          ("0000" + Math.floor(Math.random() * 100)).slice(-4);

        return schema.create("product", attrs);
      });
    },
    seeds(server) {
      products.forEach((item) => {
        server.create("product", item);
      });
    },
  });
};

export { createMockServer };
