import React, { useEffect, useState } from 'react';

export const useFetch = (baseUrl:string, initialType:string) => {

  const [data,setData] = useState([]);

  const fetchUrl = (type:string)=> {
    fetch(baseUrl + "/" + type)
    .then(res=>res.json())
    .then(res=>setData(res))
  }

  useEffect(()=> {
    fetchUrl(initialType)
  },[])

  return {
    data, fetchUrl
  }
};