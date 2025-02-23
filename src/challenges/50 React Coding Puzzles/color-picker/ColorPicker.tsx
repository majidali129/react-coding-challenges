import {
  CopyIcon,
  EyeClosedIcon,
  EyeIcon as EyeDropperIcon,
} from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

const ColorPicker = () => {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const colorInputRef = useRef<HTMLInputElement>(null);
  const handleToggleShow = () => {
    setShow((prev) => !prev);
  };

  const handleColorSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCode(value);
    if (value) {
      setTimeout(() => {
        colorInputRef.current?.setAttribute("type", "text");
        colorInputRef.current?.setAttribute("type", "color");
      }, 180);
    }
  };

  const handleCodeCopy = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not supported");
      }
      await navigator.clipboard.writeText(code);
      console.log("Text copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy text.", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center ">
      <div className="bg-slate-900 p-6 rounded-lg shadow-xl min-w-[23rem]">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">Color Picker</h2>
        <div className="mb-4">
          <label
            htmlFor="color"
            className="block relative w-full  bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-md cursor-pointer"
          >
            <span className="absolute text-sm w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Pick Your Faviroute Color
            </span>
            <input
              ref={colorInputRef}
              onChange={handleColorSelect}
              type="color"
              name="color"
              id="color"
              className="opacity-0"
            />
          </label>
        </div>
        {code && (
          <div className="grid grid-cols-[40px_auto_40px] gap-2 mb-4">
            <button
              onClick={handleCodeCopy}
              className="w-full rounded-md flex items-center justify-center bg-gray-950"
            >
              <CopyIcon className="w-5 h-5 text-slate-100" />
            </button>
            <input
              type={show ? "text" : "password"}
              value={code}
              readOnly
              className="bg-slate-800 text-slate-100 px-3 py-2 rounded-md"
            />
            <button
              onClick={handleToggleShow}
              className=" p-2 bg-slate-800 rounded-md hover:bg-slate-700"
            >
              {!show ? (
                <EyeDropperIcon className="w-5 h-5 text-slate-100" />
              ) : (
                <EyeClosedIcon className="w-5 h-5 text-slate-100" />
              )}
            </button>
          </div>
        )}
        {/* <div className="grid grid-cols-5 gap-2">
          {["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"].map(
            (color) => (
              <div
                key={color}
                className="w-10 h-10 rounded-md cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            )
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ColorPicker;
