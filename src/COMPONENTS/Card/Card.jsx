
import PropTypes from 'prop-types';
import { IoLogoUsd} from "react-icons/io";
import { IoIosBook} from "react-icons/io";


const Card = ({blog, handleselection}) => {
  const {cover_image ,price, course_name,course_details,credit}=blog

  return (
    <div className=' m-6'>
      
     
      <div >

    
<div className="card  lg:w-52 lg:mr-6 bg-base-100 shadow-xl">
  <figure><img src={cover_image} alt="COVER PHOTO" /></figure>
  <div>
  <div className="card-body p-2">
    <h2 className="font-semibold lg:h-10 md:font-bold">{course_name}</h2>
    <p className='md:h-24'>{course_details}</p>

    <div className=' md:flex sm:grid sm:grid-cols-1 '>
    <p className='flex justify-center items-center  align-middle'> <IoLogoUsd></IoLogoUsd> price: {price}</p>
      <p className='flex justify-center items-center align-middle'> <IoIosBook></IoIosBook>Credit:{credit}</p>
    </div>

    <div className="card-actions justify-center w-full">
      <button 
      onClick={()=>handleselection(blog)}
      
      className="border-solid bg-sky-600 w-full rounded-md text-white">Select</button>
    </div>
  </div>

  </div>
</div>


      </div>

    </div>
  );
};

Card.propTypes = {
  blog:PropTypes.object.isRequired,
  handleselection:PropTypes.func
};

export default Card;