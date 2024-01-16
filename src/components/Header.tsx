import { getUserData } from '@/lib/getUserInfo'
import { AtSign, Github, Link as LinkLucide, Linkedin, MapPin, Phone, Presentation } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { UserType } from '../../types';

import _ from 'lodash';


export default async function Header() {
  // Memoize the getUserData function
  const memoizedGetUserData = _.memoize(getUserData);

    const userInfo:Promise<UserType> =  memoizedGetUserData('arashgoodarzi');
    const user = await userInfo

  return (
    <div className='my-4'>
        <div className="font-bold text-black-900 font-sans text-5xl">{user.generalInfo.fullname}</div>
        <div className="text-primaryTooStrong  tracking-widest	font-sans my-2 text-xl ">{user.generalInfo.title}</div>
        <div className="flex gap-8 xl:text-lg x text-xs">
            <div className="flex items-center hover:scale-110 hover:font-bold"><Phone size={12} color='black' className='mr-1' />{user.generalInfo.phone}</div>
            <div className="flex items-center hover:scale-110 hover:font-bold"><AtSign size={12} color='black' className='mr-1' /> <Link href={`mailto:email:${user.generalInfo.email}?subject=yours%20resumes%20verified&body=texts%20here`}>{user.generalInfo.email}</Link></div>
            <div className="md:flex items-center hidden hover:scale-110 hover:font-bold"><Link href={user.generalInfo.githubLink} className='flex items-center'><Github size={12} color='black' className='mr-1' />github</Link></div>
            <div className="md:flex items-center hidden hover:scale-110 hover:font-bold"><Link href={user.generalInfo.linkedInLink} className='flex items-center'><Linkedin size={12} color='black' className='mr-1' />LinkedIn</Link></div>
            <div className="md:flex items-center hidden hover:scale-110 hover:font-bold"><Link href={user.generalInfo.portfolio} className='flex items-center'><Presentation size={12} color='black' className='mr-1' />Portfolio</Link></div>
            <div className="md:flex items-center hidden hover:scale-110 hover:font-bold"><Link href={user.generalInfo.locationGoogleMapLink} className='flex items-center'><MapPin size={12} color='black' className='mr-1' />{user.generalInfo.location}</Link></div>
        </div>

    </div>
  )
}



