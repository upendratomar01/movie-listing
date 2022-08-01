import React from "react";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  CollectionIcon,
  UserIcon,
  HashtagIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="flex flex-col items-center justify-between flex-wrap sm:flex-row p-4">
        <div className="flex justify-center whitespace-nowrap">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="TOP HASHTAGS" Icon={HashtagIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <div>
          <Image src="/logo.png" height={50} width={150} alt="logo" />
        </div>
      </div>
      <Navbar />
    </>
  );
}
