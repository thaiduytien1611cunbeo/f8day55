import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import CardBodyContent from "./CardBody/CardBodyContent";

export default function App() {
  return (
    <Card>
      <CardHeader className="flex gap-3 justify-center">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <p className="text-lg font-bold">Fullstack.edu.vn F8</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <CardBodyContent />
      </CardBody>
      <Divider />
      <CardFooter className="flex gap-3 justify-center flex-col">
        <p className="font-bold text-lg">Sở thích cá nhân</p>
        <ul className="list-disc">
          <li>
            Thưởng Thức Nhạc Nhẹ, Nhạc Rap Của Đen Vâu Và Các Nghệ Sĩ Khác,…
          </li>
          <li>
            Đọc Sách, Học Hỏi Thêm Về Các Ngôn Ngữ Lập Trình Mới Mẻ. Hiện Tại,
            Tôi Đang Tự Học Python`
          </li>
          <li>
            Theo Dõi Các Xu Hướng Công Nghệ, Tin Tức Về Các Sản Phẩm Nổi Tiếng
            Như Iphone, Huawei, GoogleAI,…
          </li>
        </ul>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          © 2024 Fullstack.edu.vn F8. All rights reserved.
        </Link>
      </CardFooter>
    </Card>
  );
}
