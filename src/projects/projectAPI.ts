import Project from "./Project";

const baseUrl = "http://localhost:4000";
const url = `${baseUrl}/projects`;

const delay = (ms: number) => {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
};

const translateStatusToErrorMessage = (status: number) => {
  switch (status) {
    case 401:
      return "Please log in again";
    case 403:
      return "You don't have the permission to see this project";
    default:
      return "There was an error retrieving the project(s). Please try again.";
  }
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

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
};

const parseJSON = (response: Response) => response.json();

const convertToProjectModels = (data: any[]) => {
  let projects: Project[] = data.map(convertToProjectModel);
  return projects;
};

const convertToProjectModel = (item: any) => new Project(item);

const ProjectAPI = {
  get(page = 1, limit = 20) {
    return fetch(`${url}?_page=${page}&_limit=${limit}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToProjectModels)
      .catch((error: TypeError) => {
        console.log("client error " + error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },
  put(project: Project) {
    return fetch(`${url}/${project.id}`, {
      method: "PUT",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch((error: TypeError) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },
  find(id: number) {
    return fetch(`${url}/${id}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToProjectModel);
  },
};

export { ProjectAPI };
