import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-bl from-teal-600 to-blue-700">
      {children}
    </div>
  );
};

export default AuthLayout;
