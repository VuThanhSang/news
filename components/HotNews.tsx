import Image from "next/image";

const HotNews = () => {
  return (
    <div className="w-10/12 flex space-x-1 mt-5 ml-28">
      {/* thẻ to nhất  */}
      <div className=" relative w-[570px] h-[450px] overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none text-white">
        {/* Thông tin bài báo */}
        <div className="relative z-10 top-5 bg-blue-400 w-14 left-10 h-5 rounded-lg flex justify-center items-center">
          <p className="text-xs cursor-pointer">
            <strong> Tag</strong>
          </p>
        </div>
        <div className="relative z-10 top-[70%] left-10">
          <p className="text-base mb-2 cursor-pointer">Tác giả</p>
          <h1 className="text-4xl cursor-pointer">
            <strong> Tiêu đề của bài báo </strong>
          </h1>
        </div>
        <div className="absolute top-0 to-bg-black-10 w-[570px] h-[450px] bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div>
        {/* thẻ 2 */}
        <div className="relative text-white  w-[510px] h-[220px] overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center  shadow-none">
          {/* Thông tin bài báo */}
          <div className="relative z-10 top-5 bg-blue-400 w-14 left-10 h-5 rounded-lg flex justify-center items-center">
            <p className="text-xs cursor-pointer">
              <strong> Tag</strong>
            </p>
          </div>
          <div className="relative z-10 top-[55%] left-10">
            <p className="text-base mb-2 cursor-pointer">Tác giả</p>
            <h1 className="text-xl cursor-pointer">
              <strong> Tiêu đề của bài báo </strong>
            </h1>
          </div>
          <div className="absolute top-0 to-bg-black-10 w-[510px] h-[220px] bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        {/* 2 thẻ còn lại */}
        <div className="flex mt-2">
          <div className="relative text-white w-[250px] mr-2 h-[220px] overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center  shadow-none">
            {/* Thông tin bài báo */}
            <div className="relative z-10 top-5 bg-blue-400 w-14 left-10 h-5 rounded-lg flex justify-center items-center">
              <p className="text-xs cursor-pointer">
                <strong> Tag</strong>
              </p>
            </div>
            <div className="relative z-10 top-[55%] left-10">
              <p className="text-base mb-2 cursor-pointer">Tác giả</p>
              <h1 className="text-base cursor-pointer">
                <strong> Tiêu đề của bài báo </strong>
              </h1>
            </div>
            <div className="absolute top-0 to-bg-black-10 w-[510px] h-[220px] bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative text-white w-[250px] h-[220px] overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center  shadow-none">
            {/* Thông tin bài báo */}
            <div className="relative z-10 top-5 bg-blue-400 w-14 left-10 h-5 rounded-lg flex justify-center items-center">
              <p className="text-base cursor-pointer">
                <strong> Tag</strong>
              </p>
            </div>
            <div className="relative z-10 top-[55%] left-10">
              <p className="text-base mb-2 cursor-pointer">Tác giả</p>
              <h1 className="text-base cursor-pointer">
                <strong> Tiêu đề của bài báo </strong>
              </h1>
            </div>
            <div className="absolute top-0 to-bg-black-10 w-[510px] h-[220px] bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotNews;
