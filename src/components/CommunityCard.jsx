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
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { currentTheme } = useContext(themeContext);

  const commentHandler = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div
      className={`${currentTheme.card} flex flex-col gap-3 overflow-hidden relative border-slate-500 border-[1px] rounded-2xl hover:translate-y-2 transition-all duration-300 ease-linear`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-all duration-300 ease-linear"
        />
      </div>

      {/* Content */}
      <div className="py-4 px-6 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold tracking-wide">{title}</h3>
        <h4 className="flex items-center gap-2 text-lg">
          <FaLocationDot className="text-amber-400" />{" "}
          <span>{destination}</span>
        </h4>
        <p className="text-sm font-light leading-relaxed line-clamp-3">
          {description}
        </p>
        <span className="text-sm font-medium">Duration: {duration}</span>

        {/* Comment Input */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <Input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button text="Comment" onClick={commentHandler} />
        </div>

        {/* Show Comments */}
        {comments.length > 0 && (
          <div className="mt-3 space-y-2 max-h-28 overflow-y-auto">
            {comments.map((comment, i) => (
              <p
                key={i}
                className={`${currentTheme.background} ${currentTheme.text}  text-sm  px-3 py-2 rounded-lg`}
              >
                {comment}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityCard;
