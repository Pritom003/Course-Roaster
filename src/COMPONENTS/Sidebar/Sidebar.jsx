
import PropTypes from 'prop-types';
import List from './List';

const Sidebar = ({select,totlcount,Remainingtime}) => {
  
// console.log(select)

  return (
    <div className=" md:w-1/3 w-1/2 ">
      <h3 className=' text-blue-600 text-lg font-bold'>
      Credit Hour Remaining {Remainingtime} hr
      </h3>
      <h2 className="text-4xl font-bold m-2  underline mb-2"> Course Name</h2>

    
     
      {
     select.map((items,id)=> <List key={id} items={items}></List> )

     }
      <h3 className='font-bold'>Total Credit Hour : {totlcount}hr</h3>
      <h3 className='font-bold'>Total Price :  </h3>

    </div>

    
  );
};

Sidebar.propTypes = {
select:PropTypes.array.isRequired

};

export default Sidebar;