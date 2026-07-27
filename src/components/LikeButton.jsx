import React from "react";
import { AiOutlineLike } from "react-icons/ai";

function LikeButton({ onClick }) {
    return (
        <div>
            <AiOutlineLike size="24px" color="blue" className="likeBtn" onClick={onClick} />
        </div>
    );
}

export default LikeButton;