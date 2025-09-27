import React, { useContext, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { FaLocationDot } from "react-icons/fa6";
import themeContext from "@/context/themeContext";

const CommunityCard = ({
  image,
  duration,
  title,
  destination,
  description,
}) => {
  const [comment, setComments] = useState("");
  const commentHandler = () => {};
  const { currentTheme } = useContext(themeContext);
  return (
    <div
      className={`${currentTheme.card} flex flex-col gap-3 overflow-hidden relative border-slate-500 border-[1px] rounded-2xl  hover:translate-y-2 transition-all duration-300 ease-linear`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:translate-y-0.5 transition-all duration-300 ease-linear"
        />
      </div>
      <div className="py-4 px-8 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold tracking-wide">{title}</h3>
        <h4 className="flex items-center gap-2 text-lg">
          <FaLocationDot className="text-amber-400" />{" "}
          <span>{destination}</span>
        </h4>
        <p className="text-sm font-light leading-relaxed line-clamp-3">
          {description}
        </p>
        <span>
          Duration: {duration}
        </span>
        <div className="flex justify-center items-center gap-2">
          <Input
            type="text"
            placeholder={"Comments"}
            value={comment}
            onChange={(e) => setComments(e.target.value)}
          />
          <Button text={"Comment"} onClick={commentHandler} />
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
