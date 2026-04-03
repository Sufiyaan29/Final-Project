import connectDB from "./db/index.js";;
import dotenv from 'dotenv';

dotenv.config({
    path:'./env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`${process.env.port}`)
    })
}).catch((error)=>{
    console.log(error)
})