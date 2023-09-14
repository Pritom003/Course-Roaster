
import PropTypes from 'prop-types';

const List = (items) => {

const {course_name}=items.items
  return (
    <li>{course_name}</li>
  );
};

List.propTypes = {
  items:PropTypes.object.isRequired
};

export default List;