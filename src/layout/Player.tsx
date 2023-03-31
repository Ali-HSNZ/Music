import Slider from '@mui/material/Slider';

import {FaPlay , FaPause} from 'react-icons/fa'
import {GiNextButton , GiPreviousButton} from 'react-icons/gi'
import {TiArrowShuffle} from 'react-icons/ti'
import {RiRepeatOneLine} from 'react-icons/ri'

import React , {useRef , useState} from 'react'

const Player = () => {
     
     const audioRef = useRef<any>()
     const [isPlaying , setIsPlaying] = useState<boolean>(false) 
     const [isShuffle , setIsShuffle] = useState<boolean>(false) 
     const [isMuted , setIsMuted] = useState<boolean>(false) 
     const [isRepeatOne , setIsRepeatOne] = useState<boolean>(false) 

     const [volume, setVolume] = useState<any>(100); // initial volume value is 100
     const [cloneVolume, setCloneVolume] = useState<any>(volume); // initial volume value is 100

     const changeVolumeHandler = (event : any) => {
          const inputValue : number = event.target.value;
          setVolume(inputValue);
          setIsMuted(false)
          inputValue !== 0 && setCloneVolume(inputValue)
          audioRef.current.volume = inputValue/100;
     }
     
     const [songInfo , setSongInfo] = useState<object | any>({
          currentTime : null,
          duration : null
     })

     
     const playSong = () : void => {
          if(isPlaying){
               audioRef.current.pause();
               setIsPlaying(false)
          }else{
               audioRef.current.play();
               setIsPlaying(true)
          }
     }

     const timeUpdateHandler = (e : any) : void => {
          const currentTime = e.target.currentTime;
          const duration = e.target.duration; // End Time of Audio
          if(currentTime === duration && isPlaying && isRepeatOne){
               setIsPlaying(true)
               setSongInfo({...songInfo , currentTime : 0 })
               audioRef.current.play()

          }else if(currentTime === duration && !isRepeatOne){
               setIsPlaying(false)
               setSongInfo({...songInfo , currentTime })
               audioRef.current.pause()
          }
          else{
               setSongInfo({...songInfo , currentTime , duration})
          }
     }
     // For Change/Move Input Value - Audio
     const dragHandler = (e : any) : void => {
          const currentTime = e.target.value 
          audioRef.current.currentTime = currentTime
          setSongInfo({...songInfo , currentTime })
     }

     const mutedAudio = () : void => {
          if(isMuted){
               setVolume(cloneVolume)
               audioRef.current.volume = cloneVolume / 100
               setIsMuted(false)
          }else{
               setVolume(0)
               audioRef.current.volume = 0
               setIsMuted(true)
          }
     }
     
     
     return (  
          <section className="fixed px-6 border-t-2  border-secondBg  bottom-0 left-0 right-0 bg-secondBlackBg z-50 ">
               <Slider 
                    defaultValue={0}
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    className={'mt-1'}
                    sx={{
                         color: '#FACD66',
                         '& .MuiSlider-track': {border: 'none',},
                         '& .MuiSlider-thumb': {
                              width: 0,
                              height: 0,
                              '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                   boxShadow: 'none',
                              },
                         },
                    }}
               />
               <audio
                    onLoadedMetadata={timeUpdateHandler}
                    onTimeUpdate={timeUpdateHandler}
                    ref={audioRef}
                    src='https://cdnmrtehran.ir/media/mp3s/01/e2f27975d4_776e1088072af0fa6399a62cf92621f3.mp3'
               />
               <section className='w-full flex justify-between pb-4'>
                    {/* IMG And Music Title */}
                    <div className="flex gap-x-4">
                         <img className="w-[50px] h-[50px] object-cover  rounded-lg" src="https://cdnmrtehran.ir/media/imgtmp/640f2b0486667.jpg"/>
                         <div className="h-auto flex flex-col gap-y-2">
                              <p className='w-[148px] truncate text-secondColor text-left font-quicksand-medium text-main'>Qabil</p>
                              <div className=' relative pl-5 cursor-pointer flex items-center justify-start h-auto'>
                                   <svg className="absolute text-second left-0 w-5 h-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                   </svg>
                                   <p className=' truncate ml-2 text-secondColor text-left font-quicksand-medium text-sm underline underline-offset-2 text-second'>Reza Pishro Ft Alireza JJ!</p>
                              </div>
                         </div>
                    </div>
                    {/* Buttons */}
                    <div className="w-full flex gap-x-6 items-center justify-center">
                         {/* Shuffle */}
                         <button className={`${isShuffle ? "text-yellow" : "text-second hover:text-main"}`} onClick={() => setIsShuffle(!isShuffle)}>
                              <TiArrowShuffle size={25}/>
                         </button>
                         {/* Previous */}
                         <button className="text-second hover:text-main">
                              <GiPreviousButton size={25}/>
                         </button>
                         {/* Play */}
                         <button onClick={playSong} className={`border ${isPlaying ? "border-second" : "border-secondBg hover:border-second"}  text-second  py-3 px-10 rounded-lg`}>
                              {isPlaying ? <FaPause size={16}/> : <FaPlay size={16}/>}
                         </button>
                         {/* Next */}
                         <button className="text-second hover:text-main">
                              <GiNextButton  size={25}/>
                         </button>
                         {/* RepeatOne */}
                         <button className={`${isRepeatOne ? "text-yellow" : "text-second hover:text-main"}`}  onClick={() => setIsRepeatOne(!isRepeatOne)}>
                              <RiRepeatOneLine size={25}/>
                         </button>
                    </div>

                    {/* Volume */}
                    <div className="flex items-center px-4 gap-x-2 ">
                         <button onClick={mutedAudio} className="text-second hover:text-main p-1 z-20 relative">
                              {isMuted ? (
                                   <svg className="z-10 w-6 h-6 text-red-500 hover:text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                                   </svg>
                              ) : (
                                   <svg  className="z-10 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                                   </svg>
                              )}
                         </button>
                         <div className="w-[150px] h-fit mt-1.5">
                              <Slider
                                   aria-label="Volume1"
                                   defaultValue={0}
                                   min={0}
                                   max={100}
                                   value={volume}
                                   onChange={changeVolumeHandler}
                                   sx={{
                                        color: '#EFEEE0',
                                        '& .MuiSlider-track': {border: 'none',},
                                        '& .MuiSlider-thumb': {
                                             width: 0,
                                             height: 0,
                                             '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                                  boxShadow: 'none',
                                             },
                                        },
                                   }}
                              />
                         </div>
                    </div>
               </section>
               </section>
     );
}
 
export default Player;