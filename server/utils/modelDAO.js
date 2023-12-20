const asyncHandler = require("express-async-handler");
const apiError = require("./apiError");
const jimp = require("jimp");
exports.createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({ data: newDoc });
  });

exports.createMany = (Model) =>
  asyncHandler(async (req, res) => {
    const newDocs = await Model.create(req.body);
    res.status(201).json({ data: newDocs });
  });

exports.updateOne = (Model, name = "document") =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndUpdate(id, req.body, { new: true });

    if (!document) {
      return next(new apiError(`No ${name} for this id ${id}`, 404));
    }

    document.save();
    res.status(200).json({ data: document });
  });

exports.deleteOne = (Model, name = "document") =>
  asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);

    if (!document) {
      return next(new apiError(`No ${name} for this id ${req.params.id}`, 404));
    }

    document.remove();
    res.status(204).send();
  });

exports.getOne = (Model, name = "document") =>
  asyncHandler(async (req, res, next) => {
    let fields = req.query.fields;
    const document = await Model.findById(req.params.id).select(fields);
    if (!document) {
      return next(new apiError(`No ${name} for this id ${req.params.id}`, 404));
    }
    res.status(200).json({ data: document });
  });

exports.getAll = (Model) =>
  asyncHandler(async (req, res, next) => {
    let fields = req.query.fields;
    const document = await Model.find().select(fields);
    res.status(200).json({ size: document.length, data: document });
  });

exports.filter = (Model, name = "document") =>
  asyncHandler(async (req, res, next) => {
    let { fields, ...restOfQuery } = req.query;
    let query = restOfQuery;
    
    const document = await Model.find(query).select(fields);
    if (!document) {
      return next(new apiError(`No ${name} for this id ${req.params.id}`, 404));
    }
    res.status(200).json({ data: document });
  });

async function resizeBase64Image(base64Str, width, height) {
  try {
    const image = await jimp.read(
      Buffer.from(base64Str.split(",")[1], "base64")
    );
    const resizedImage = await image
      .resize(width, height)
      .getBase64Async(jimp.MIME_JPEG);

    return resizedImage;
  } catch (error) {
    console.error("Error resizing image:", error);
    throw error;
  }
}
async function resizeImagesInProducts(products, width = 250, height = 250) {
  for (const product of products) {
    try {
      const resizedImage = await resizeBase64Image(
        product.imgbase64,
        width,
        height
      );
      product.imgbase64 = resizedImage;
      const resizedImage_full = await resizeBase64Image(
        product.f_imgbase64,
        width,
        height
      );
      product.f_imgbase64 = resizedImage_full;
    } catch (error) {
      // console.error(`Error resizinxg image for product ${product.id}:`, error);
    }
  }
  return products;
}


exports.pagination = (Model, name = "document") =>
  asyncHandler(async (req, res, next) => {
    const limit = 12;
    let page = req.params.page;
    let { fields, ...restOfQuery } = req.query;
    let query = restOfQuery;
    if (!fields) {
      fields = "name price imgbase64_reduce"; 
    }
    const document = await Model.find(query)
      .select(fields)
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();
    if (!document) {
      return next(
        new apiError(`No ${name} for this id ${req.params.page}`, 404)
      );
    }
    res.status(200).json({ size: document.length, data: document });
  });

exports.getMaxPage = (Model, name = "document") =>
  asyncHandler(async (req, res, next) => {
    const limit = 12;
    let { fields, ...restOfQuery } = req.query;
    let query = restOfQuery;
    const document = await Model.find(query).select(fields);
    if (!document) {
      return next(
        new apiError(`No ${name} for this id ${req.params.page}`, 404)
      );
    }
    const maxPage = Math.ceil(document.length / limit);
    res.status(200).json({ data: maxPage });
  });