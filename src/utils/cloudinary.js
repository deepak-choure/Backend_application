import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
//configure our app to work with cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//take the file path and upload it to cloudinary
//currently file is in server
const uploadOnCloudinary = async (localfilePath) => {
  try {
    if (!localfilePath) return null;
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded on cloudinary, File url: ", response.url);

    //remove from server as file get upload
    fs.unlink(localfilePath, (err) => {
      if (err) throw err;
      console.log("file removed from server");
    });
    return response;
  } catch (error) {
    console.error(
      "Error while uploading to cloudinary or removing from server",
      error
    );
    //remove from server even file upload is failed
    //file upload will restart from client side
    //which accumulate multiple files in server
    fs.unlink(localfilePath, (err) => {
      if (err) {
        console.error("Error deleting file from server");
        return;
      }
    });
  }
};

export { uploadOnCloudinary };
