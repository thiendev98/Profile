import React from "react";
export default function Target() {
  var shorts = [
    {
      key: 1,
      content:
        "Rèn luyện bản thân, tích cực học tập, tham gia các hoạt động phong trào do trường, khoa tổ chức.",
    },
    {
      key: 2,
      content: "Cũng cố các kiến thức nền tảng về HTML, CSS, JavaScript.",
    },
    {
      key: 3,
      content: "Tìm hiểu thêm kiến thức nâng cao về HTML, CSS, JavaScript.",
    },
    {
      key: 4,
      content:
        "Ôn tập, tìm hiểu thêm các tính năng của Bootstrap, Jquery, ReactJS.",
    },
    {
      key: 5,
      content:
        "Tìm được nơi thực tập phù hợp với bản thân để có thể học hỏi kinh nghiệm từ những anh, chị đi trước.",
    },
  ];
  var longs = [
    {
      key: 1,
      content: "Học cách sử dụng nền tảng (Platform) Nodejs.",
    },
    {
      key: 2,
      content: "Ôn tập, tìm hiểu thêm kiến về ngôn ngữ PHP.",
    },
    {
      key: 3,
      content: "Hướng tới mục tiêu trở thành lập trình viên Fullstack.",
    },
  ];
  const targets = [
    {
      title: "Mục tiêu ngắn hạn",
      target: shorts,
    },
    {
      title: "Mục tiêu lâu dài",
      target: longs,
    },
  ];
  return (
    <div id="TargetPage">
      {targets.map((target, index) => (
        <div className="target--item">
          <h4 className="target__title">{target.title}</h4>
          {target.target.map((t) => (
            <p className="target__content">{t.content}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
