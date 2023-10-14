import axios from "axios";

export const getExampleTasks = async () => {
  const response = await axios
    .get("/to_do_list_react/exampleTasks.json")
    .catch(error => console.error("Coś poszło nie tak", error));

  return await response.data;
};
