import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  image,
  alt,
  href = "#",
  category = "category",
  title = "Title",
  summary = "lorem lorem lorem lorem lorem",
}) => {
  const url = `/blog/${href}`;

  return (
    <Link href={url}>
      <article className=" flex flex-col gap-3 brightness-100 hover:brightness-110">
        <div className="relative w-full aspect-square">
          <Image src={image} fill className="object-cover" alt={alt}></Image>
        </div>
        <p className="text-sm text-[#C4C4C2]">{category}</p>
        <h3>{title}</h3>
        <p className="hidden lg:block">{summary}</p>
      </article>
    </Link>
  );
};

export default Card;
