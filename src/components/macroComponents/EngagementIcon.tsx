import React from "react";
import { ThumbsUp, MessageNot, Share_06, UserPlus_02 } from "@/appIcons";

export default function EngagementIcon({ data, className }: { data: string; className?: string }) {
  if (data.startsWith("Follow social") || data.startsWith("Get Genuine People to Follow")) {
    return <UserPlus_02 className={className} />;
  } else if (data.startsWith("Like social") || data.startsWith("Get Genuine People to Like")) {
    return <ThumbsUp className={className} />;
  } else if (data.startsWith("Like and follow") || data.startsWith("Get Real People to Like and Follow")) {
    return <ThumbsUp className={className} />;
  } else if (data.startsWith("Post Comments") || data.startsWith("Get Genuine People to Comment")) {
    return <MessageNot className={className} />;
  }
}
