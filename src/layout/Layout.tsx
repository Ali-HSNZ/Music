import Header from "@layout/Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import React from "react";

type TLayoutProps = {
     children : JSX.Element
}

const Layout : React.FunctionComponent<TLayoutProps> = ({children}) : JSX.Element => {
     return (  
          <main className='w-full flex flex-col items-center justify-center pb-28'>
               <Header/>

               <main className='h-auto w-full grid grid-cols-1 lg:grid-cols-9 gap-x-6 max-w-[1600px]'>
                    <Sidebar/>

                    {/* Main Content */}
                    <main className='px-6 col-span-7 h-auto'>
                         {children}
                    </main>
               </main>
               <Footer/>
          </main>
     );
}
 
export default Layout;