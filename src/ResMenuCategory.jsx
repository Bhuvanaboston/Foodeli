import React, { useState } from 'react';
import ItemList from './ItemList';

const ResMenuCategory = ({
  data,
  showItem,
  setShowIndex,
  handleDoubleClck,
}) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  const handleDoubleClick = () => {
    handleDoubleClck();
  };
  return (
    <div className="w-6/12 bg-gray-50 shadow-lg p-5 m-auto my-5">
      <div
        className=" flex justify-between cursor-pointer"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span>▽</span>
      </div>
      <div className=" my-5  ">
        {showItem && <ItemList data={itemCards}></ItemList>}
      </div>
    </div>
  );
};

export default ResMenuCategory;
