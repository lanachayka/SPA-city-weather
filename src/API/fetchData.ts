export const fetchData = async (
  path: string,
  method?: string,
  body?: BodyInit,
): Promise<unknown> => {
  const init = {
    method: method,
    body: body,
  };
  return fetch(path, init)
    .then((response: Response) => response.json())
    .catch((err) => {
      if (err instanceof Error) {
        throw {
          type: "SERVER_RESPONSE_ERROR",
          message: "HTTP 500 internal server error",
          code: 500,
          description: "string",
        };
      }
      throw err;
    });
};
