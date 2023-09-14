
import PropTypes from 'prop-types';

const List = (items) => {

const {course_name}=items.items
  return (
    <li className=' bg-slate-500 mt-4 mb-4'>{course_name}</li>
  );
};

List.propTypes = {
  items:PropTypes.object.isRequired
};

export default List;