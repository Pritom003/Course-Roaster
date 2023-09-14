
import { useState } from 'react'
import './App.css'
import Card from './COMPONENTS/Card/Card'
import { useEffect } from 'react'
import Sidebar from './COMPONENTS/Sidebar/Sidebar'

function App() {
  const [ blogs, setblogs]=useState([])
  useEffect( ()=>{
fetch('Blogs.json')
.then((res)=> res.json())
.then(data=>setblogs(data) )


  },[])

  return (
    <>
  <h1 className='text-5xl font-bold flex justify-center align-middle items-center m-10'>Course Registration</h1>

   <div className='flex justify-between'>
   <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
   {
     blogs.map((blog,id)=><Card key={id} blog={blog}></Card>)

   }
   </div>
   <Sidebar></Sidebar>


   </div>


  
    </>
  )
}

export default App
