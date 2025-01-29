"use client";
import { SignIn } from "@clerk/clerk-react";

const RegisterForm = () => {
  return <SignIn redirectUrl="/setup-org" />;
};

export default RegisterForm;
