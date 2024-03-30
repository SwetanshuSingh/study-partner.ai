import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";

const Mcq = () => {
  return (
    <main className="w-full h-[100vh] p-10">
      <div className="w-full h-full flex flex-col items-center">
        <ToggleGroup type="single" variant="outline">
          <Link href="/summary">
            <ToggleGroupItem value="a">Summarise</ToggleGroupItem>
          </Link>
          <ToggleGroupItem value="b">Quiz</ToggleGroupItem>
          <ToggleGroupItem value="c">Multiple Choice</ToggleGroupItem>
          <ToggleGroupItem value="d">Flash Cards</ToggleGroupItem>
        </ToggleGroup>

        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md my-4">
          <h1 className="font-bold text-2xl mb-4">Question</h1>
          <p className="text-md mb-4">Dummy Question</p>

          <div className="space-y-4">
            <div className="flex justify-between gap-4">
            <button className="w-full py-2 px-4 rounded bg-black text-white">
              Answer 1
            </button>
            <button className="w-full py-2 px-4 rounded bg-black text-white">
              Answer 2
            </button>
            </div>
            <div className="flex justify-between gap-4">
            <button className="w-full py-2 px-4 rounded bg-black text-white">
              Answer 3
            </button>
            <button className="w-full py-2 px-4 rounded bg-black text-white">
              Answer 4
            </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mcq;
