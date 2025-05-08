import { defineEventHandler, readBody, createError } from 'h3';
import OpenAI from "openai";

interface Body {
  messages?: string[],
}

export default defineEventHandler(async (event : any) => {
  
  const config = useRuntimeConfig();
  const body = await readBody(event);

  try {

    const openai = new OpenAI({
      apiKey: config.CHATGPT_API_KEY,
      baseURL: 'https://openrouter.ai/api/v1',
    });

    const { messages } : Body = body;

    const formattedMessages : any = messages?.map((message) => {
      return {
        role: 'user',
        content: message
      }
    })

    console.log(messages)
    console.log(formattedMessages)
    try {
      const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-prover-v2:free",
        
        // store: true,
        messages: formattedMessages || [],
      });
      
      
      
      return { 
        message: completion.choices[0].message,
      }
    } catch (error: any) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Ошибка',
        message: error.message
      })
    }
    
  } catch (error: any) {

    if (error.statusCode && error.statusMessage) {
      throw error;
    }

    console.log(error)
    throw createError({
      statusCode: 404,
      statusMessage: 'Ошибка'
    })
  }
});
