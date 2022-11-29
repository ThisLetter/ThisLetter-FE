import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

const baseUrl = "https://jsonplaceholder.typicode.com"
interface DataProps {
  name:string, id:number, title:string
}

const FetchTest = () => {

  const {data:userData} = useFetch(baseUrl, "users")
  const {data:postData} = useFetch(baseUrl, "posts")

  return (
    <div>
      <h1>useFetch</h1>
      {userData.map(({name, id, title}:DataProps)=> (
        <div key={id}>{name || title}</div>
      ))}
      <h1>Post</h1>
      {postData.map(({name, id, title}:DataProps)=> (
        <div key={id}>{name || title}</div>
      ))}
    </div>
  );
};

export default FetchTest;