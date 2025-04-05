import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLODINARY_CLOUD_NAME , 
    api_key: process.env.CLODINARY_API_KEY ,
    api_secret: process.env.CLODINARY_API_SECRET
});

const uploadCloudinary =  async (localFilePath)=>{
    try {
        if(!localFilePath) return null
       const response = cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("File has uploaded successfully",response)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}