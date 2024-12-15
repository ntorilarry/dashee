import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div>
      <div className="bg-white p-2 dark:bg-neutral-800">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover rounded-2xl lg:block lg:w-[65%]"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          ></div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                  Reset password
                </h2>

                <p className="mt-3 text-sm text-gray-500 dark:text-white">
                  Please enter your password and confirm password to reset your
                  password
                </p>
              </div>

              <div className="mt-8 font-medium">
                <form>
                  <div className="relative">
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
                      placeholder="Password"
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
                  <div className="mt-3 relative">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-white"
                      >
                        Confirm Password
                      </label>
                    </div>

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="password"
                      placeholder="Confirm Password"
                      className="block w-full px-4 py-3 mt-2 text-gray-700  border-2 dark:border-none dark:text-white dark:bg-neutral-700 placeholder-gray-400 bg-white rounded-xl  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {showConfirmPassword ? (
                      <FiEye
                        className="absolute end-2.5 bottom-[0.95rem] text-lg dark:text-white cursor-pointer"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    ) : (
                      <FiEyeOff
                        className="absolute end-2.5 bottom-[0.95rem] text-lg dark:text-white cursor-pointer"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    )}
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-3 text-sm tracking-wide rounded-xl border dark:border-white text-white transition-colors duration-200 transform bg-[#0346FC] hover:bg-[#0345fcb8] focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;