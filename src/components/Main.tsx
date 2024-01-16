import React from 'react'
import Aside from './Aside'
import Section from './Section'

const Main = () => {
  return (
    <main className='flex flex-col mt-4 sm:flex-row'>
        <Aside />
        <Section />
    </main>
  )
}

export default Main