import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { CreateTranscriptionRoute } from "./routes/create-transcription";
import { GenerateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(CreateTranscriptionRoute);
app.register(GenerateAICompletionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("listening on port 3333");
  });
