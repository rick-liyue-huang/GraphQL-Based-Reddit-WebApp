import React from 'react';
import {useSession} from "next-auth/react";
import Image from "next/image";

// using https://avatars.dicebear.com

interface AvatarProps {
	seed?: string;
	large?: boolean;
}

const AvatarComponent: React.FC<AvatarProps> = ({seed, large}) => {

	const {data: session} = useSession();

	return (
		<div
			className={`relative overflow-hidden w-10 h-10 rounded-full border border-green-200 bg-green-50 ${large &&  'w-20 h-20'}`}
		>
			<Image layout={'fill'} objectFit={'contain'} src={`https://avatars.dicebear.com/api/open-peeps/${seed || session?.user?.name || 'placeholder'}.svg`} />
		</div>
	);
};

export default AvatarComponent;
