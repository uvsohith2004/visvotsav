import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useQuerySubmit } from "@/hooks/submit"
import { toast } from "./ui/use-toast"
 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})
 
function ContactFrom() {
  const mutation=useQuerySubmit();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
 

  function onSubmit(values) {
    console.log(values)
    // Send the form data to the server
    mutation.mutate(values);
    form.reset()
  }
  return (
    <Card className='px-6 mt-5 py-4 shadow-md'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className='relative'>
              <FormControl  >
                <Input placeholder="" {...field} className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-[0.1rem] border-gray-300 appearance-none    focus:outline-none focus-visible:ring-0 focus:border-primary peer ' />
              </FormControl>
              <FormLabel className='absolute text-sm text-gray-500  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[18px] peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[28px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'>Name</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='relative'>
            <FormControl  >
              <Input placeholder="" {...field} className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-[0.1rem] border-gray-300 appearance-none    focus:outline-none focus-visible:ring-0 focus:border-primary peer ' />
            </FormControl>
            <FormLabel className='absolute text-sm text-gray-500  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[18px] peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[28px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'>Email</FormLabel>
            <FormMessage />
          </FormItem>
          )}
        />
             <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className='relative'>
              <FormControl>
              <Textarea placeholder="" {...field} className='resize-none block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-[0.1rem] border-gray-300 appearance-none  focus:outline-none focus-visible:ring-0 focus:border-primary peer ' ></Textarea>
              </FormControl>
              <FormLabel className='absolute text-sm text-gray-500  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[42px] peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[28px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'>Message</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full '>Submit</Button>
      </form>
    </Form>
    </Card>
  )
}
export default ContactFrom
