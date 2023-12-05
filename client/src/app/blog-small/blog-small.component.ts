
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-blog-small',
  templateUrl: './blog-small.component.html',
  styleUrls: ['./blog-small.component.css']
})
export class BlogSmallComponent {
  @Input() small: { title: string; summary: string; image: string; }[] = [
    
    {
      title: "Mùa xuân nở rộ",
      summary: "Mùa xuân là thời điểm lý tưởng để thêm một chút sức sống vào ngôi nhà của bạn bằng cách ...",
      image: "image-blog-1.1.png"
    },
    {
      title: "Màu xanh đón hè về",
      summary: "Mùa hè đem lại ánh nắng sáng rực rỡ, nhiệt độ cao, và nhiều hoạt động ngoài trời thú vị ...",
      image: "image-blog-1.2.png"
    },
    {
      title: "Vẻ đẹp của mùa thu",
      summary: "Mùa thu là một trong những thời điểm đẹp nhất của năm, khi thiên nhiên biến đổi ...",
      image: "image-blog-1.3.png"
    },
    {
      title: "Căn nhà xanh trong mơ",
      summary: "Khi cuộc sống ngày càng hiện đại và nơi ở trở nên chật chội, việc tạo ra ...",
      image: "image-blog-2.1.png"
    },
    {
      title: "Chuyển hướng phong cách sống",
      summary: "Khi cuộc sống ngày càng hiện đại và nơi ở trở nên chật chội, việc tạo ra ...",
      image: "image-blog-2.2.png"
    },
    {
      title: "Tạo không gian sống xanh cùng INDOFA",
      summary: "Chào mừng các tín đồ cây cảnh và người yêu thiên nhiên đến với INDOFA!",
      image: "image-blog-2.3.png"
    },
    {
      title: "Tìm về chốn bình yên",
      summary: "Trong thế giới ồn ào và hối hả của cuộc sống hiện đại, tôi tìm thấy một ...",
      image: "image-blog-3.1.png"
    },
    {
      title: "Món quà yêu thương",
      summary: "Cuộc sống thường xuyên đưa chúng ta vào những cuộc đua vội vã của ...",
      image: "image-blog-3.2.png"
    },
    {
      title: "Cơn gió mùa hè",
      summary: "Trong mùa hè oi bức, một cơn gió thoảng qua căn nhà nhỏ ...",
      image: "image-blog-3.3.png"
    }
  ];
  
}