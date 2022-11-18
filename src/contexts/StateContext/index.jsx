import { createContext, useState } from "react";
import api from "../../services";

export const StatesContext = createContext();

export const StatesProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState(null);
  const calculateRequest = (data) => {
    api.post("", data).then((response) => setData(response.data));
  };
  return (
    <StatesContext.Provider value={{ tags, setTags, data, calculateRequest }}>
      {children}
    </StatesContext.Provider>
  );
};
