import express, { Request, Response } from "express";
import { ProductService } from "../../../services";
import { success, error, verifyAuthorization } from "../utils";

const router = express.Router();

const getProducts = async (request: Request, response: Response) => {
  // @ts-ignore
  var limit = parseInt(request.query.limit);
  // @ts-ignore
  var start = parseInt(request.query.start);

  console.log(start, limit)

  var products = await ProductService.all();

  if (limit || start) {
    products = await ProductService.pagination(start, limit);
  }

  return success(response, {
    data: {
      products: products,
    },
    statusCode: 200,
  });
};

const getProduct = async (request: Request, response: Response) => {
  const id = request.params.id;
  const product = await ProductService.find(id);

  if (product === null) {
    return error(response, {
      error: "Product not found.",
      statusCode: 404,
    });
  }

  return success(response, {
    data: {
      product: product,
    },
    statusCode: 200,
  });
};

const createProduct = async (request: Request, response: Response) => {
  const authorization = await verifyAuthorization(
    request.headers.authorization,
  );

  if (authorization.err) {
    return error(response, {
      error: authorization.val.message,
      statusCode: 401,
    });
  }

  const product = await ProductService.create(
    request.body.title,
    request.body.description,
    request.body.price,
  );

  return success(response, {
    data: {
      product: product,
    },
    statusCode: 201,
  });
};

const updateProduct = async (request: Request, response: Response) => {
  const id = request.params.id;
  
  const authorization = await verifyAuthorization(
    request.headers.authorization,
  );

  if (authorization.err) {
    return error(response, {
      error: authorization.val.message,
      statusCode: 401,
    });
  }

  const product = await ProductService.update(id, request.body);

  return success(response, {
    data: {
      product: product,
    },
    statusCode: 201,
  });
};

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);

export default router;
