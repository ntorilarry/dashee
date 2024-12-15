import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="bg-white p-2 dark:bg-neutral-800">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover rounded-2xl lg:block lg:w-[68%]"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          ></div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                  Sign in
                </h2>

                <p className="mt-3 text-sm text-gray-500 dark:text-white">
                  Please enter your email and password
                </p>
              </div>

              <div className="mt-8 font-medium">
                <form>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-white"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 dark:border-none dark:text-white dark:bg-neutral-700 placeholder-gray-400 bg-white rounded-xl focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-3 relative">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-white"
                      >
                        Password
                      </label>
                    </div>

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-3 mt-2 text-gray-700  border-2 dark:border-none dark:text-white dark:bg-neutral-700 placeholder-gray-400 bg-white rounded-xl  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {showPassword ? (
                      <FiEye
                        className="absolute end-2.5 bottom-[0.95rem] text-lg dark:text-white cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FiEyeOff
                        className="absolute end-2.5 bottom-[0.95rem] text-lg dark:text-white cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                  <p className="text-right">
                    <Link
                      to={"/auth/forgot-password"}
                      className="text-sm text-gray-400 dark:text-white focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </p>
                  <div className="mt-6">
                    <button className="w-full px-4 py-3 text-sm tracking-wide rounded-xl border dark:border-white text-white transition-colors duration-200 transform bg-[#0346FC] hover:bg-[#0345fcb8] focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      LogIn
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400 dark:text-white">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    to={"/auth/sign-up"}
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
