import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updatedProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object

const router = express.Router();

//routing

//register || method post
router.post("/register", registerController);

//login||post

router.post("/login", loginController);

//forgot password

router.post("/forgot-password", forgotPasswordController);

//test route

router.get("/test", requireSignIn, isAdmin, testController);

//auth user route

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//auth admin route

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile

router.put("/profile", requireSignIn, updatedProfileController);

//orders

router.get("/orders", requireSignIn, getOrdersController);

//all orders

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//order status

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
