"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");

  function removeDarkStateClasses(classString: string) {
    const element = new DOMParser().parseFromString(classString, "text/html");
    const the_element = element.body.firstChild as HTMLElement;
    let classList = the_element.className.split(" ");
    classList = classList.filter((item) => !/^dark:/.test(item));
    the_element.className = classList.join(" ");
    return the_element.outerHTML;
  }

  const handleSplit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputCode(value);

    const data = removeDarkStateClasses(value);
    setOutputCode(data);
  };

  return (
    <main className="container py-20">
      <h1 className="text-3xl font-bold mb-4 text-center border-b-2 pb-4">SplitWind</h1>

      <form action="">
        <div className="grid grid-cols-2 gap-8">
          {/* input */}
          <div>
            <label className="mb-2 inline-block" htmlFor="input_code">
              Input:
            </label>
            <Textarea
              id="input_code"
              name="input_code"
              placeholder="input Code"
              onInput={handleSplit}
              value={inputCode}
            />
          </div>

          {/* output */}
          <div>
            <label className="mb-2 inline-block" htmlFor="output_code">
              Output:
            </label>
            <Textarea
              id="output_code"
              name="output_code"
              placeholder="output Code"
              value={outputCode}
              readOnly
            />
          </div>
        </div>
      </form>
    </main>
  );
}
