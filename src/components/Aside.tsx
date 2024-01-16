
import { getUserData } from '@/lib/getUserInfo'
import { Bug, Gem, Languages, Loader, Sparkle, Sparkles, Star, Sun, Target, TerminalSquare, ThumbsUp, Trophy, Zap } from 'lucide-react'
import React, { ReactElement  } from 'react'

import {ChevronRight} from 'lucide-react'
import { UserType } from '../../types'

import _ from 'lodash';

const iconDictionary: {[key:string]: ReactElement} = {
    'Gem':<Gem size={25} className='text-primaryTooStrong'/>,
    'Zap':<Zap size={25} className='text-primaryTooStrong'/>,
    'Star':<Star size={25} className='text-primaryTooStrong'/>,
    'Bug':<Bug size={25} className='text-primaryTooStrong'/>,
    'Loader':<Loader size={25} className='text-primaryTooStrong'/>,
    'Sparkle':<Sparkle size={25} className='text-primaryTooStrong'/>,
    'Sparkles':<Sparkles size={25} className='text-primaryTooStrong'/>,
    'Sun':<Sun size={25} className='text-primaryTooStrong'/>,
    'Target':<Target size={25} className='text-primaryTooStrong'/>,
    'TerminalSquare':<TerminalSquare size={25} className='text-primaryTooStrong'/>,
    'ThumbsUp':<ThumbsUp size={25} className='text-primaryTooStrong'/>,
    'Trophy':<Trophy size={25} className='text-primaryTooStrong'/>,
}

const Aside = async() => {

    // Memoize the getUserData function
    const memoizedGetUserData = _.memoize(getUserData);

    const userInfo:Promise<UserType> =  memoizedGetUserData('arashgoodarzi');
    const user = await userInfo
    // console.log({user})
  return (
    <aside className='sm:w-1/4 font-mono pr-3'>
        {/* STRENGTHS */}
        <div className=" py-3">
            <div className="title-head">STRENGTHS</div>
            <div className="flex flex-col mx-3 my-5">
                {
                    user.sidebarInfo.strengths.map((item,index)=>(
                        <div key={item.id} className="flex flex-row my-2">
                            <div className="flex items-center mx-3 ">
                                {iconDictionary[item.icon]}
                            </div>
                            <div className="flex flex-col w-full">
                                <h2 className='title-subject'>{item.title}</h2>
                                <p className='title-detail'>{item.detail}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* SKILLS */}
        <div className=" py-3">
            <div className="title-head">SKILLS</div>
            <div className="flex flex-col mx-3 my-5 gap-5">
                {/* Frontend */}
                {
                    <div className="flex flex-col mx-3">
                        <div className="title-subject">Frontend</div>
                        <div className="flex flex-row gap-2 mx-3 flex-wrap">
                            {
                                user.sidebarInfo.skills.frontend.map((item,index)=>(
                                    <div key={item.id} className="group relative flex justify-center items-center cursor-pointer">
                                        <p key={item.id} className='title-detail border-b-[1px] border-neutral'>{item.name}</p>
                                        <div className='absolute icon-style' dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }

                {/* Backend */}
                {
                    <div className="flex flex-col mx-3">
                        <div className="title-subject">Backend</div>
                        <div className="flex flex-row gap-2 mx-3 flex-wrap">
                            {
                                user.sidebarInfo.skills.backend.map((item,index)=>(
                                    <div key={item.id} className="group relative flex justify-center items-center cursor-pointer">
                                        <p key={item.id} className='title-detail border-b-[1px] border-neutral'>{item.name}</p>
                                        <div className='absolute icon-style' dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }

                {/* DataEngineering */}
                {
                    <div className="flex flex-col mx-3">
                        <div className="title-subject">DataEngineering</div>
                        <div className="flex flex-row gap-2 mx-3 flex-wrap">
                            {
                                user.sidebarInfo.skills.dataEngineering.map((item,index)=>(
                                    <div key={item.id} className="group relative flex justify-center items-center cursor-pointer">
                                        <p key={item.id} className='title-detail border-b-[1px] border-neutral'>{item.name}</p>
                                        <div className='absolute icon-style' dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }

                {/* Others */}
                {
                    <div className="flex flex-col mx-3">
                        <div className="title-subject">Others</div>
                        <div className="flex flex-row gap-2 mx-3 flex-wrap">
                            {
                                user.sidebarInfo.skills.others.map((item,index)=>(
                                    <div key={item.id} className="group relative flex justify-center items-center cursor-pointer">
                                        <p key={item.id} className='title-detail border-b-[1px] border-neutral'>{item.name}</p>
                                        <div className='absolute icon-style' dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
        </div>

        {/* ACHIVMENTS */}
        <div className=" py-3">
            <div className="title-head">ACHIVMENTS</div>
            <div className="flex flex-col mx-3 my-5 gap-5">
                {
                    user.sidebarInfo.achivments.map((item,index)=>(
                        <div key={item.id} className="block">
                            <div className="flex flex-col">
                                <h2 className='title-subject'>{item.title}</h2>
                                <p className='title-detail'>{item.detail}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* INDUSTRY EXPERTISE */}
        <div className=" py-3">
            <div className="title-head">INDUSTRY EXPERTISE</div>
            <div className="flex flex-col mx-3 my-5 gap-5">
                {
                    user.sidebarInfo.industry_experties.map((item,index)=>(
                        <div key={item.id} className="flex flex-col group">
                            <div className="title-subject mb-2 group-hover:scale-105 transition ease-in cursor-pointer group-hover:text-black">{item.title}</div>
                            <div className="flex flex-col">
                                <input id="small-range"  type="range" value={`${item.value}`} readOnly className="w-full h-1 mb-6 rounded-lg cursor-pointer range-sm  accent-primaryStrong" />
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>

        {/* Languages */}
        <div className="text-neutralTooStrong py-3">
            <div className="title-head">Languages</div>
            <div className="flex flex-row gap-5 flex-wrap">
                {
                    user.sidebarInfo.languages.map((item,index)=>(
                        <div key={item.id} className="flex flex-row">
                            <div className="flex items-center mx-3"><Languages size={12} className='text-primaryTooStrong'/></div>
                            <div className="flex flex-col">
                                <h2 className='md:text-lg text-sm '>{item.name}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div> 

        {/* Learning */}
        <div className=" py-3 ">
            <div className="title-head">Learning</div>
            <div className="flex flex-col gap-5  mx-3">
                {
                    user.sidebarInfo.learning.map((item,index)=>(
                        <div key={item.id} className="flex flex-col group ">
                            <div className="title-subject">{item.title}</div>
                            <div className="relative h-4 ">
                                <div id="progress" className="flex items-center h-full w-full  bg-gradient-to-r from-neutral to-neutral ">
                                    <div className="flex animate-progress absolute ">
                                        <ChevronRight color='white' className='' />
                                        <ChevronRight color='white' className='' />
                                        <ChevronRight color='white' className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>   
    </aside>
  )
}

export default Aside

