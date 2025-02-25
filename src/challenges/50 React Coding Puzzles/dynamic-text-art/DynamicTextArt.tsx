import { ChangeEvent, useState } from "react";

const DynamicTextArt = () => {
  const [input, setInput] = useState("");
  const [art, setArt] = useState<unknown>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    generateTextArt();
  };

  function generateTextArt() {
    const text = input.split("");
    const art = [];

    for (let i = 0; i < text.length; i++) {
      art.push(
        <span
          style={{ fontSize: (i + 1) % 2 === 0 ? (i + 1) * 10 : (i + 1) * 5 }}
        >
          {text[i]}
        </span>
      );
    }

    setArt(art);
  }
  return (
    <div className="w-full mt-20 flex items-center justify-center ">
      <div className="min-w-md bg-zinc-700 px-2 py-4 rounded  ">
        <input
          className="text-white py-2 px-1 w-full focus:outline-0 border border-zinc-400 rounded"
          value={input}
          onChange={handleInputChange}
        />
        <div className="text-white flex flex-wrap max-w-2xl overflow-y-scroll max-h-96">
          {art as string}
        </div>
      </div>
    </div>
  );
};
export default DynamicTextArt;
