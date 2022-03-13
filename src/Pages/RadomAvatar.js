import React from "react";
import {
  UserIcon,
  BadgeCheckIcon,
  ColorSwatchIcon,
  EmojiHappyIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";

const RadomAvatar = () => {
  function randomAvatar() {
    let users = [
      UserIcon,
      BadgeCheckIcon,
      ColorSwatchIcon,
      EmojiHappyIcon,
      LightBulbIcon,
    ];
    return users[Math.floor(Math.random() * users.length)];
  }
  return <div>RadomAvatar</div>;
};

export default RadomAvatar;
