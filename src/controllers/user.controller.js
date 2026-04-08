import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler(async(requestAnimationFrame,res)=>{
    return res.status(200).json({
        message:"OK"
    })
})

export{registerUser}