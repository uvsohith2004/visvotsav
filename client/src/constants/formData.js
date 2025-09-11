export const branches = [
  "CSE",
  "ECE",
  "MECH",
  "CIVIL",
  "CSE-IOT",
  "CSE-AIML",
  "MBA",
  "EEE",
  "CSE-AI",
  "Others"
];

export const TechnicalEvents = [
  "Paper Presentation",
  "Poster Presentation",
  "Circuitrix",
  "Coding Contest",
  "Web Designing",
  "Technical Quiz",
  "Project Expo",
];

export const culturalEvents = [
  "Elocution",
  "Picture Connect",
  "Singing",
  "Dancing",
  "Anthyakshari",
  "Dumb Charades",
  "General Quiz",
  "Fancy Dress",
  "Drawing",
];

export const projectTypeOptions = {
  "Project Expo": ["0", "1", "2", "3"],
  "Technical Quiz": ["0", "1", "2"],
  "Paper Presentation": ["0", "1"],
  "Poster Presentation": ["0", "1"],
  "Coding Contest": ["0", "1"],
  "Web Designing": ["0", "1"],
  Circuitrix: ["0"],
  Elocution: ["0"],
  "Picture Connect": ["0", "1", "2"],
  Singing: ["0"],
  Dancing: ["0", "1", "2", "3", "4"],
  Anthyakshari: ["0", "1", "2"],
  "Dumb Charades": ["0", "1", "2"],
  "General Quiz": ["0", "1", "2"],
  "Fancy Dress": ["0"],
  Drawing: ["0"],
};

export const events = {
  Technical: TechnicalEvents,
  Cultural: culturalEvents,
};

export const colleges = [
  "PBR VITS",
  "RSR Engineering College",
  "DBS College of Engineering",
  "QIS College of Engineering",
  "Other",
];

export const SHOW_EVENT_TYPE_SELECTION = Object.keys(events).length > 1;
export const DEFAULT_EVENT_TYPE = "Technical";
import * as z from "zod";
const allEvents = [...TechnicalEvents, ...culturalEvents];

export const formSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be 10 digits." })
      .max(10, { message: "Phone number must be 10 digits." })
      .regex(/^[0-9]{10}$/, { message: "Please enter valid number" }),
    email: z.string().email({ message: "Invalid email address." }),
    college: z.string().min(1, { message: "Please select a college." }),
    customCollege: z.string().optional(),
    eventType: z.enum(["Technical", "Cultural"], {
      errorMap: () => ({ message: "Please select an event type." }),
    }),

    event: z.enum(allEvents, {
      errorMap: () => ({ message: "Please select an event." }),
    }),
    branch: z.enum(branches, {
      errorMap: () => ({ message: "Please select a branch." }),
    }),
    duNumber: z.string().regex(/^DU[A-Z][0-9]{7}$/, {
      message:
        "DU number must be in the format DU(one letter)(7 digits from 0-9)",
    }),
    confirmDuNumber: z
      .string()
      .min(1, { message: "Please confirm your DU Number." }),
    participants: z.enum(["0", "1", "2", "3", "4"]),
    participantDetails: z
      .array(
        z.object({
          name: z
            .string()
            .min(2, {
              message: "Participant name must be at least 2 characters.",
            }),
        })
      )
      .optional(),
  })
  .refine((data) => data.duNumber === data.confirmDuNumber, {
    message: "DU Numbers do not match",
    path: ["confirmDuNumber"],
  })
  .refine(
    (data) => {
      if (data.college === "Other") {
        return data.customCollege && data.customCollege.length > 0;
      }
      return true;
    },
    {
      message: "Please enter your college name.",
      path: ["customCollege"],
    }
  );
