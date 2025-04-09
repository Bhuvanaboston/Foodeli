import React from 'react';
import { RESMENULIST_URL } from './Utils/constants';
import { addItem } from './Utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({ data }) => {
  const Dispatch = useDispatch();

  const handleAddIem = (d) => {
    //Dispatch action
    Dispatch(addItem(d));
  };
  return (
    <div>
      {console.log('Dataset: ' + data)}
      {data.map((d) => (
        <div
          className=" border-b-2  border-gray-200 p-4 m-4  "
          key={d?.card?.info?.name}
        >
          <div className=" flex justify-between font-bold">
            <div>
              <span className="mr-5"> {d?.card?.info?.name} </span>
              <span>
                ₹.
                {d?.card?.info?.price
                  ? d?.card?.info?.price / 100
                  : d?.card?.info?.defaultPrice / 100}
              </span>
              {d?.card?.info?.ratings?.aggregatedRating?.rating ? (
                <p className="my-2">
                  ⭐{d?.card?.info?.ratings?.aggregatedRating?.rating}(
                  {d?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </p>
              ) : (
                console.log('')
              )}

              <p className=" m-2 text-gray-600 text-xs ">
                {d?.card?.info?.description}
              </p>
            </div>
            <div>
              {d?.card?.info?.imageId ? (
                <div className=" flex justify-center  place-items-end">
                  <img
                    className="w-32 rounded-lg"
                    src={RESMENULIST_URL + d?.card?.info?.imageId}
                  ></img>{' '}
                  <button
                    className=" absolute  text-xl  px-4 font-bold text-green-800  bg-white rounded-xl 
                  border border-4 border-solid-green-800 "
                    onClick={() => handleAddIem(d)}
                  >
                    ADD +
                  </button>
                </div>
              ) : (
                <button
                  className="px-4 text-xl font-bold text-green-800 rounded-xl border border-4 border-solid-green-800"
                  onClick={() => handleAddIem(d)}
                >
                  ADD +
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
