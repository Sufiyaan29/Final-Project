const asyncHandler = (fn) =>async (req,res,next) =>{
try{

}
catch(error){
    res.status(error.code || 500).json({
        success:false,
        message:e.message
    })
}
}
export{asyncHandler}