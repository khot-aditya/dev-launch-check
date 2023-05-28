import React from 'react'

import { Section } from '../../organisms/Section';
import { Accordion } from '../../organisms/Accordion';
import { MenuCard } from '../../organisms/CardMenu';
import { HeroSection } from '../../templates/Hero';
import { dataArray } from '../../../list';


export const Home = () => {
  return (
    <div className='pb-96'>

      <HeroSection />

      <div className='flex justify-center'>
        <div className='w-full max-w-6xl p-5 pr-5 flex flex-col gap-5'>
          {
            dataArray.map((item, index) => (
              <Section key={index} item={item} >
                {
                  item.content.map((item, index) => (
                    <Accordion item={item} />
                  ))
                }
              </Section>
            ))
          }

        </div>
        <div className='w-full max-w-md p-5 pl-0 relative'>
          <MenuCard />
        </div>
      </div>

    </div>
  )
}
