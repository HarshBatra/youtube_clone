import React, { useEffect, useState } from "react";
import { VIDEO_COMMENT_API } from "../utils/constants";
import Comment from "../components/Comment.js";

const CommentContainer = ({ vidId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const res = await fetch(VIDEO_COMMENT_API + "&videoId=" + vidId);
    const data = await res.json();
    //console.log(data);
    //console.log(data.items[0].snippet.topLevelComment.snippet.textDisplay);
    setComments(data.items);
  };

  return (
    <div className="bg-gray-100 rounded-xl p-4 w-2/3">
      <div className="font-bold text-lg text-gray-600 my-2">Comments:</div>
      <div className="flex flex-col gap-2">
        {comments?.map((comment, index) => {
          return (
            <Comment
              key={index}
              comment={comment?.snippet?.topLevelComment?.snippet?.textDisplay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentContainer;
