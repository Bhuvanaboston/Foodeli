import { CLOUD_URL } from './Utils/constants';
import { useContext, useEffect } from 'react';
import UserContext from './Utils/UserContext';

const ResCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    slaString,
    costForTwo,
  } = props.resData?.info;

  return (
    <div
      data-testid="resCard"
      className="resCard m-4 p-4 w-[250px] h-[600px] bg-pink-50 rounded-lg shadow-lg hover:bg-red-900"
    >
      <img
        className="h-[300px] rounded-lg"
        src={CLOUD_URL + cloudinaryImageId}
      ></img>
      <div className="m-4 p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{slaString}</h4>
        <h4 className="font-bold">{costForTwo}</h4>
      </div>
    </div>
  );
};

//Higher Order Component
//input- ResCard optput- ResCard that is aggregatedDiscountInfoV3

export const withAggregatedDiscount = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
