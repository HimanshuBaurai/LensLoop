//inside this authLayout we will have a route that will render the signinForm and signupForm components
//this will include a page having a logo and side stylish image
//ag sign in and signup form will change inside it depending on the route

import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false;//this will be changed to true when the user is logged in

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  )
}

export default AuthLayout


// what and how outlet works?

// GitHub Copilot: In React Router v6, `Outlet` is a component that renders the matching child route. It acts as a placeholder for nested routes.

// In the provided code, `<Outlet />` is used inside the `AuthLayout` component. This means that any child routes defined under the route where `AuthLayout` is used will be rendered at the place of `<Outlet />`.

// For example, if you have routes defined like this:

// ```jsx
// <Route path="/auth" element={<AuthLayout />}>
//   <Route path="login" element={<LoginForm />} />
//   <Route path="register" element={<RegisterForm />} />
// </Route>
// ```

// When you navigate to `/auth/login`, the `AuthLayout` component will be rendered, and inside it, where the `<Outlet />` is placed, the `LoginForm` will be rendered. Similarly, for `/auth/register`, the `RegisterForm` will be rendered at the place of `<Outlet />`.