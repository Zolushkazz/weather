import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";

export const Suggestion = (props) => {
  const { city, setSelectedCity } = props;

  return (
    <div>
      {city?.map((el, index) => {
        return (
          <div
            onClick={() => setSelectedCity(el.place_name)}
            key={index}
            className="flex items-center bg-white w-[400px] h-fit text-[20px] gap-3 p-[10px] rounded"
          >
            <CiLocationOn size={20} />
            <h3 className="cursor-pointer text-wrap">{el.place_name}</h3>
          </div>
        );
      })}
    </div>
  );
};
