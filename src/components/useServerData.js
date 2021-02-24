import { useState, useEffect } from "react";

export const useServerData = ({ url, isButtonClicked }) => {
  const [contactData, setContactData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!isButtonClicked) {
      return;
    }
    const getData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(url);
        const myData = await response.json();
        setContactData(myData);
      } catch (e) {
        console.log("some error");
      } finally {
        setIsFetching(false);
      }
    };
    getData();
  }, [url, isButtonClicked]);
  return [{ contactData, isFetching, setContactData, setIsFetching }];
};
