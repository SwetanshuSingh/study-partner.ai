"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import { useState } from "react";

const Mcq = () => {
  // Assuming you have fetched the questions from the server and stored in a variable `questions`
  const questions = [
    {
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    // More questions...
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizVisible, setQuizVisible] = useState(false);
  const [text, setText] = useState("");
  const [quiz_text, setQuizText] = useState("");
  const [quizOptions, setQuizOptions] = useState("");
  const [status, setStatus] = useState("");

  const handleQuiz = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      console.log(text);
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // console.log("ok");
      const data = await response.json();
      // console.log(data[0].summary);
      // console.log("okk");
      setQuizText(data.summary);
      setQuizVisible(!isQuizVisible);
      // console.log(data.summary);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const handleNext = () => {
    setStatus("");
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const checkStatus = () => {
    if (quizOptions === "") {
      setStatus("Correct");
    } else {
      setStatus("Incorrect");
    }
  };

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
        {!isQuizVisible && (
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl font-semibold text-center mt-4">
              Enter Your Input
            </h2>
            <textarea
              className="w-full max-w-lg h-80 p-6 px-8 bg-white text-black rounded-lg shadow-md"
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="w-full max-w-28 py-2 px-4 rounded bg-black text-white mt-4"
              onClick={handleQuiz}
            >
              Generate
            </button>
          </div>
        )}
        {isQuizVisible && (
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md my-4">
            <h1 className="font-bold text-2xl mb-4">Question</h1>
            <p className="text-md mb-4">
              {questions[currentQuestionIndex].question}
            </p>

            <div className="space-y-4">
              <div className="flex justify-between gap-4">
                <button
                  className="option w-full py-2 px-4 rounded bg-black text-white"
                  onClick={() => {
                    setQuizOptions(questions[currentQuestionIndex].options[0]);
                    checkStatus();
                  }}
                >
                  {questions[currentQuestionIndex].options[0]}
                </button>
                <button
                  className="option w-full py-2 px-4 rounded bg-black text-white"
                  onClick={() =>
                    setQuizOptions(questions[currentQuestionIndex].options[1])
                  }
                >
                  {questions[currentQuestionIndex].options[1]}
                </button>
              </div>
              <div className="flex justify-between gap-4">
                <button
                  className="option w-full py-2 px-4 rounded bg-black text-white"
                  onClick={() =>
                    setQuizOptions(questions[currentQuestionIndex].options[2])
                  }
                >
                  {questions[currentQuestionIndex].options[2]}
                </button>
                <button
                  className="option w-full py-2 px-4 rounded bg-black text-white"
                  onClick={() =>
                    setQuizOptions(questions[currentQuestionIndex].options[3])
                  }
                >
                  {questions[currentQuestionIndex].options[3]}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="mt-4 bg-black text-white px-2 py-1 rounded"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
        <div className="mt-4">Status : {status}</div>
      </div>
    </main>
  );
};

export default Mcq;
