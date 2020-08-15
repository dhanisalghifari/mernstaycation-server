var express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { route } = require(".");

/* GET admin page. */
router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

/* Endpoint CRUD Category admin page. */
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

module.exports = router;