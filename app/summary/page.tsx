"use client";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";

const Summary = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const handleSummarize = async () => {
    try {
      const response = await fetch('https://mcq-question-generator-backend.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      console.log("okk")
      setSummary(data.summary);
      console.log(data.summary)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <main className="w-full h-[100vh] p-10">
      <div className="w-full h-full">
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="a">Summarise</ToggleGroupItem>
          <ToggleGroupItem value="b">Quiz</ToggleGroupItem>
          <Link href="mcq">
            <ToggleGroupItem value="c">Multiple Choice</ToggleGroupItem>
          </Link>
          <ToggleGroupItem value="d">Flash Cards</ToggleGroupItem>
        </ToggleGroup>
        <h2 className="text-xl font-semibold text-center mt-4">
          Enter Your Input
        </h2>
        <div className="flex flex-col gap-4 items-center">
          <textarea
            className="w-full max-w-lg h-64 p-4 bg-white text-black rounded-lg shadow-md"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="w-full max-w-28 py-2 px-4 rounded bg-black text-white mt-4"
            onClick={handleSummarize}
          >
            Generate
          </button>
          <h2 className="text-xl font-semibold text-center mt-4">Summary</h2>
          <div className="w-full max-w-lg h-64 p-4 bg-white text-black rounded-lg shadow-md overflow-auto mb-4 border-black border-2">
            {summary}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Summary;
