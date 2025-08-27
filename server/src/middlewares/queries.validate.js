import joi from 'joi';
// Middleware to validate contact us form
const contactSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    message: joi.string().min(10).required()
});
export const validateMessage = (req,res,next)=>{
const {name,email,message} = req.body;
const {error} = contactSchema.validate({name,email,message});
if(error){
    return res.status(400).json({error: error.details.map((err) => err.message).join(',')});
}
else{
  // do some profanity check on message and name
  
  next();
}
}