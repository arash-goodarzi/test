import { NextApiRequest, NextApiResponse } from 'next';

type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (result?: unknown) => void
) => void;

// Utility function to initialize middleware
const initMiddleware = (middleware: Middleware) => (
  req: NextApiRequest,
  res: NextApiResponse
) =>
  new Promise<void>((resolve, reject) => {
    middleware(req, res, (result?: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve();
    });
  });

export default initMiddleware;