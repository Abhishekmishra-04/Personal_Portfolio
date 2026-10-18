import { portfolioData } from "@/data/portfolio";
import OpenAI from "openai";

// Initialize OpenAI client
// Note: In a real production environment, you would use process.env.OPENAI_API_KEY
// We will implement a mock fallback if the key is missing to ensure the portfolio works for demo purposes.
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "dummy-key",
  dangerouslyAllowBrowser: true, // Only for demo/client-side testing if needed, but we are using server route
});

const SYSTEM_PROMPT = `
You are the AI Assistant for ${portfolioData.personal.name}'s portfolio.
Your goal is to represent ${portfolioData.personal.name} professionally to recruiters, CTOs, and hiring managers.

HERE IS THE CONTEXT ABOUT ${portfolioData.personal.name}:
${JSON.stringify(portfolioData, null, 2)}

GUIDELINES:
1. Be professional, concise, and confident.
2. Do NOT hallucinate skills or experiences not listed in the context.
3. If asked about a specific project, provide technical details from the context.
4. If asked "Why hire him?", summarize the "Why Hire Me" section.
5. If asked about contact info, provide the email and LinkedIn.
6. Keep responses under 150 words unless asked for a detailed explanation.
7. Tone: Senior Engineer, helpful, not arrogant.

IF THE USER ASKS A QUESTION YOU CANNOT ANSWER FROM CONTEXT:
Politely say you don't have that specific information but emphasize a related strength.
`;

export async function POST(req: Request) {
  try {
    const { messages, type, data } = await req.json();

    // CHECK FOR API KEY (Mock Mode if missing)
    if (!process.env.OPENAI_API_KEY) {
      // SIMULATED AI RESPONSE FOR DEMO
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network latency

      let mockResponse = "";
      
      if (type === "chat") {
        const lastMessage = messages[messages.length - 1].content.toLowerCase();
        if (lastMessage.includes("hire") || lastMessage.includes("why")) {
          mockResponse = "You should hire Abhishek because he ships features, not just code. He understands the full stack—from database query optimization to frontend performance. His experience with scaling Job Portals and AI apps proves he is ready for production environments.";
        } else if (lastMessage.includes("project") || lastMessage.includes("work")) {
           mockResponse = "Abhishek has built several complex projects. His 'Job Portal' features a dual-database architecture (MySQL + MongoDB) for performance, and his 'Netflix Clone' demonstrates mastery of complex UI/UX. Would you like a deep dive into the architecture of a specific project?";
        } else if (lastMessage.includes("contact") || lastMessage.includes("email") || lastMessage.includes("form") || lastMessage.includes("reach") || lastMessage.includes("phone")) {
           mockResponse = `You can reach Abhishek directly at ${portfolioData.personal.email}, on Phone/WhatsApp at ${portfolioData.personal.phone}, connect on LinkedIn at ${portfolioData.personal.linkedin}, or send a message using the Contact Form on this page (jump to the form: #contact).`;
        } else {
           mockResponse = "I'm Abhishek's AI assistant. I can tell you about his Full Stack skills, his experience with scalable systems, or deep dive into his projects like the Job Portal or AI Portfolio. What would you like to know?";
        }
      } else if (type === "skill_match") {
         const score = Math.floor(Math.random() * (95 - 75) + 75); // Random score between 75-95 for demo
         mockResponse = JSON.stringify({
            matchPercentage: score,
            analysis: `Abhishek is a strong match (${score}%) for this role. He has the required Full Stack expertise (Next.js, Node.js, databases). \n\n**Matches:**\n- React/Next.js for Frontend\n- Node.js/Express for Backend\n- Database Optimization skills\n\n**Gap Analysis:**\n- If the JD mentions Python/Go, he is quick to adapt, having strong CS fundamentals.`,
            verdict: "Highly Recommended for Interview"
         });
      } else if (type === "explain_project") {
         const projectTitle = data?.projectTitle || "Project";
         mockResponse = `**Architecture Breakdown for ${projectTitle}:**\n\n1. **Frontend**: Built with React/Next.js for server-side rendering and fast FCP.\n2. **Backend**: Node.js REST API handling complex business logic.\n3. **Database**: Optimized schema design to handle relational data efficiently.\n\n**Key Challenge**: Handling real-time data updates without performance degradation.\n**Solution**: Implemented optimistic UI updates and efficient caching strategies.`;
      } else if (type === "summary") {
         const audience = data?.audience || "recruiter";
         if (audience === "recruiter") {
            mockResponse = "Abhishek is a production-ready Full Stack Developer with experience in Next.js, Node.js, and Cloud deployments. He has optimized page loads by 30% and reduced API latency by 40% in previous roles. He is available immediately for full-time roles.";
         } else if (audience === "technical") {
             mockResponse = "Abhishek is a Full Stack Engineer who understands system design. He uses Next.js for SSR, Node.js for scalable microservices, and has practical experience with both SQL (MySQL) and NoSQL (MongoDB). He prioritizes clean code, type safety (TypeScript), and performance optimization.";
         } else {
             mockResponse = "An ambitious engineer who bridges the gap between product requirements and technical implementation. Abhishek delivers scalable, maintainable solutions and brings a 'product-first' mindset to engineering challenges.";
         }
      }

      return new Response(mockResponse);
    }

    // REAL OPENAI CALL
    let userMessage = "";
    
    if (type === "chat") {
        userMessage = messages[messages.length - 1].content;
    } else if (type === "skill_match") {
        userMessage = `Analyze this Job Description and match it with my skills: \n\n${data.jobDescription}\n\nOutput JSON format with matchPercentage, analysis, and verdict.`;
    } else if (type === "explain_project") {
        userMessage = `Explain the project "${data.projectTitle}" to a ${data.audience || "technical recruiter"}. Focus on architecture, challenges, and scalability.`;
    } else if (type === "summary") {
        userMessage = `Generate a summary of my profile for a ${data.audience} audience.`;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(0, -1), // Previous context
        { role: "user", content: userMessage }
      ],
      stream: true,
    });

    // Handle streaming response using Vercel AI SDK patterns manually or just return stream
    // For simplicity in this custom route, we will just return the stream
    // Ideally we use 'StreamingTextResponse' from 'ai' package, but let's stick to standard Response for now to be generic
    
    // NOTE: For 'skill_match' we might want JSON, but streaming text is fine, we can parse on client or just display text.
    // Let's rely on text streaming for all for now.

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const text = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(new TextEncoder().encode(text));
        }
        controller.close();
      },
    });

    return new Response(stream);

  } catch (error) {
    console.error("AI API Error:", error);
    return new Response("Error processing AI request.", { status: 500 });
  }
}
