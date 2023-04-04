import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { SetStateAction } from 'react';

type TModalCommonProps = {
  children : JSX.Element
  open : boolean,
  setOpen : React.Dispatch<SetStateAction<boolean>>
  title : string
}


const ModalCommon : React.FunctionComponent<TModalCommonProps> = ({title , children , setOpen , open}) => {
  if(open){
    if(typeof document !== "undefined"){
      document.body.classList.add('stop-scrolling')
    }
  }else{
    if(typeof document !== "undefined"){
      document.body.classList.remove('stop-scrolling')
    }
  }
  return (  
    <Modal open={open} onClose={()=> setOpen(false)} className={`outline-none z-20 focus:outline-none flex items-center justify-center px-6`}>
      <section className={`flex flex-col place-content-between bg-secondBg border-2 border-second outline-none p-4 rounded-md w-full md:w-1/2 xl:w-1/3 h-[400px]`}>
        <div>
          <div className='w-full flex justify-between items-center'>
            <h5 className='text-xl text-main font-quicksand-bold'>{title}.</h5>
            <button onClick={()=>setOpen(false)} className='p-1 group'>
              <svg className="w-7 h-7 text-second group-hover:text-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <hr className='border-second my-4'/>
        </div>
        {children}
      </section>
    </Modal>
  );
}
 
export default ModalCommon;