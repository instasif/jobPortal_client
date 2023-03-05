import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const {errMsg, setErrMsg} = useState('');
  const handleLogin = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const user = result;
      console.log(user);
      toast.success('Successfully Sign up!!')
      const userInfo = {
        displayName: data.name
      };
      updateUser(userInfo)
      .then((res) =>console.log(res))
      .catch(err => {
        console.error(err);
        });
    })
    .catch(err => {
      console.error(err);
      setErrMsg(err.message);
    });
  };
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 mx-auto">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action=""
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div>
            <label for="name" className="sr-only">
              Full Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                {...register("name", {
                  required: "Full name is required",
                })}
                placeholder="First name"
              />
              {errors?.name && (
                <p className="text-sm text-red-600" role="alert">
                  {errors?.name?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors?.email && (
                <p className="text-sm text-red-600" role="alert">
                  {errors?.email?.message}
                </p>
              )}

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters or longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must be have a uppercase, number and a special character",
                  },
                })}
              />
              {errors?.password && (
                <p className="text-sm text-red-600" role="alert">
                  {errors?.password?.message}
                </p>
              )}
            </div>
          </div>
          <div>
            {errMsg && <p className="text-sm text-red-600">{errMsg}</p>}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Already have an account?
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </p>

            <input
              type="submit"
              value="Register"
              className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            />
          </div>

          <div className="divider divide-neutral-900 text-xl text-center">
            OR
          </div>
          <div className="flex justify-center gap-3">
            <Link
              className="inline-flex items-center rounded border-2 border-[#DB4437] bg-[#DB4437] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#DB4437] focus:outline-none focus:ring active:opacity-75 gap-3"
              target="_blank"
              rel="noreferrer"
            >
              Google
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-google"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
              </svg>
            </Link>

            <Link
              className="inline-flex items-center rounded border-2 border-[#3b5998] bg-[#3b5998] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
              <svg
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </Link>
          </div>
        </form>
      </div>

      {/* <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div> */}
    </section>
  );
};

export default Signup;
