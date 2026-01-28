import { faStar as solidStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


 

export default function Rating( {rating}) {
    function getStars(position){
        if(rating >= position){
            return solidStar;

        }
        else if(rating >= position-0.5){
             return faStarHalfAlt;
        }
        else{
            return regularStar;
        }

    }
  return (
 <>
  <div className="stars text-yellow-400">
    {[1,2,3,4,5].map((position)=>(
<FontAwesomeIcon icon={getStars(position)} key={position} />
    ))}
  </div>
                            
 
 
 
 
 
 
 </>
  )
}
   