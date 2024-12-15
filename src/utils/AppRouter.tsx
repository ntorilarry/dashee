import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../shared/MainLayout";
import Dashboard from "../pages/main/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route index element={<Navigate replace to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
