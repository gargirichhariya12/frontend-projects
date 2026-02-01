import { URLEndpoints } from "@imagekit/nodejs/resources/accounts/url-endpoints.js";
import imagekit from "../configs/imagekit.js";
import User from "../models/User.js";
import fs from "fs";

export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
//Api to List Car

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body);
    const imageFile = req.file;

    //upload image to imagekit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

  

    // Basic URL without transformations
    var optimizedImageUrl = imagekit.url({
        path : '/',
        urlEndpoints:'https://ik.imagekit.io/your_imagekit_id/endpoint',
        transformation : [{
            "height": '300',
            "width" : '400'
        }]
    })

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
