import { Check, Eye, EyeOff, X } from "lucide-react";
import { ChangeEvent, useState } from "react";

enum PasswordReport {
  empty = "empty",
  valid = "valid",
  invalid = "invalid",
}

enum PasswordStrength {
  Week = "Week",
  Normal = "Normal",
  Strong = "Strong",
  "Very Strong" = "Very Strong",
  Excellent = "Excellent",
}

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

  // Check for password validity regarding strength
  const lengthStatus: PasswordReport =
    password === ""
      ? PasswordReport.empty
      : password.length < 8
      ? PasswordReport.invalid
      : PasswordReport.valid;

  const upperCaseStatus =
    password === ""
      ? PasswordReport.empty
      : /[A-Z]/.test(password)
      ? PasswordReport.valid
      : PasswordReport.invalid;

  const containsNumberStatus =
    password === ""
      ? PasswordReport.empty
      : /[0-9]{1,}/.test(password)
      ? PasswordReport.valid
      : PasswordReport.invalid;

  const containsSpecialCharacterStatus =
    password === ""
      ? PasswordReport.empty
      : /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\\/?~]/.test(password)
      ? PasswordReport.valid
      : PasswordReport.invalid;

  // Track progress of password strength
  let progress = 0;
  let strength = PasswordStrength.Week;
  if (lengthStatus === PasswordReport.valid) {
    progress += progressWeight.length;
    strength = PasswordStrength.Week;
  }
  if (upperCaseStatus === PasswordReport.valid) {
    progress += progressWeight.uppercase;
    strength = PasswordStrength.Normal;
  }
  if (containsNumberStatus === PasswordReport.valid) {
    progress += progressWeight.numbers;
    strength = PasswordStrength.Strong;
  }
  if (containsSpecialCharacterStatus === PasswordReport.valid) {
    progress += progressWeight.specialCharacters;
    strength = PasswordStrength["Very Strong"];
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">
          Password Strength Checker
        </h2>

        {/* Password Input */}
        <div className="mb-4 relative">
          <input
            onChange={handlePasswordChange}
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full bg-slate-950 text-slate-100 px-3 py-2 rounded-md pr-10"
          />
          <button
            onClick={() => setShow((prev) => !prev)}
            className="absolute right-2 top-2 text-slate-400"
          >
            {!show ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Strength Indicator */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-slate-300 text-sm">Password Strength:</span>
            {password && (
              <span
                className={`${
                  strength === PasswordStrength.Week
                    ? "text-red-500"
                    : strength === PasswordStrength.Normal
                    ? "text-yellow-500"
                    : strength === PasswordStrength.Strong
                    ? "text-green-400"
                    : strength === PasswordStrength["Very Strong"]
                    ? "text-green-600"
                    : ""
                } text-sm font-semibold`}
              >
                {strength}
              </span>
            )}
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2.5">
            <div
              className={`bg-green-500 h-2.5 rounded-full`}
              style={{ width: progress + "%" }}
            ></div>
          </div>
        </div>

        {/* Criteria Checklist */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center">
            {lengthStatus === PasswordReport.valid ? (
              <Check className="w-4 h-4 mr-2 text-green-500" />
            ) : (
              <X className="w-4 h-4 mr-2 text-red-500" />
            )}
            <span
              className={`text-sm ${
                lengthStatus === PasswordReport.valid
                  ? "text-green-500"
                  : lengthStatus === PasswordReport.invalid
                  ? "text-red-500"
                  : "text-slate-300"
              } `}
            >
              At least 8 characters
            </span>
          </div>
          <div className="flex items-center">
            {upperCaseStatus === PasswordReport.valid ? (
              <Check className="w-4 h-4 mr-2 text-green-500" />
            ) : (
              <X className="w-4 h-4 mr-2 text-red-500" />
            )}
            <span
              className={`text-sm ${
                upperCaseStatus === PasswordReport.valid
                  ? "text-green-500"
                  : upperCaseStatus === PasswordReport.invalid
                  ? "text-red-500"
                  : "text-slate-300"
              } `}
            >
              Contains uppercase letter
            </span>
          </div>
          <div className="flex items-center text-slate-300">
            {containsNumberStatus === PasswordReport.valid ? (
              <Check className="w-4 h-4 mr-2 text-green-500" />
            ) : (
              <X className="w-4 h-4 mr-2 text-red-500" />
            )}
            <span
              className={`text-sm ${
                containsNumberStatus === PasswordReport.valid
                  ? "text-green-500"
                  : upperCaseStatus === PasswordReport.invalid
                  ? "text-red-500"
                  : "text-slate-300"
              } `}
            >
              Contains number
            </span>
          </div>
          <div className="flex items-center text-slate-300">
            {containsSpecialCharacterStatus === PasswordReport.valid ? (
              <Check className="w-4 h-4 mr-2 text-green-500" />
            ) : (
              <X className="w-4 h-4 mr-2 text-red-500" />
            )}
            <span
              className={`text-sm ${
                containsSpecialCharacterStatus === PasswordReport.valid
                  ? "text-green-500"
                  : upperCaseStatus === PasswordReport.invalid
                  ? "text-red-500"
                  : "text-slate-300"
              } `}
            >
              Contains special character
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-green-600 text-slate-100 py-2 rounded-md mt-6 hover:bg-green-700 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
}
