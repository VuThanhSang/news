import HotNews from "@/components/HotNews";
import News from "@/components/News";
import { Article } from "@/types";

export default function Home() {
  const articles: Article[] = [
    {
      title:
        "GAME ONLINE Ra mắt trong tháng 8, đây là những bom tấn mà các game thủ không nên bỏ lỡ",
      description:
        "Tháng 8 này hứa hẹn sẽ mang tới không ít những tựa game bom tấn, siêu phẩm dành cho người chơi.",
      thumbnails:
        "https://res.cloudinary.com/dgfsdhshs/image/upload/v1683822054/images/iquuvncq5e9eftwp0ja1.jpg",
      body: "Chi tiết bài báo",
      author: "Vũ Thanh Sang",
      tag: "Hoa đà lạt",
      publishedAt: new Date(Date.now()),
    },
    {
      title: "Tiêu đề 2",
      description: "Bài báo về hoa 2",
      body: "Chi tiết bài báo",
      tag: "Hoa đà lạt",
      thumbnails:
        "https://res.cloudinary.com/dgfsdhshs/image/upload/v1683822054/images/iquuvncq5e9eftwp0ja1.jpg",
      author: "Vũ Thanh Sang",
      publishedAt: new Date(Date.now()),
    },
  ];
  return (
    <div>
      <HotNews />
      <News articles={articles} />
    </div>
  );
}
