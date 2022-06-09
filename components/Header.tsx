import React from 'react';
import Image from 'next/image';
import {ChevronDownIcon, HomeIcon, SearchIcon} from "@heroicons/react/solid";
import {
	BellIcon,
	ChatIcon,
	GlobeIcon, MenuIcon,
	PlusIcon,
	SparklesIcon,
	SpeakerphoneIcon,
	VideoCameraIcon
} from "@heroicons/react/outline";


const HeaderComponent = () => {
	return (
		<div
			className={'flex bg-white px-4 py-2 shadow-sm sticky top-0'}>
			{/* Logo */}
			<div
				className={'relative w-20 h-10 flex-shrink-0 cursor-pointer'}
			>
				<Image
					src={'/images/redditlogo.png'} layout={'fill'} objectFit={'contain'}
				/>
			</div>
			{/* Home Menu */}
			<div
				className={'flex items-center mx-7 xl:min-w-[300px]'}>
				<HomeIcon className={'w-5 h-5'} />
				<p className={'flex-1 ml-2 hidden lg:inline'}>Home</p>
				<ChevronDownIcon className={'w-5 h-5'} />
			</div>

		{/*	SearchInput */}
			<form
				className={'flex flex-1 items-center space-x-2 border border-green-200 rounded-sm bg-gray-100 px-1 py-1'}
			>
				<SearchIcon className={'w-6 h-6 text-gray-500'} />
				<input className={'flex-1 bg-transparent outline-none'} type="text" placeholder={'Search content..'}/>
				<button type={'submit'} hidden></button>
			</form>

			<div
				className={'flex text-green-400 items-center space-x-2 hidden lg:inline-flex'}
			>
				<SparklesIcon className={'icon'} />
				<GlobeIcon className={'icon'} />
				<VideoCameraIcon className={'icon'} />
				<hr className={'h-10 border border-green-200'}/>
				<ChatIcon className={'icon'} />
				<BellIcon className={'icon'} />
				<PlusIcon className={'icon'} />
				<SpeakerphoneIcon className={'icon'} />
			</div>
			<div className={'ml-5 text-green-400 flex items-center lg:hidden'}
			>
				<MenuIcon className={'icon'} />
			</div>
		</div>
	);
};

export default HeaderComponent;
