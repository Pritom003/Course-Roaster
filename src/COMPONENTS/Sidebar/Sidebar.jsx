
import PropTypes from 'prop-types';
import List from './List';

const Sidebar = ({select}) => {
  
// console.log(select)

  return (
    <div className=" md:w-1/3 w-1/2">
      <h2 className="text-4xl font-bold"> Course Name</h2>

    
      {/* {
     select.map((items)=> <li>{items.course_name} </li> )

     } */}
      {
     select.map((items,id)=> <List key={id} items={items}></List> )

     }

    </div>

    
  );
};

Sidebar.propTypes = {
select:PropTypes.array.isRequired
};

export default Sidebar;