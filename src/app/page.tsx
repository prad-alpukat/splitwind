"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function Home() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");

  function removeDarkStateClasses(classString: string | undefined) {
    classString = classString ? classString : "";
    const element = new DOMParser().parseFromString(classString, "text/html");
    const the_element = element.body.firstChild as HTMLElement;
    let classList = the_element.className.split(" ");
    classList = classList.filter((item) => !/^dark:/.test(item));
    the_element.className = classList.join(" ");
    return the_element.outerHTML;
  }

  const handleSplit = (e: string | undefined) => {
    e = e ? e : "";
    setInputCode(e);

    const data = removeDarkStateClasses(e);
    setOutputCode(data);
  };

  return (
    <main className="container py-20">
      <div className="border-b-2 pb-3 text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-center">SplitWind</h1>
        <p>tool to remove class `dark variant` tailwindcss</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {/* input */}
        <div>
          <label className="mb-2 inline-block" htmlFor="input_code">
            Input:
          </label>
          <Editor
            height="90vh"
            language="html"
            value={inputCode}
            onChange={handleSplit}
            options={{
              wordWrap: "on",
            }}
            className="border"
          />
        </div>

        {/* output */}
        <div>
          <label className="mb-2 inline-block" htmlFor="output_code">
            Output:
          </label>
          <Editor
            height="90vh"
            language="html"
            value={outputCode}
            options={{
              readOnly: true,
              wordWrap: "on",
            }}
            className="border"
          />
        </div>
      </div>
    </main>
  );
}
