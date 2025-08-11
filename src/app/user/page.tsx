import UserCard from '@/components/cards/UserCard';
import { log } from 'console';
import React from 'react';

const UserPage = async () => {
    const res = await fetch('https://fakestoreapi.com/users')
    const users = await res.json()
    console.log(users);

    return (
        <div className='main-container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mt-10'>
            {
                users.map((user: { username: string; email: string; }, index: number) => (<UserCard image={''} key={index} username={user.username} email={user.email} />))
            }

        </div>
    );
};

export default UserPage;