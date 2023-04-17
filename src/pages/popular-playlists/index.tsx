import MiniSongItem from "@common/MiniSongItem";
import Layout from "@layout/Layout";
import { TSlider } from "@type/public.types";

const PopularPlaylists = () => {

     const data : TSlider[] = [
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6416fdfb59d02.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/641db0fadd11c.jpg"},
          {title : "Aleki" , img : "https://cdnmrtehran.ir/media/imgtmp/6415f59163d4d.jpg"},
     ]

     return (  
          <Layout>
               <div>
                    <h3 className='text-mainColor text-2xl font-quicksand-bold text-main'>Popular Playlists.</h3>
                    <section className="w-full mt-6 h-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
                         {data.map((item,index) => (
                                  <MiniSongItem  imgSrc={item.img}  key={index} singer="Ab" title={`Injaneb - ${index +1}`}/>
                              ))
                         }
                    </section>
                    
               </div>
          </Layout>
     );
}
 
export default PopularPlaylists;