import { Article } from "@/types";
import React from "react";
import Card from "./Card";

interface Props {
  articles: Article[];
}
const News = ({ articles }: Props) => {
  return (
    <div className=" w-full flex justify-center ">
      <div
        className="
     space-x-1 mt-5 ml-[8%] "
      >
        {/* Tiêu đề  */}
        <div>
          <h3 className="text-[#4C53FC]">
            <strong> Mới cập nhật</strong>
          </h3>
          <div className="w-[95%] h-0.5 bg-red-500"></div>
        </div>
        {/* load data  */}
        <div>
          {articles.map((items) => {
            return <Card article={items} />;
          })}
        </div>
      </div>
      <div
        className="shortcut
      mt-5 mr-[10%]"
      >
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
  );
};

export default News;
