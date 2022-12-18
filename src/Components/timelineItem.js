import React, {useEffect} from 'react'
import useInView from 'react-cool-inview'
import {Image} from 'react-bootstrap'


const TimelineItem = (props) => {
  const {observe, inView, scrollDirection } = useInView({
    threshold: 0.25, // Default is 0
    onChange: ({ scrollDirection }) => {
      if(scrollDirection.vertical === 'up') {
        return false;
      } else {
        return true;
      }
    },
  });


  return (
    <>
      <div className={`timeline-section ${(inView || scrollDirection.vertical === 'up') ? 'visible' : '' }`} ref={observe}>
        <div className='images-container'>
          {
            props.imgSrc ? <Image src={props.imgSrc}/> : ''
          }
        </div>
        <div className='road-progressbar'>
          <div className='timeline-progress'>
            <div className='timeline-progress-bar'></div>
          </div>
          <div className={`timeline-item-indicator`}>
            <div className='timeline-item-indicator-inner'>{ props.indicatorNum }</div>
          </div>
        </div>
        <div className='timeline-item'>
          {
            props.title ? <h5 className='heading h5'>{ props.title }</h5> : ''
          }
          {
            props.description ? <div className='content'><p className='paragraph dim'>{ props.description }</p></div> : ''
          }
          {
            props.list ? 
              <ul>
                {
                  props.list.map((val, key) => 
                    <li>{val.point}</li>
                  )
                }
              </ul>
            : ''
          }
        </div>
      </div>
    </>
  )
}

export default TimelineItem