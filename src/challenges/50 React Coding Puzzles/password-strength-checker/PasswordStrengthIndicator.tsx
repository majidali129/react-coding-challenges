import { PasswordStrength } from "../types";

const PasswordStrengthIndicator = ({
  password,
  strength,
  progress,
}: {
  password: string;
  progress: number;
  strength: PasswordStrength;
}) => {
  return (
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
                : "text-green-200"
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
  );
};

export default PasswordStrengthIndicator;
