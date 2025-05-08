import { defineEventHandler } from 'h3';
import rateLimit from '../api/middleware/rateLimit';

export default defineEventHandler(async (event) => {
  
  await rateLimit(event)
});
