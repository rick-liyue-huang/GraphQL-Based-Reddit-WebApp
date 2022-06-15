import React from 'react';
import Image from 'next/image';
import {
  ChatIcon,
  ChevronDownIcon,
  GlobeIcon,
  HomeIcon, MenuIcon, PlusIcon,
  SearchIcon,
  SparklesIcon, SpeakerphoneIcon,
  VideoCameraIcon
} from "@heroicons/react/outline";

function HeaderComponent() {
  return (
    <div className={'flex bg-white px-4 py-2 shadow-sm sticky top-0 z-10'}>
      {/* logo */}
      <div className={'relative w-20 h-10 flex-shrink-0'}>
        <Image
          src={'/images/redditlogo.png'} layout={'fill'} objectFit={'contain'}
        />
      </div>

      {/* home menu */}
      <div className={'flex items-center mx-6 lg:text-green-400 xl:min-w-[300px]'}>
        <HomeIcon className={'w-5 h-5'} />
        <p className={'flex-1 ml-2 hidden lg:inline'}>Home</p>
        <ChevronDownIcon className={'w-5 h-5'} />
      </div>

      {/* search input  */}
      <form
        className={'flex flex-1 items-center bg-gray-50 px-2 py-1 border border-gray-300 space-x-2 rounded-sm'}
      >
        <SearchIcon className={'w-6 h-6 text-green-400'} />
        <input type="text" placeholder={'search content...'} className={'flex-1 bg-transparent outline-none'} />
        <button hidden type={'submit'} />
      </form>

      {/* auth part */}
      <div className={'flex text-gray-600 space-x-2 items-center mx-2 hidden lg:inline-flex'}>
        <SparklesIcon className={'icon'} />
        <GlobeIcon className={'icon'} />
        <VideoCameraIcon className={'icon'} />
        <hr className={'h-10 border border-green-200'}/>
        <ChatIcon className={'icon'} />
        <PlusIcon className={'icon'} />
        <SpeakerphoneIcon className={'icon'} />
      </div>
      <div className={'flex text-gray-600 space-x-2 items-center ml-2 lg:hidden'}>
        <MenuIcon className={'icon'} />
      </div>

      {/*  */}
      <div className={'flex items-center hidden lg:flex space-x-2 border border-gray-100'}>
        <div className={'relative w-8 h-8 flex-shrink-0'}>
          <Image src={'/images/redditFace.svg'} layout={'fill'} objectFit={'contain'} />
        </div>
        <p className={'text-green-400'}>Login</p>
      </div>

    </div>
  )
}

export default HeaderComponent
