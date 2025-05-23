import multer from "multer";
import {  CloudinaryStorage } from 'multer-storage-cloudinary';
import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary:cloudinary
})

export const upload = multer({storage:storage,limits:{fileSize:100 * 1024 * 1024}});


export const deleteImageCloudinary = async(publicId:string)=>{
    try {
        const response = await cloudinary.uploader.destroy(publicId);
        console.log("cloudinary response",response);
    } catch (error) {
        console.log('unable to delete image',error);
        throw error
    }
};

export const deleteVideoCloudinary = async(publicId:string)=>{
    try {
        const response = await cloudinary.uploader.destroy(publicId,{resource_type:"video"});
        console.log("cloudinary response",response);
    } catch (error) {
        console.log('unable to delete video',error);
        throw error
    }
}