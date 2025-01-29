"use client";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return <SignUp redirectUrl="/setup-org" />;
};

export default Signup;
