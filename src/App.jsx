
import { useState } from 'react'
import './App.css'
import Card from './COMPONENTS/Card/Card'
import { useEffect } from 'react'
import Sidebar from './COMPONENTS/Sidebar/Sidebar'
import swal from 'sweetalert';
import Swal from 'sweetalert2'

 

function App() {
  const [ blogs, setblogs]=useState([])
  const [ Select,setselected]=useState([])
  const[totlcount,setcount]=useState(0)
  const[Remainingtime,setremaing]=useState(20)
  useEffect( ()=>{
fetch('Blogs.json')
.then((res)=> res.json())
.then(data=>setblogs(data) )


  },[])

 const handleselection=(item)=> {
const isexist=Select.find(items=>items.id==item.id)
  // console.log(item.id ,Select,'hi')
   Select.forEach(items=>items.id)
   let Creditcount=item.credit

   if(isexist){
    return swal("You have already selected this course.");
   }else{
  
     
    
 
  setselected([...Select, item]);
  Select.find(credits=>{
    Creditcount=Creditcount+credits.credit})
    console.log(Creditcount,"hey")
   let Remaining=15-Creditcount
   if(Remaining<0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Sorry, you have used up all your available credits.!',
      footer: '<a href="">Would you like to unlock the paid facilities?</a>'
    })
   }
   else {
    setremaing(Remaining)
    setcount(Creditcount)

     
   }


  
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
   
   <Sidebar Remainingtime={Remainingtime} totlcount={totlcount} select={Select}/>
  

   </div>


  
    </>
  )
}

export default App

