const Comment = ({ comment }) => {
  return (
    <div className="px-4 py-2 bg-gray-300 text-gray-600 rounded-xl w-full text-wrap text-xs md:text-base">
      {comment}
    </div>
  );
};

export default Comment;
