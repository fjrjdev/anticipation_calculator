import { createContext, useState } from "react";
import api from "../../services";

export const StatesContext = createContext();

export const StatesProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const clearData = (data) => {
    const daysArry = Object.keys(data);
    const valuesArry = Object.values(data);
    const clearData = [];
    daysArry.forEach((elem, index) => {
      clearData[index] = { days: daysArry[index], values: valuesArry[index] };
    });
    setData(clearData);
  };
  const calculateRequest = (data) => {
    setLoading(true);
    api
      .post("", data)
      .then((response) => clearData(response.data))
      .finally(() => setLoading(false));
  };
  return (
    <StatesContext.Provider
      value={{ tags, setTags, data, calculateRequest, loading }}
    >
      {children}
    </StatesContext.Provider>
  );
};
