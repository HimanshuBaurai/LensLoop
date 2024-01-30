import { Routes, Route } from 'react-router-dom'
//Routes and route helps us to define the routes of our application

import './globals.css'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from "@/components/ui/toaster"

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* //we will define 2 types of routes public and private, public one can be seen by anyone, and private can be seen by a signed in person */}


                {/* public route  */}
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route>



                {/* private route  */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    {/* index means that this is the default route, you can us path='/' that works the same */}
                </Route>


            </Routes>
            <Toaster />
        </main>
    )
}

export default App