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
import { useTranslations } from "next-intl";

const CardBodyRight = () => {
  const t = useTranslations("CardBodyRight");
  const tx = useTranslations("CardBodyRight.Card");

  return (
    <div className="w-full">
      <div className="border-b-1">
        <p className="text-2xl text-center">{t("title")}</p>
        <ul className="list">
          <li>
            Phone :{" "}
            <a href="#" className="text-[#50d71e]">
              0976897134
            </a>
          </li>
          <li>
            Email :{" "}
            <a href="#" className="text-[#50d71e]">
              0976897134
            </a>
          </li>
          <li>
            Facebook :{" "}
            <a href="#" className="text-[#50d71e]">
              0976897134
            </a>
          </li>
          <li>
            Youtube :{" "}
            <a href="#" className="text-[#50d71e]">
              0976897134
            </a>
          </li>
        </ul>
      </div>
      <Card className="p-5 mt-5">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{tx("title")}</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{tx("a")}</p>
          <p>{tx("b")}</p>
          <p>{tx("c")}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardBodyRight;
