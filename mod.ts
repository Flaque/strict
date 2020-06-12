interface Response {
  status?: number;
  headers?: any[];
  body?: any;
}

interface Request {
  params: any;
}

export function use<T extends Response, U extends string>(
  url: U,
  serve: (req: Request) => Promise<T>
): (url: U, req: Request) => Promise<T> {
  serve({} as Request);

  return async (url, req) => {
    return {} as T;
  };
}
