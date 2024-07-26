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

const CardBodyLeft = () => {
  return (
    <div className="columns-3xs">
      <Card className="shadow-sm">
        <CardHeader className="flex gap-3 justify-center flex-col">
          <Image
            alt="nextui logo"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={200}
            height={200}
            className="rounded-full"
            isZoomed={true}
          />
          <p>Front-end developer</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
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

export default CardBodyLeft;
