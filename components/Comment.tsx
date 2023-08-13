import { StarIcon } from "@heroicons/react/outline";
import React from "react";

const Comment = () => {
  return (
    <div className="xl:w-[55%] sm:w-full md:w-full">
      <div className="flex justify-center space-x-5 ">
        <StarIcon className="w-5 h-5 fill-yellow-500" />
        <StarIcon className="w-5 h-5 fill-yellow-500" />
        <StarIcon className="w-5 h-5 fill-yellow-500" />
        <StarIcon className="w-5 h-5 fill-yellow-500" />
        <StarIcon className="w-5 h-5 fill-yellow-500" />
      </div>
      <div>
        <h3 className="text-red-500">
          <strong> Nêu ý kiến</strong>
        </h3>
        <div className="p-10 flex justify-center">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            className="w-10 h-10 rounded-full mr-5"
            alt="Avatar"
          />

          <div className="w-96">
            <div className="relative w-full min-w-[200px]">
              <textarea
                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-gray-700  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700   "
                placeholder="Nêu ý kiến của bạn ......."
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        {/* comment của người khác loop ở đây  */}
        <div className="p-10 flex flex-col justify-center">
          <div className="flex items-center  text-xs">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              className="w-8 h-8 rounded-full mr-2"
              alt="Avatar"
            />
            <p className="mr-10">
              <strong>zimb240</strong>
            </p>
            <p> 1 month ago</p>
          </div>
          <div className="mt-5  ml-10 w-full text-gray-600">
            Bình luận của một người nào đó về một vấn đề nào đó và vấn đề đó
            thực sự là một cái gì đó
          </div>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <div className="flex items-center  text-xs">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              className="w-8 h-8 rounded-full mr-2"
              alt="Avatar"
            />
            <p className="mr-10">
              <strong>zimb240</strong>
            </p>
            <p> 1 month ago</p>
          </div>
          <div className="mt-5  ml-10 w-full text-gray-600">
            Bình luận của một người nào đó về một vấn đề nào đó và vấn đề đó
            thực sự là một cái gì đó
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
