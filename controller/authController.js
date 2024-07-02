import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      address,
      answer,
      gender,
      pincode,
      state,
      city,
    } = req.body;

    // Validation
    if (!name) return res.send({ message: "Name is required" });
    if (!email) return res.send({ message: "Email is required" });
    if (!password) return res.send({ message: "Password is required" });
    if (!phone) return res.send({ message: "Phone number is required" });
    if (!address) return res.send({ message: "Address is required" });
    if (!answer) return res.send({ message: "Answer is required" });
    if (!gender) return res.send({ message: "Gender is required" });
    if (!pincode) return res.send({ message: "Pincode is required" });
    if (!state) return res.send({ message: "State is required" });
    if (!city) return res.send({ message: "City is required" });

    // Check if user exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists, please log in",
      });
    }

    // Register user
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
      gender,
      pincode,
      state,
      city,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registration Successful",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

//post login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email-id is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//forgotPasswordController

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    if (!email || !answer || !newPassword) {
      return res
        .status(400)
        .send({ message: "Email, answer, and newPassword are required" });
    }

    const user = await userModel.findOne({ email });

    if (!user || user.answer !== answer) {
      return res.status(404).send({
        success: false,
        message: "User not found or wrong answer provided",
      });
    }

    const hashedPassword = await hashPassword(newPassword);

    await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//test controller

export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//profile update controller

export const updatedProfileController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      address,
      phone,
      gender,
      pincode,
      state,
      city,
      answer,
    } = req.body;
    const user = await userModel.findById(req.user._id);

    // Password validation
    if (password && password.length < 6) {
      return res.status(400).json({
        error: "Password is required & must be 6 characters long",
      });
    }
    // Check if the answer matches
    if (user.answer !== answer) {
      return res
        .status(400)
        .json({ error: "Answer does not match. Profile update failed." });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updateUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
        gender: gender || user.gender,
        pincode: pincode || user.pincode,
        state: state || user.state,
        city: city || user.city,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Profile Updated",
      updateUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while updating profile",
      error,
    });
  }
};

//get order controller

export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Orders",
      error,
    });
  }
};

//ALL ORDERS

export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Orders",
      error,
    });
  }
};

//order status

export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updating the Order",
      error,
    });
  }
};
