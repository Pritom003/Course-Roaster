
import PropTypes from 'prop-types';
import { IoLogoUsd} from "react-icons/io";
import { IoIosBook} from "react-icons/io";


const Card = ({blog, handleselection}) => {
  const {cover_image ,price, course_name,course_details,credit}=blog

  return (
    <div className='md:w-2/3 w-1/2 mx-auto m-6'>
      
     
      <div >

      {/* <div className="card  bg-base-100 shadow-xl">
  <figure className="px-2 pt-4">
    <img src={cover_image} alt="cover phote" className="rounded-xl w-fit" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{course_name}</h2>
    <p>{course_details}</p>
   <div className='flex gap-8'>

   <button>
    {credit}
    </button> 
   <button>
    {price}
    </button> 
   </div>



    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}
<div className="card bg-base-100 shadow-xl">
  <figure><img src={cover_image} alt="COVER PHOTO" /></figure>
  <div>
  <div className="card-body p-2">
    <h2 className="font-semibold md:font-bold">{course_name}</h2>
    <p>{course_details}</p>

    <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'>
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