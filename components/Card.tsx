import { Article } from "@/types";
import Link from "next/link";
interface Props {
  article: Article;
}
const Card = ({ article }: Props) => {
  return (
    <div>
      <h1 className="card__title--mobile w-full text-lg m-2 hidden">
        <strong>" {article.title} "</strong>
      </h1>
      <div className="card  mt-8 mb-8 w-[96%] flex ">
        <img
          src={article.thumbnails}
          alt="thumbnails"
          className="card__img w-[320px] h-[220px] rounded-xl"
        />
        <div className="w-full ml-[2%]">
          {/* tag name  */}
          <div className=" bg-blue-400 w-20 left-10 h-5 rounded-lg flex justify-center items-center">
            <p className="text-xs cursor-pointer">
              <strong> {article.tag}</strong>
            </p>
          </div>
          <Link
            href={"/details/" + article.title}
            className="card__title--pc text-base m-2  cursor-pointer"
          >
            <strong>"{article.title}"</strong>
          </Link>
          <p className="text-sm mt-3 mb-5 w-full text-gray-700">
            {article.description}
          </p>
          <div className="text-xs mt-3 flex w-full">
            <p className="cursor-pointer text-red-500 "> {article.author}</p>
            <p>- {article.publishedAt.toUTCString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
