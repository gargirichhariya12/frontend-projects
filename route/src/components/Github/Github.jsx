import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect (() => {
    //     fetch ('https://api.github.com/user/gargirichhariya12')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4  bg-gray-600 text-white p-4 text-3xl'>
      Github Followers{data.followers}
    </div>
  )
}

export default Github

export const GithubInfoLoader = async() =>{
   const response = await fetch('https/github.com/user/gargirichhariya12')
   return response.json;
}