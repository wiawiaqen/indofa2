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

    let selectFields = fields ? fields.split(",").join(" ") : "";

    let queryFilter = {};
    for (const [key, value] of Object.entries(restOfQuery)) {
      if (value.includes(",")) {
        queryFilter[key] = { $in: value.split(",") };
      } else {
        queryFilter[key] = value;
      }
    }

    try {
      const documents = await Model.find(queryFilter).select(selectFields);

      if (!documents || documents.length === 0) {
        return next(
          new apiError(`No ${name} found with the provided criteria.`, 404)
        );
      }

      res.status(200).json({ data: documents });
    } catch (error) {
      return next(error);
    }
  });

exports.pagination = (Model, name = "document") =>
  asyncHandler(async (req, res, next) => {
    const limit = 12;
    let page = req.params.page;
    let { fields, asort,...restOfQuery } = req.query;
    let query = restOfQuery;
    if (!fields) {
      fields = "name price imgbase64_reduce";
    }
    let selectFields = fields ? fields.split(",").join(" ") : "";
    if (asort === "null") {
      asort = null;
    }
    asort = asort === "true" ? 1 : -1;
    const document = await Model.find(query)
      .select(selectFields)
      .sort({ price: asort })
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
    const count = await Model.countDocuments(query);
    const maxPage = Math.ceil(count / limit);
    res.status(200).json({ data: maxPage });
  });