
import PropTypes from 'prop-types';

const List = (items) => {

const {course_name}=items.items
  return (
    <li className=' mt-4 mb-4 m-4 list-decimal'>{course_name}</li>
  );
};

List.propTypes = {
  items:PropTypes.object.isRequired
};

export default List;