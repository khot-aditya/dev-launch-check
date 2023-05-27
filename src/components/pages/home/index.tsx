import React from 'react'

import { Section } from '../../organisms/Section';
import { Accordion } from '../../organisms/Accordion';
import { MenuCard } from '../../organisms/CardMenu';
import { HeroSection } from '../../templates/Hero';
import { dataArray } from '../../../list';


export const Home = () => {


  const PRIORITY = {
    HIGH: 0,
    MEDIUM: 1,
    LOW: 2,
  };

  const TAGS = {
    ALL: "all",
    BEST_PRACTICES: "best practices",
    SEO: "seo",
    TESTING: "testing",
    CSS: "css",
    JAVASCRIPT: "javascript",
    PERFORMANCE: "performance",
    META_TAGS: "meta tags",
    HTML_TAGS: "html tags",
    SOCIAL_MEDIA: "social media",
    SECURITY: "security",
    IMAGES: "images",
    REQUESTS: "requests",
    ACCESSIBILITY: "accessibility",
    WEB_FONT: "web font",
  };

  return (
    <div className='pb-96'>

      <HeroSection />

      <div className='flex justify-center'>
        <div className='w-full max-w-6xl p-5 pr-5 flex flex-col gap-5'>
          {
            dataArray.map((item, index) => (
              <Section key={index} title={item.title}>
                {
                  item.content.map((item, index) => (
                    <Accordion title={item.title} item={item}/>
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
