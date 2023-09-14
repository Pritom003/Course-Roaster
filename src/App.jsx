
import { useState } from 'react'
import './App.css'
import Card from './COMPONENTS/Card/Card'
import { useEffect } from 'react'
import Sidebar from './COMPONENTS/Sidebar/Sidebar'

function App() {
  const [ blogs, setblogs]=useState([])
  const [ Select,setselected]=useState([])
  useEffect( ()=>{
fetch('Blogs.json')
.then((res)=> res.json())
.then(data=>setblogs(data) )


  },[])

 const handleselection=(item)=> {

  console.log(item.id ,Select,'hi')
   if(Select.find(id=>id!==item.it)){
    return alert('the couse is already selected')
   }else{
  

  
  setselected([...Select, item]);
  
   }



 }
 


  

  return (
    <>
  <h1 className='text-5xl font-bold flex justify-center align-middle items-center m-10'>Course Registration</h1>

   <div className='flex justify-between'>
   <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
   {
     blogs.map((blog,id)=><Card key={id}
     handleselection={handleselection}
     
     blog={blog}></Card>)

   }
   </div>
   <Sidebar select={Select}/>
  

   </div>


  
    </>
  )
}

export default App
