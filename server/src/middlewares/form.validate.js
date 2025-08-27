import joi from 'joi';
import {branchArray,contestArray} from '../constants/index.js';
// Define the schema for the incoming request body
// if event poster,paper,coding participant value should 0 or 1
// if event circuitrix max participant value should be 0
// if technical quiz max participant value should be 0,1,2
// if project participant value should be 0,1,2,3
// all event names are presnt in contest array
const formSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().pattern(/^[0-9]{10}$/).required(),
  email: joi.string().email().required(),
  event:joi.string().valid(...contestArray).required(),
  branch: joi.string().valid(...branchArray).required(),
  duNumber: joi.string().pattern(/^DU[A-Z][1-9][0-9]{6}$/).required(),
  participants: joi.number().integer().required().when('event', {
    is: joi.valid('Paper Presentation', 'Poster Presentation', 'Coding Contest','Web Designing'),
    then: joi.number().integer().min(0).max(1),
    otherwise: joi.when('event', {
      is: 'Circuitrix',
      then: joi.number().integer().valid(0),
      otherwise: joi.when('event', {
        is: 'Technical Quiz',
        then: joi.number().integer().min(0).max(2),
        otherwise: joi.when('event', {
          is: 'Project Expo',
          then: joi.number().integer().min(0).max(3),
          otherwise: joi.number().integer().min(0).max(3)
        })
      })
    })
  }),
  participantsDetails: joi.array().items(
    joi.object({
      name: joi.string().min(2).required()
    })
  ).length(joi.ref('participants')).required()
});

// Middleware function to validate the incoming request body
export const validateForm = (req, res, next) => {
  const { error } = formSchema.validate(req.body);
  if (error) {
    console.log(error.message);
    res.status(400).json({ error: error.details.map((err) => err.message).join(',') });
  }
  else{
    req.validatedData = req.body;
    next();
  }

}
