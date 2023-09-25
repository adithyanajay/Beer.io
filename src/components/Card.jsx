import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ name, image, first_brewed, tagline, id }) {
  const navigate = useNavigate();
  const itemDetail = (item_id) => {
    navigate(`/item-detail`, { state: { id: item_id } });
  };
  return (
    <div
      className="card flex flex-col justify-center items-center max-w-xs px-5 py-5 bg-white shadow-md rounded-md cursor-pointer hover:scale-105"
      id={`${id}`}
      onClick={() => {
        itemDetail(id);
      }}
    >
      <div className="img-cont mb-2">
        <img src={image} alt="image" className="w-auto h-32 md:h-60" />
      </div>

      <h2 className="text-base md:text-lg font-semibold ">{name}</h2>
      <div className="content w-full text-left mt-5">
        <p className="text-sm text-gray-800 md:text-base">{tagline}</p>
        <p className="text-sm text-gray-800 md:text-base">
          First brewed: {first_brewed}
        </p>
      </div>
    </div>
  );
}

export default Card;
