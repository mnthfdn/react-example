import {createContext,useEffect, useState} from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [postList, setPostList] = useState([]);

    const [filtredList, setFiltredList] = useState([]);

    function fetchPostData() {
      fetch("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "app-id": "6112dc7c3f812e0d9b6679dd",
        },
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => setPostList(response.data))
        .catch((e) => console.log("Err: " + e));
    }
  
    useEffect(() => {
      fetchPostData();
    }, []);

    
    
    const values = {
        postList, 
        setPostList,
        filtredList,
         setFiltredList

    }
    return <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>
}

export default ThemeContext