import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface CleanPathWrapperProps {
  children: ReactNode;
}

export const CleanPath = ({ children }: CleanPathWrapperProps) => {
  const location = useLocation();
  const cleanPath = location.pathname.replace(/\/+$/, '');
  
  if (location.pathname !== cleanPath) {
    return <Navigate to={cleanPath + location.search} replace />;
  }
  
  return children;
};