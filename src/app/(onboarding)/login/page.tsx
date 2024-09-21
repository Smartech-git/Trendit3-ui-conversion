'use Client'
import React, {useEffect} from "react";
import EmailScreen from "@/components/onboarding/EmailScreen";
import EmailConFrimationScreen from "@/components/onboarding/EmailConfirmationScreen";
import { useRouter, usePathname } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
  console.log(pathname)
  }, [pathname])
  
  return (
    <div className='size-fit'>
      <div>Login</div>
    </div>
  );
}
