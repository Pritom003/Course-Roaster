
import PropTypes from 'prop-types';
import List from './List';

const Sidebar = ({select,totlcount,Remainingtime}) => {
  
// console.log(select)

  return (
   
    <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">

  <h3 className=' text-blue-600   font-bold border-b-2 border-dotted '>
Credit Hour Remaining {Remainingtime} hr
</h3>
<h2 className="text-2xl font-bold "> Course Name</h2>

<ul  className='border-b-2 border-dotted border-zinc-500  '>
{
select.map((items,id)=> <List key={id} items={items}></List> )
}
</ul>





<h3 className='font-bold border-b-2 border-dotted border-zinc-500 m-4'>Total Credit Hour : {totlcount}hr</h3>
<h3 className='font-bold border-b-2 border-dotted border-zinc-500  m-4'>Total Price :  </h3>



   
    </div>
  </div>


    
  );
};

Sidebar.propTypes = {
select:PropTypes.array.isRequired

};

export default Sidebar;
