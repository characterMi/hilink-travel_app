"use client";
import Image from "next/image";
import { ComponentProps } from "react";

const ToggleButton: React.FC<ComponentProps<"img">> = ({ className }) => {
  return (
    <Image
      src="/hilink-travel_app/menu.svg"
      alt="menu"
      width={32}
      height={32}
      className={className}
      onClick={() =>
        document.querySelector(".xs-menu")?.classList.toggle("active")
      }
    />
  );
};

export default ToggleButton;
