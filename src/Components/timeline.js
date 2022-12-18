import React from 'react'
import TimelineItem from './timelineItem'

const Timeline = () => {
    return (
      <>
        <div className='timeline'>
          
        <TimelineItem 
            indicatorNum='1'
            title= 'Lorem ipsum dolor sit amet'
            description='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
          />
          <TimelineItem 
            indicatorNum='2'
            title= 'Lorem ipsum dolor sit amet'
            description='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'  
          />
          <TimelineItem 
            indicatorNum='3'
            title= 'Lorem ipsum dolor sit amet'
            description='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
          />
          <TimelineItem 
            indicatorNum='4'
            title= 'Lorem ipsum dolor sit amet'
            description='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'  
          />
        </div>
      </>
    )
}

export default Timeline