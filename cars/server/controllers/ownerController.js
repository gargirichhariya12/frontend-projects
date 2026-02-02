import imageKit from "../configs/imagekit.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";

export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });

    res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to add car
export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;

    //  Validate image
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    //  Parse carData safely
    if (!req.body.carData) {
      return res.status(400).json({
        success: false,
        message: "Car data is required",
      });
    }

    let carData;
    try {
      carData = JSON.parse(req.body.carData);
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid carData JSON format",
      });
    }

    // Upload image to ImageKit
    const fileBuffer = fs.readFileSync(req.file.path);

    const uploadResponse = await imageKit.upload({
      file: fileBuffer,
      fileName: req.file.originalname,
      folder: "/cars",
    });

    fs.unlinkSync(req.file.path);

    const imageUrl = imageKit.url({
      path: uploadResponse.filePath,
      transformation: [{ width: 400, quality: "auto", format: "webp" }],
    });

    //  Save car to DB
    await Car.create({
      ...carData,
      owner: _id,
      image: imageUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Car added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
