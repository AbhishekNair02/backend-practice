require ('dotenv').config({path: './env'})

import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants";


connectDB();











// ;( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",() => {
//             console.log("ERRR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listenig on port ${process.env.PORT}`);
//         })



//     }catch(error){
//         console.error("ERROR",error);
//         throw err
//     }
// })()