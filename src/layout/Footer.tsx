const Footer = () => {
     return (  
          <footer className="bg-secondBlackBg w-full flex items-center flex-col p-4 text-second mt-6 ">
               <section className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 max-w-[1600px]">
                    {/* Front-End */}
                    <div className="flex flex-col  border-b md:border-b-0 pb-6 md:pb-0 md:border-r border-secondBg">
                         <p className="font-quicksand-bold text-yellow">Front-End :</p>
                         <div className="ml-8 flex flex-col gap-y-4">
                              <p className="font-quicksand-medium text-second mt-4">Ali Hassanzadeh</p>
                              {/* Technologies */}
                              <div className="ml-8">
                                   <p className="font-quicksand-medium text-second">Technologies</p>
                                   <ul className="ml-12 flex flex-col gap-y-1">
                                        <li className="list-disc font-quicksand-light text-second mt-1">Javascript</li>
                                        <li className="list-disc font-quicksand-light text-second">NextJs</li>
                                        <li className="list-disc font-quicksand-light text-second">Typescript</li>
                                        <li className="list-disc font-quicksand-light text-second">Tailwind</li>
                                   </ul>
                              </div>
                              {/* Github */}
                              <div className="ml-8">
                                   <p className="font-quicksand-medium text-second">Github</p>
                                   <ul className="ml-12">
                                        <li className=" list-disc mt-1 w-fit cursor-pointer hover:no-underline font-quicksand-light text-second underline underline-offset-2">
                                             https://github.com/Ali-HSNZ/Music
                                        </li>
                                   </ul>
                              </div>
                              {/* Cantact Me */}
                              <div className="ml-8">
                                   <p className="font-quicksand-medium text-second">Cantact Me</p>
                                   <ul className="ml-12 flex flex-col gap-y-1">
                                        <li className="list-disc font-quicksand-light text-second mt-1">Mazandaran - Neka</li>
                                        <li className="list-disc font-quicksand-light text-second">+98 930 252 0508</li>
                                        <li className="list-disc font-quicksand-light text-second">Aliatraby@gmail.com</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    {/* Back-End */}
                    <div className="flex flex-col border-secondBg">
                         <p className="font-quicksand-bold text-yellow">Back-End :</p>
                         <div className="ml-8 flex flex-col gap-y-4">
                              <p className="font-quicksand-medium text-second mt-4">Hossein Marzban</p>
                              {/* Technologies */}
                              <div className="ml-8">
                                   <p className="font-quicksand-medium text-second">Technologies</p>
                                   <ul className="ml-12 flex flex-col gap-y-1">
                                        <li className="list-disc font-quicksand-light text-second mt-1">PHP</li>
                                        <li className="list-disc font-quicksand-light text-second">Laravel</li>
                                        <li className="list-disc font-quicksand-light text-second">MySQL</li>
                                   </ul>
                              </div>
                              {/* Github */}
                              <div className="ml-8">
                                   <p className="font-quicksand-medium text-second">Github</p>
                                   <ul className="ml-12">
                                        <li className=" list-disc mt-1 w-fit cursor-pointer hover:no-underline font-quicksand-light text-second underline underline-offset-2">
                                             Unknown
                                        </li>
                                   </ul>
                              </div>
                              {/* Cantact Me */}
                              <div className="ml-8">
                                   <p className="font-quicksand-medium text-second">Cantact Me</p>
                                   <ul className="ml-12 flex flex-col gap-y-1">
                                        <li className="list-disc font-quicksand-light text-second mt-1">Mazandaran - Neka</li>
                                        <li className="list-disc font-quicksand-light text-second">Phone Number</li>
                                        <li className="list-disc font-quicksand-light text-second">Email</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </section>
               <hr className="w-full max-w-[1600px] mt-6 border-secondBg"/>
               <div className="w-full mt-6  max-w-[1600px]">
                    <p className="font-quicksand-bold text-yellow">Musica</p>
                    <p className="font-quicksand-light text-second ml-8">
                         You can use all the services of the site, such as listening to music and podcasts, as well as creating your favorite music playlist for free.
                         Also, downloading music and podcasts and liking and bookmarking them are among the features of this site
                    </p>
               </div>
          </footer>
     );
}
 
export default Footer;