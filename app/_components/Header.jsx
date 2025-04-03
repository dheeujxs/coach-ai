import { Button } from "@/components/ui/button";
import { RxGithubLogo } from "react-icons/rx";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
    
    <div className="flex justify-between p-5 shadow-sm items-center">
      <div className="flex items-center gap-2">
      <Link  href={'/'}  className="flex justify-center items-center gap-2">
      <Image src={'/logo.png'} width={44} height={44} /> <span className="font-bold text-xl">Coach<span className='text-blue-700'>Ai</span></span>
      </Link>
      </div>
      <div className="flex justify-center items-center gap-10 cursor-pointer">
       <Link href={"https://github.com/dheeujxs/coach-ai" }>
         <RxGithubLogo className="text-3xl"/>
       </Link>          
      <Link href={'/dashboard'} >

      <Button variant="startButton" > Get started</Button>
      </Link>
      </div>
    </div>
    </>
  );
};

export default Header;
