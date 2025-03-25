import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:"../env"
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Error",error)
    })

    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`)
    }) 
})
.catch((error)=>{
    console.log("MongoDB db connection failed!!!",error)
})













// import express from "express"

// const app=express()

// (
//     async()=>{
//         try {
//            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//            app.on("error",(error)=>{
//             console.log("ERROR")
//             throw error
//         })

//         } catch (error) {
//             console.error("ERROR:",error)
//             throw error
//         }
//     }
// )()