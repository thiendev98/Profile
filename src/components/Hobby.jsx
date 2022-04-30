import React from "react";
import "./styles/style.css";
import books from "./images/icons/books.jpg";
import it from "./images/icons/it.png";
import anime from "./images/icons/anime.jpg";
export default function Hobby() {
  const hobbyList = [
    {
      image: it,
      title: "Lập trình",
      text: "Lập trình giúp bản thân được tiếp xúc với công nghệ, kỹ thuật mới mẻ nhất sớm hơn những người ngoài ngành. Ngoài ra, còn được rèn luyện tư duy với thuật toán, học được cách làm chủ cũng như giải quyết vấn đề một cách đơn giản nhất.",
    },
    {
      image: books,
      title: "Đọc sách",
      text: " Sách chính là nguồn tri thức vô tận về mọi lĩnh vực trong cuộc sống của những người đi trước viết ra kể lại và truyền đạt cho chúng ta. Các cuốn sách về kinh tế, lịch sử, văn hóa cho ta kiến thức về kinh doanh và thực tế xã hội, về sự phát triển qua từng thời kỳ nhân loại.",
    },
    {
      image: anime,
      title: "Anime / Manga",
      text: "Xem Anime vào khoảng thời gian rảnh rỗi giúp bản thân cảm thấy thư giản hơn. Manga/anime không nên bị xem là thứ vô nghĩa, chỉ dành cho con nít hay là thuốc độc cho tâm hồn. Điều quan trọng hơn hết là bản thân chúng ta phải biết chọn lọc bộ manga/anime nào phù hợp với độ tuổi của mình và áp dụng những bài học bổ ích do manga/anime mang lại trong cuộc sống của chúng ta.",
    },
  ];
  return (
    <div id="HobbyPage">
      <div className="row container-fluid">
        {hobbyList.map((hobby) => (
          <div className="hobby--item">
            <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12">
              <img className="hobby__img" src={hobby.image} />
            </div>
            <div className="col-xl-8 col-lg-9 col-md-8 col-sm-12">
              <h4 className="hobby__title">{hobby.title}</h4>
              <p className="hobby__text">{hobby.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
