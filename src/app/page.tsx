import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
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
            <Textarea id="input_code" name="input_code" placeholder="input Code" />
          </div>

          {/* output */}
          <div>
            <label className="mb-2 inline-block" htmlFor="output_code">
              Output:
            </label>
            <Textarea id="output_code" name="output_code" placeholder="output Code" />
          </div>
        </div>
      </form>
    </main>
  );
}
