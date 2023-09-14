
import PropTypes from 'prop-types';
import List from './List';

const Sidebar = ({select,totlcount,Remainingtime}) => {
  
// console.log(select)

  return (
   
    <div className="artboard phone-3 md:w-1/3 w-1/2  bg-slate-400">



      <h3 className=' text-blue-600 text-lg mx-4 font-bold border-b-2 border-dotted border-zinc-500'>
      Credit Hour Remaining {Remainingtime} hr
      </h3>
      <h2 className="text-4xl font-bold m-2   mb-2"> Course Name</h2>

    <div className='border-b-2 border-dotted border-zinc-500  m-4'>
      {
    select.map((items,id)=> <List key={id} items={items}></List> )
      }
    </div>
     
      
     

     
      <h3 className='font-bold border-b-2 border-dotted border-zinc-500 m-4'>Total Credit Hour : {totlcount}hr</h3>
      <h3 className='font-bold border-b-2 border-dotted border-zinc-500  m-4'>Total Price :  </h3>

    </div>

  
    
  );
};

Sidebar.propTypes = {
select:PropTypes.array.isRequired

};

export default Sidebar;