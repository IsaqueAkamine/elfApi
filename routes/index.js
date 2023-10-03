// routes/index.js
const express = require("express");

// const authRoutes = require("./auth");
const categoriesRoutes = require("./categories");
const commentsRoutes = require("./comments");
const customersRoutes = require("./customers");
const ordersRoutes = require("./orders");
const usersRoutes = require("./users");
const productsRoutes = require("./products");

const router = express.Router();

// router.use("/auth", authRoutes);
router.use("/categories", categoriesRoutes);
router.use("/comments", commentsRoutes);
router.use("/customers", customersRoutes);
router.use("/orders", ordersRoutes);
router.use("/products", productsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
