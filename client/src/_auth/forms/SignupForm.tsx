import { zodResolver } from "@hookform/resolvers/zod"//this is a library that helps us to validate our form, uses regex under the hood to validate the form data
import { useForm } from "react-hook-form"//this is a library that helps us to create forms in react

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { SignupValidation } from "@/lib/validation"//inorder to increase modularity we have created a validation.ts file inside lib folder, and we have defined our validation schema there
import { z } from "zod"//zod is a library that helps us to validate our form, uses regex under the hood to validate the form data
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"


const SignupForm = () => {
  const isLoading = false;//this will be changed to true when the form is being submitted

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    // const newUser = await careteUserAccount(values);
  }


  return (
    <Form {...form}>
      {/* upper portion having lensloop name and logo */}
      <div className="sm:420 flex-center flex-col">
        <img src="/assets/images/logo.svg" />

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use LensLoop, please enter you details
        </p>

        {/* lower portion having form */}
        <form onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : "Sign up"}
          </Button>
          <p className="text-small-regular text-light-2 text-center">
            Already have an account?{" "}
            <Link to='/sign-in'>
              <span className="text-primary-500 text-small-semibold ml-1">Log in</span>
            </Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupForm

//used shadCn form --> https://ui.shadcn.com/docs/components/form