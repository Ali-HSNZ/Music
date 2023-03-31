import React, { ReactElement } from "react";
import Header from "@layout/Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Player from "./Player";

const Layout = (props : any) : JSX.Element => {
     return (  
          <main className='w-full flex flex-col items-center justify-center'>
               <Header/>

               <main className='mt-[81px] h-auto w-full grid grid-cols-9 gap-x-6 max-w-[1600px]'>
                    <Sidebar/>

                    {/* Main Content */}
                    <main className='px-6 col-span-7 text-second h-auto'>
                         {props.children}
                    </main>
               </main>
               <Player/>
               <Footer/>
          </main>
     );
}
 
export default Layout;