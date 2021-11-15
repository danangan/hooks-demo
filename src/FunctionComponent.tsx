import { useState, useEffect } from "react";
import { useEmployee } from "./useEmployee";

export const FunctionComponent: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const { employee, isLoading } = useEmployee();

  useEffect(() => {
    if (employee) {
      setFirstName((employee as any).firstName);
    }
  }, [employee]);

  return (
    <div>
      <h2>Functional Component</h2>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <label htmlFor="first_name">First name </label>
          <input
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button onClick={() => alert("Submit!")}>Submit!</button>
        </>
      )}
    </div>
  );
};
