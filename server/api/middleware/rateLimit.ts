import { defineEventHandler, createError, setResponseHeader, getHeader } from 'h3';

const requestCounts = new Map();

export default defineEventHandler(async (event) => {
  const ip = event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress;
  const now = Date.now();
  const url = event.node.req.url || '';
  const method = event.node.req.method || 'GET';

  const isWriteRequest = method === 'POST' || method === 'PUT' || method === 'DELETE';
  const maxRequests = isWriteRequest ? 20 : 20; 
  const timeWindow = 13 * 1000; 
  const slowDownLimit = maxRequests * 0.8; 

  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, []);
  }

  const requests = requestCounts.get(ip)!.filter((time : any) => now - time < timeWindow);
  requests.push(now);
  requestCounts.set(ip, requests);

  if (requests.length > slowDownLimit) {
    console.log(`⏳ Замедляем ответ для ${ip} (кол-во запросов: ${requests.length})`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
  }

  setResponseHeader(event, 'X-RateLimit-Limit', maxRequests.toString());
  setResponseHeader(event, 'X-RateLimit-Remaining', (maxRequests - requests.length).toString());
});
