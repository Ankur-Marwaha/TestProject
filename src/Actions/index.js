const getCharactersSuccess = data => {
  return {
    type: "LOAD_CHARACTERS",
    payload: data
  };
};
const sortById = data => {
  return {
    type: "SORT",
    payload: data
  };
};
const searchByName = data => {
  return {
    type: "SEARCH",
    payload: data
  };
};
const filter = data => {
  return {
    type: "FILTER",
    payload: data
  };
};

export { getCharactersSuccess, sortById, searchByName, filter };
