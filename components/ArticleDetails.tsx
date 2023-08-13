import { Article } from "@/types";
import Link from "next/link";
import React from "react";

const ArticleDetails = ({ article }: { article: Article }) => {
  return (
    <div>
      {" "}
      <div className="">
        <div className="w-52 h-8 text-xs rounded-xl bg-gray-400 flex  justify-center items-center text-blue-700">
          <strong>
            <p>
              FMP NEWS -{">"} {article.tag}
            </p>
          </strong>
        </div>

        <h1 className="text-3xl mt-2 xl:w-[65%] sm:w-full md:w-full">
          <strong>{article.title}</strong>{" "}
        </h1>

        <div className="mt-2 flex flex-row">
          <p className="cursor-pointer text-red-500 mr-1">{article.author} </p>
          <p> - {article.publishedAt.toUTCString()}</p>
        </div>

        <div className="flex mt-20 ">
          <div className="text-base  xl:mr-32 sm:mr-0 md:mr-0">
            <p className=" mb-5">{article.description}</p>
            <p>{article.body}</p>
          </div>

          <div className="shortcut mr-[5%]">
            <div className="w-[23vw]">
              <h3 className="text-[#4C53FC]">
                <strong> Category</strong>
              </h3>
              <div className=" h-0.5 bg-red-500"></div>
            </div>
            <ul className="mt-8 text-sm">
              <li>
                <strong> &gt; Garden</strong>
              </li>
              <li>
                <strong> &gt; Style</strong>
              </li>
              <li>
                <strong> &gt; Decor</strong>
              </li>
              <li>
                <strong> &gt; Holidays</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-10 xl:w-[65%] sm:w-full md:w-full">
          <Link href="/" className="text-lg  text-blue-700">
            {">>>"}
            <strong>
              {" "}
              Đường dẫn đến bài báo khác Đường dẫn đến bài báo khácĐường dẫn đến
              bài báo khácĐường dẫn đến bài báo khác
            </strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
