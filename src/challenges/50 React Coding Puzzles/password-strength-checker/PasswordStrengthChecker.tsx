import { ChangeEvent, useState } from "react";
import { PasswordReport, PasswordStrength } from "../types";
import Critarea from "./Critarea";
import PasswordInput from "./PasswordInput";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const progressWeight = {
  length: 40,
  uppercase: 20,
  numbers: 20,
  specialCharacters: 20,
};

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const checkPassValidity = (condition: boolean): PasswordReport => {
    if (password === "") return PasswordReport.empty;
    return condition ? PasswordReport.valid : PasswordReport.invalid;
  };

  // Check for password validity regarding strength
  const lengthStatus = checkPassValidity(password.length >= 8);
  const upperCaseStatus = checkPassValidity(/[A-Z]/.test(password));
  const containsNumberStatus = checkPassValidity(/[0-9]{1,}/.test(password));
  const containsSpecialCharacterStatus = checkPassValidity(
    /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\\/?~]/.test(password)
  );

  const calculateProgress = () => {
    let progress = 0;
    if (lengthStatus === PasswordReport.valid)
      progress += progressWeight.length;
    if (upperCaseStatus === PasswordReport.valid)
      progress += progressWeight.uppercase;
    if (containsNumberStatus === PasswordReport.valid)
      progress += progressWeight.numbers;
    if (containsSpecialCharacterStatus === PasswordReport.valid)
      progress += progressWeight.specialCharacters;

    return progress;
  };

  const criteria = [
    { label: "At least 8 characters", status: lengthStatus },
    { label: "Contains uppercase letter", status: upperCaseStatus },
    { label: "Contains number", status: containsNumberStatus },
    {
      label: "Contains special character",
      status: containsSpecialCharacterStatus,
    },
  ];

  const getStrengthLabel = (progress: number): PasswordStrength => {
    if (progress >= 91) return PasswordStrength.Excellent;
    if (progress >= 71) return PasswordStrength["Very Strong"];
    if (progress >= 41) return PasswordStrength.Strong;
    if (progress >= 21) return PasswordStrength.Normal;
    return PasswordStrength.Week;
  };

  const progress = calculateProgress();
  const strength = getStrengthLabel(progress);
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">
          Password Strength Checker
        </h2>

        {/* Password Input */}
        <PasswordInput
          show={show}
          handlePasswordChange={handlePasswordChange}
          setShow={setShow}
        />

        {/* Strength Indicator */}
        <PasswordStrengthIndicator
          strength={strength}
          progress={progress}
          password={password}
        />

        {/* Criteria Checklist */}
        <Critarea criteria={criteria} />
        {/* Submit Button */}
        <button className="w-full bg-green-600 text-slate-100 py-2 rounded-md mt-6 hover:bg-green-700 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
}
