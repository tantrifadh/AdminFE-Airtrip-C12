/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React from "react";
const Logo = () => {
  return (
    <Link href="/">
      <span className="inline-flex items-center justify-center h-20 w-full focus:bg-purple-500 cursor-pointer">
        <img src="airtrip-logo.png" alt="Airtrip logo" className="w-20" />
      </span>
    </Link>
  );
};

export default Logo;
