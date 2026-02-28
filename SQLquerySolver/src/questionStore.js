
export const setQuestions = (data) => {
  localStorage.setItem("questions", JSON.stringify(data));
};

export const getQuestions = () => {
  const data = localStorage.getItem("questions");
  return data ? JSON.parse(data) : [];
};