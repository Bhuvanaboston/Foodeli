import { useParams } from 'react-router-dom';
import useRestaurentMenu from './Utils/useRestaurentMenu';
import Shimmer from './Shimmer';
import ResMenuCategory from './ResMenuCategory';
import { useState } from 'react';

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurentMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (restInfo === null) return;
  <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2].card.card.info;
  const { itemCards } =
    restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;
  const categories =
    restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  return (
    <>
      <div className=" m-auto p-5 text-center border border-solid-black border-spacing-4 w-6/12">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(', ')} - {costForTwoMessage}
        </p>
      </div>
      <div>
        {categories.map((category, index) => (
          //controlled component
          <ResMenuCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItem={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            handleDoubleClck={() => setShowIndex()}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurentMenu;
