"use client";

import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import Uploadimage from "./UploadImage";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  bio: z.string().min(2, "Bio must be at least 2 characters").max(120),
  hospital: z.string().min(2, "Hospital must be at least 2 characters").max(50),
  days: z.array(z.string(), "Days are required"),
  fees: z.string().min(1, "Fees are required"),
  gender: z.string(),
  appointmentTime: z.string(),
  degree: z.string(),
  specialization: z.string(),
  number: z.string().min(1, "Phone number is required"),
  experience: z.string().email("Invalid email format"),
  address: z.string().min(1, "Address is required"),
});

const daysOptions = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];
const DoctorForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      days: [],
      fees: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      number: "",
      experience: "",
      address: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 m-2 lg:grid-cols-2 gap-5 p-4">

        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="degree"
          render={({ field }) => (
              <FormItem>
              <FormLabel>degree</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Degree" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="hospital"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Hospital</FormLabel>
              <FormControl>
                <Input placeholder="Enter hospital name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="fees"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Fees</FormLabel>
              <FormControl>
                <Input placeholder="Enter Fees" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

<FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />


<FormField
          control={form.control}
          name="Days"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Available Days</FormLabel>
              <FormControl>
              <Select  options={daysOptions}
                   >
                    <SelectTrigger>
                      <SelectValue placeholder="Available Days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mon">Mon</SelectItem>
                      <SelectItem value="tues">Tues</SelectItem>
                      <SelectItem value="wed">Wed</SelectItem>
                      <SelectItem value="thurs">Thurs</SelectItem>
                      <SelectItem value="fri">Fri</SelectItem>
                      <SelectItem value="sat">Sat</SelectItem>
                      <SelectItem value="sun">Sun</SelectItem>

                    </SelectContent>
                  </Select>
              
              </FormControl>
            </FormItem>
          )}
          />
        
        <FormField
          control={form.control}
          name="appointmentTime"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Appointment Time</FormLabel>
              <FormControl>
                <Input type="time" placeholder="Enter appointment time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="specialization"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Specialization</FormLabel>
              <FormControl>
                <Input placeholder="Enter specialization" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="number"
          type="number"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Input placeholder="Enter experience" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          </div>
          <div className="m-6">

        <FormField
          control={form.control}
          name="Bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
              <Textarea placeholder="Type your message here." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
             <Uploadimage/>
           </div>
           <div className="p-5 w-1/6">
        <Button className=" container p-5 flex justify-center items-center " type="submit">
          {form.formState.isSubmitting ? "Loading" : "Submit"}
        </Button>
           </div>
      </form>
    </Form>
  );
};

export default DoctorForm;
