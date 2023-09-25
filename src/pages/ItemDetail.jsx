import React from "react";
import { useLocation } from "react-router-dom";

function ItemDetail({ data }) {
  const location = useLocation();
  console.log(location.state.id);
  const selectedItem = data.find((item) => {
    return item.id == location.state.id;
  });

  return (
    <div className="w-full min-h-full flex flex-col sm:flex-row items-center justify-around pt-10 px-5">
      <div className="img-cont w-24 md:w-1/12 max-w-xs mb-5">
        <img src={selectedItem.image_url} alt="" className="w-full" />
      </div>
      <div className="content w-full md:w-1/3">
        <h1 className="font-bold text-2xl md:text-4xl mb-5">
          {selectedItem.name}
        </h1>
        <h3 className="font-semi bold text-lg md:text-xl">
          {selectedItem.description}
        </h3>
      </div>
    </div>
  );
}

export default ItemDetail;
