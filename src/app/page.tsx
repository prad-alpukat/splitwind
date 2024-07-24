"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function Home() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");

  // function removeDarkStateClasses(classString: string | undefined) {
  //   classString = classString ? classString : "";

  //   console.log(classString);

  //   classString = classString.replace(/dark:/g, "");

  //   return classString;
  // }

  function removeDarkStateClasses(classString: string) {
    // Definisikan regex untuk mencocokkan semua kelas yang diawali dengan "dark:"
    const darkClassRegex = /dark:[^,\s"]+/g;

    // Ganti semua kecocokan dengan string kosong
    return classString.replace(darkClassRegex, "").replace(/\s+/g, " ").trim();
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
            beforeMount={(monaco) => {
              monaco.languages.registerDocumentFormattingEditProvider("html", {
                async provideDocumentFormattingEdits(model) {
                  return [
                    {
                      range: model.getFullModelRange(),
                      text: removeDarkStateClasses(model.getValue()),
                    },
                  ];
                },
              });
            }}
            options={{
              wordWrap: "on",
              formatOnType: true,
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
              formatOnType: true,
              formatOnPaste: true,
            }}
            className="border"
          />
        </div>
      </div>
    </main>
  );
}
