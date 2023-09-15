
import PropTypes from 'prop-types';
import List from './List';

const Sidebar = ({select,totlcount,Remainingtime}) => {
  
// console.log(select)

  return (
   
    <div className="card m-4 bg-base-100 shadow-xl">
  <div className="card-body">

  <h3 className=' text-blue-600 mb-4 p-4 text-2xl lg:w-96 font-bold border-b-2 border-dotted border-zinc-500'>
Credit Hour Remaining {Remainingtime} hr
</h3>
<h2 className="text-2xl font-bold  "> Course Name</h2>

<ul  className='border-b-2 border-dotted p-4 list-decimal border-zinc-500  '>
{
select.map((items,id)=> <List key={id} items={items}></List> )
}
</ul>





<h3 className='font-bold border-b-2  m-2 border-dotted border-zinc-500 '>Total Credit Hour : {totlcount}hr</h3>
<h3 className='font-bold border-b-2 m-2 border-dotted border-zinc-500  '>Total Price : 00.00 USD </h3>



   
    </div>
  </div>


    
  );
};

Sidebar.propTypes = {
select:PropTypes.array.isRequired

};

export default Sidebar;