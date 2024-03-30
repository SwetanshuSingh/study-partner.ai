import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const generateQuiz = async (prompt : string) => {
    const model = genAI.getGenerativeModel({ model : "gemini-pro"});

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response;
}

export async function POST(req : Request) {
    const  { prompt } = await req.json();
    const text = await generateQuiz(prompt);
    return Response.json(text);
}