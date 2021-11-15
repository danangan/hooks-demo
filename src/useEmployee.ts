import { useState, useEffect } from "react";
import { fetchEmployee } from "./api";

export const useEmployee = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [employee, setEmployee] = useState<Employee | undefined>(undefined);

  useEffect(() => {
    fetchEmployee().then((employee) => {
      setIsLoading(false);
      setEmployee(employee);
    });
  }, []);

  return {
    employee,
    isLoading,
  };
};
