import Image from "next/image";
import Link from "next/link";

import Logo from "../public/hilink-logo.svg";
import { NAV_LINKS } from "@/constants";
import { Button, ToggleButton } from ".";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="text-gray-50 regular-16 flexCenter pb-1.5 transition-all hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          title="LOGIN"
          type="button"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <ToggleButton className="inline-block cursor-pointer lg:hidden z-50" />

      <ul className="flex flex-col xs-menu duration-200 bg-black p-10 absolute top-20 rounded-bl-3xl rounded-tl-3xl translate-x-[100%] right-0 gap-12 lg:hidden after:content-[''] after:h-[50px] after:w-[50px] after:absolute after:bg-transparent after:top-[-50px] after:rounded-br-[100vh] after:shadow-[10px_10px_0_10px_black] after:right-0 before:content-[''] before:h-[50px] before:w-[50px] before:absolute before:bg-transparent before:bottom-[-50px] before:rounded-tr-[100vh] before:shadow-[10px_-10px_0_10px_black] before:right-0">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="text-gray-50 regular-16 flexCenter pb-1.5 transition-all hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <div className="hidden lg:flexCenter">
          <Button
            title="LOGIN"
            type="button"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
