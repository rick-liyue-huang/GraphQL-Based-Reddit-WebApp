import React from 'react';
import {useSession} from "next-auth/react";
import Image from "next/image";

interface AvatarProps {
	seed?: string;
	large?: boolean
}

const AvatarComponent: React.FC<AvatarProps> = ({seed, large}) => {

	// using session to create random avatar in 'https://avatars.dicebear.com'
	const {data: session} = useSession();

	return (
		<div className={`overflow-hidden relative ${!large && 'w-10 h-10'} rounded-full bg-green-50 ${large && 'w-20 h-20'}`}>
			<Image src={`https://avatars.dicebear.com/api/human/${seed || session?.user?.name || 'placeholder'}.svg`} objectFit={'contain'} layout={'fill'} />
		</div>
	);
};

export default AvatarComponent;
