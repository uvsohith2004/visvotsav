export const branches = [
  "CSE",
  "ECE",
  "MECH",
  "CIVIL",
  "CSE-IOT",
  "CSE-AIML",
  "MBA",
  "EEE",
];
export const events = [
  "Paper Presentation",
  "Poster Presentation",
  "Circuitrix",
  "Coding Contest",
  "Web Designing",
  "Technical Quiz",
  "Project Expo",
] ;
export const culturalEvents =[
  "Dancing",
  "Singing",
  "Drawing",
  "Antyakshari",
  "Dumb Charades",
  "Musical Instruments",
]
export const sportsEvents=[
  "Basket Ball",
  "Volley Ball",
  "Badminton",
  "Throw Ball",
  "Chess",
]
export const projectTypeOptions = {
  "Project Expo": ["0", "1", "2", "3"],
  "Technical Quiz": ["0", "1", "2"],
  "Paper Presentation": ["0", "1"],
  "Poster Presentation": ["0", "1"],
  "Coding Contest": ["0", "1"],
  "Web Designing": ["0" ,"1"],
  Circuitrix: ["0"],
};
import * as z from "zod";
export const formSchema = z
.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be 10 digits." })
    .max(10, { message: "Phone number must be 10 digits." })
    .regex(/^[0-9]{10}$/, {
      message: "please enter valid number",
    }),
  email: z.string().email({ message: "Invalid email address." }),
  event: z.enum(events, {
    errorMap: () => ({ message: "Please select an event." }),
  }),
  branch: z.enum(branches, {
    errorMap: () => ({ message: "Please select a branch." }),
  }),
  duNumber: z.string().regex(/^DU[A-Z][1-9][0-9]{6}$/, {
    message:
      "DU number must be in the format DU(one letter)(7 digits from 1-9)",
  }),
  confirmDuNumber: z
    .string()
    .min(1, { message: "Please confirm your DU Number." }),
  participants: z.enum(["0", "1", "2", "3"]),
  participantDetails: z
    .array(
      z.object({
        name: z.string().min(2, {
          message: "Participant name must be at least 2 characters.",
        }),
      })
    )
    .optional(),
})
.refine((data) => data.duNumber === data.confirmDuNumber, {
  message: "DU Numbers do not match",
  path: ["confirmDuNumber"],
});
