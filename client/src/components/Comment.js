const Comment = ({ comment }) => {
  return (
    <div className="px-4 py-2 bg-gray-300 text-gray-600 rounded-xl w-fit">
      {comment}
    </div>
  );
};

export default Comment;
