import { defineEventHandler, readBody, createError } from 'h3';

interface Body {
  name?: string | number,
}

export default defineEventHandler(async (event : any) => {
  
  const config = useRuntimeConfig();
  const body = await readBody(event);

  try {

    

    const { name } : Body = body;

    

    return {
      message: 'Успешно'
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
