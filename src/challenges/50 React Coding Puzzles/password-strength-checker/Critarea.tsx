import { Check, X } from "lucide-react";
import { PasswordReport } from "../types";

type CritareaProps = {
  criteria: Array<{ label: string; status: PasswordReport }>;
};

const Critarea = ({ criteria }: CritareaProps) => {
  return (
    <div className="mb-6 space-y-2">
      {criteria.map((criterion, index) => (
        <div key={index} className="flex items-center">
          {criterion.status === PasswordReport.valid ? (
            <Check className="w-4 h-4 mr-2 text-green-500" />
          ) : (
            <X className="w-4 h-4 mr-2 text-red-500" />
          )}
          <span
            className={`text-sm ${
              criterion.status === PasswordReport.valid
                ? "text-green-500"
                : criterion.status === PasswordReport.invalid
                ? "text-red-500"
                : "text-slate-300"
            }`}
          >
            {criterion.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Critarea;
