import { Eye, EyeOff } from "lucide-react";
import React, { ChangeEvent } from "react";

interface PasswordInputProps {
  show: boolean;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setShow: (value: React.SetStateAction<boolean>) => void;
}

const PasswordInput = ({
  show,
  handlePasswordChange,
  setShow,
}: PasswordInputProps) => {
  return (
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
        {!show ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default PasswordInput;
