import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const FeedCard = () => {
  const data = {
    author: {
      firstName: "John",
      lastName: "Doe",
      profileImageURL: "https://i.ibb.co/4RLgD3K/dead.jpg",
      id: "123",
    },
    content: "This is a sample tweet content for the UI demo!",
    imageURL: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  };

  return (
    <div className="border-b border-gray-300 p-4 max-w-lg mx-auto hover:bg-slate-100 transition-all cursor-pointer rounded-lg">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img
            className="rounded-full w-12 h-12 object-cover"
            src={data.author.profileImageURL}
            alt={data.author.firstName}
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col space-y-2">
            <h5 className="font-semibold text-sm sm:text-base">
              <Link to={`/${data.author.id}`} className="hover:underline">
                {data.author.firstName} {data.author.lastName}
              </Link>
            </h5>

            <p className="text-sm sm:text-base">{data.content}</p>

            {data.imageURL && (
              <img
                src={data.imageURL}
                alt="tweet"
                className="mt-2 rounded-lg max-w-full h-auto object-cover"
              />
            )}

            <div className="flex justify-between mt-3 text-gray-500 items-center text-lg">
              <div className="hover:text-blue-500 transition-colors">
                <BiMessageRounded />
              </div>
              <div className="hover:text-green-500 transition-colors">
                <FaRetweet />
              </div>
              <div className="hover:text-red-500 transition-colors">
                <AiOutlineHeart />
              </div>
              <div className="hover:text-gray-700 transition-colors">
                <BiUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
