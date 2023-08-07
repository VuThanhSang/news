import { Article } from "@/types";

const article: Article = {
  title:
    "Vừa ra mắt, bom tấn đã chứng kiến 'hiện tượng lạ', game thủ tự tăng gấp đôi số nhân vật",
  description:
    "Vừa ra mắt, bom tấn đã chứng kiến 'hiện tượng lạ', game thủ tự tăng gấp đôi số nhân vật",
  thumbnails:
    "https://res.cloudinary.com/dgfsdhshs/image/upload/v1683822054/images/iquuvncq5e9eftwp0ja1.jpg",
  body: "Ở thời điểm hiện tại, Baldur's Gate 3 dù mới ra mắt nhưng đang là một trong những tựa game có sức hút lớn nhất. Dựa theo các thống kê mới nhất, trò chơi này đang chứng kiến số lượng người chơi tăng mạnh, thậm chí vượt mặt nhiều ông lớn khi sở hữu cho mình tới hơn 500.000 người chơi ở cùng một thời điểm. Thế nhưng, cũng vì nhận được nhiều sự chú ý như vậy mà dẫu cho mới xuất hiện được vài ngày, Baldur's Gate 3 đã xuất hiện những sự 'sáng tạo' mới đầy lạ lùng từ phía người chơi. Vừa ra mắt, bom tấn đã chứng kiến &quot;hiện tượng lạ&quot;, game thủ tự tăng gấp đôi số nhân vật - Ảnh 1. Mỗi đội nhóm trong Baldur's Gate 3 thường chỉ có tối đa 4 nhân vật Cụ thể, trong Baldur's Gate 3, người chơi sẽ có tổng cộng 4 nhân vật cùng lúc trong nhóm của mình và đôi khi, việc quyết định ai là người ở lại trong hành trình khám phá thế giới bí ẩn này cũng gây ra nhiều sự khó khăn. Tuy vậy, những đau đầu ấy của các game thủ giờ đây đã chấm dứt, sau khi một bản mod được hoàn thành. Theo đó, bản mod mang tên Party Limit Begone đang được chia sẻ rất nhiều này sẽ cho phép người chơi có tối đa 8 nhân vật trong nhóm của mình, thay vì chỉ 4 như trước. Phiên bản này đã được nhiều người chơi cài đặt và khẳng định đang vận hành một cách hoàn hảo. Vừa ra mắt, bom tấn đã chứng kiến &quot;hiện tượng lạ&quot;, game thủ tự tăng gấp đôi số nhân vật - Ảnh 2. Nhưng con số này có thể tăng lên gâp đôi nhờ một bản mod Đây chắc chắn là một lợi thế rất lớn cho những người chơi Baldur's Gate 3, khi việc có thể mang theo tới 8 nhân vật sẽ khiến các cuộc chiến trở nên dễ dàng hơn rất nhiều. Tuy nhiên, hạn chế của bản mod nằm ở chỗ người chơi chỉ có thể áp dụng nó ở chế độ Single Player và không thể sử dụng trong co-op. Tuy nhiên rất có thể trong tương lai, một giải pháp tương tự cho chế độ co-op sẽ xuất hiện. Bên cạnh đó, với việc Baldur's Gate 3 mới chỉ ra mắt được vài ngày, bản mod này hoàn toàn có thể gây rối hoặc làm hỏng các tệp lưu trữ của người chơi. Thế nên, lời khuyên tốt nhất vẫn là nên sao lưu các tệp tin trước khi thực hành với bản mod này. Vừa ra mắt, bom tấn đã chứng kiến &quot;hiện tượng lạ&quot;, game thủ tự tăng gấp đôi số nhân vật - Ảnh 3. Trò chơi hiện vẫn đang nhận được vô số sự chú ý Hiện tại, Baldur's Gate 3 vẫn đang nhận được vô số sự chú ý từ phía các game thủ. Bên cạnh số lượng người chơi, doanh số của tựa game cũng đang tăng mạnh và dần dần trở thành một trong những ứng cử viên nặng ký cho danh hiệu Game of the Year.",
  author: "Vũ Thanh Sang",
  tag: "Hoa đà lạt",
  publishedAt: new Date(Date.now()),
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="ml-[8%] mt-7">
      {/*content*/}
      <div className="xl:w-[70%] sm:w-full md:w-full">
        <div className="w-52 h-8 text-xs rounded-xl bg-gray-400 flex  justify-center items-center text-blue-700">
          <strong>
            <p>
              FMP NEWS -{">"} {article.tag}
            </p>
          </strong>
        </div>

        <h1 className="text-3xl mt-2">
          <strong>{article.title}</strong>{" "}
        </h1>

        <div className="mt-2 flex flex-row">
          <p className="cursor-pointer text-red-500 mr-1">{article.author} </p>
          <p> - {article.publishedAt.toUTCString()}</p>
        </div>

        <div className="mt-20 text-base">{article.body}</div>
      </div>
    </div>
  );
}
