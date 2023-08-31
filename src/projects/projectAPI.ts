const baseUrl = "http://localhost:4000";
const url = `${baseUrl}/projects`;

const delay = (ms: number) => {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
};

const checkStatus = (response: any) => {
  if (response.ok) return response;
  else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };

    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);
  }
};

const ProjectAPI = {
  get(page = 1, limit = 20) {
    return fetch(`${url}?_page=${page}&_limit=${limit}`)
      .then(delay(600))
      .then(checkStatus);
  },
};
