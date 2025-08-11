import assets from '@/assets';
import Image from 'next/image';
import React from 'react';

const UserCard = ({ email, username, image }: { email: string, username: string, image: any }) => {
    return (
        <div className='shadow flex flex-col justify-center items-center placeholder: space-y-4 p-5 rounded-2xl hover:shadow-2xl hover:scale-110 hover:rotate-1 duration-300'>
            <div className='w-[140px] h-[140px] rounded-full bg-blue-200 overflow-hidden'>
                <Image src={image || assets.placeholder_img} alt='' className='w-full h-full object-cover' />
            </div>
            <h2>{username}</h2>
            <p>{email}</p>

        </div>
    );
};

export default UserCard;