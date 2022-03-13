export const formReducer = (state, event) => {
  if (event.reset) {
    return {
      title: "",
      summary: 0,
      body: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

export const generateId = () =>
  `${performance.now()}${Math.random().toString().slice(5)}`.replace(".", "");
