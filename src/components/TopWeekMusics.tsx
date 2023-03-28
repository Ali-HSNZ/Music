const TopWeekMusics = () => {
     return (  
          <section className='w-full overflow-hidden mt-8'>
                    <h3 className='text-mainColor text-2xl font-quicksand-bold'>Top Week Musics.</h3>

                    <section className="w-full">
                         <div className="w-full mt-4 grid grid-cols-7">
                              <span className="font-quicksand-medium">Su</span>
                              <span className="font-quicksand-medium">Mo</span>
                              <span className="font-quicksand-medium">Tu</span>
                              <span className="font-quicksand-medium">We</span>
                              <span className="font-quicksand-medium">Th</span>
                              <span className="font-quicksand-medium">Fr</span>
                              <span className="font-quicksand-medium">Sa</span>
                         </div>
                         <hr className="border-second mt-2"/>
                         <div className="w-full mt-4 grid grid-cols-7 gap-4">
                              {["Su","Mo","Tu","We","Th","Fr","Sa"].map((item)=> (
                                   <article className={`w-full flex flex-col items-center border border-secondBg rounded-md p-2`}>
                                        {/* <img className="w-auto rounded-lg" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/> */}
                                        <p className="font-quicksand-regular">{item} - ye rooze khoob miad!</p>
                                   </article>
                              ))}
                         </div>

                    </section>
               

          </section>
     );
}
 
export default TopWeekMusics;