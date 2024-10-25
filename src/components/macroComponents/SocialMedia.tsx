import React from "react";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google, Whatsapp, Threads } from "@/svgAssets";

export default function SocialMedia({ platform, className }: { platform: any; className: string }) {
  if (platform === "facebook") {
    return <Facebook className={className} />;
  } else if (platform === "x") {
    return <X className={className} />;
  } else if (platform === "tiktok") {
    return <TikTok className={className} />;
  } else if (platform === "instagram") {
    return <Instagram className={className} />;
  } else if (platform === "youtube") {
    return <Youtube className={className} />;
  } else if (platform === "telegram") {
    return <Telegram className={className} />;
  } else if (platform === "google") {
    return <Google className={className} />;
  } else if (platform === "whatsapp") {
    return <Whatsapp className={className} />;
  } else if (platform === "threads") {
    return <Threads className={className} />;
  } else {
    return <div></div>;
  }
}
