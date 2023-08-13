import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardCol = ({ article }: { article: Article }) => {
  return (
    <div className="w-72">
      <Image
        width={250}
        height={190}
        src={article.thumbnails}
        alt="thumbnails"
      />
      <div className="text-[10px] mt-2 flex">
        <p className="cursor-pointer text-gray-600">
          <strong> {article.author} </strong>
        </p>
        <p className="text-gray-400 ">- {article.publishedAt.toUTCString()}</p>
      </div>
      <Link href={"/details/" + article.title} className="text-sm mt-2">
        <strong>{article.title}</strong>{" "}
      </Link>
    </div>
  );
};

export default CardCol;
