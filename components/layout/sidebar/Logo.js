/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
const Logo = () => {
    return (
      <Link href="/" >
        <span className="inline-flex items-center justify-center h-20 w-full focus:bg-purple-500 cursor-pointer">
          <svg fill="none" viewBox="0 0 64 64" className="h-12 w-14" src="image/logo">
            <title>Company logo</title>
          </svg>
        </span>
      </Link>
    );
};

export default Logo;