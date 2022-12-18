import React, { useEffect, useState } from "react"

const LineMove = (props) => {
	const [scrollPos, setScrollPos] = useState(0)
    const [elemPos, setElemPos] = useState(0)
    const [resizeParam, setResizeParam] = useState(1)
    const [hidingLimit, setHidingLimit] = useState(200) 

    useEffect(() => {
        resizeHandler()
        window.addEventListener('resize', () => {
            setScrollPos(0)
            setElemPos(0)
            props.setLeft(-200)
            window.scrollTo(0, 0)
            resizeHandler()
        })
    }, []) 


    useEffect(() => {
        let scrollHandler = () => {
            setScrollPos(window.pageYOffset)
        }
        window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('scroll', scrollHandler)  
        }
    }, [])

    useEffect(() => {
        if (props.isInView && elemPos === 0 || props.isInView && props.left === -200) {
            setElemPos(scrollPos)
        }
    }, [props.isInView])

    useEffect(() => {
        if (props.isInView && props.ref) {
            if (((scrollPos - elemPos) / props.speed) * resizeParam < props.ref.current.clientWidth + hidingLimit) {
                props.setLeft(((scrollPos - elemPos) / props.speed) * resizeParam)
            }
        }
    }, [scrollPos])

    const resizeHandler = () => {

        if (window.innerWidth < 400) {
            setResizeParam(1) 
            setHidingLimit(200)
        } 

        if (window.innerWidth >= 400) {
            setResizeParam(1.5)
            setHidingLimit(200)
        } 
        
        if (window.innerWidth >= 650) {
            setResizeParam(2)
            setHidingLimit(200)
        } 
        
        if (window.innerWidth >= 767) {
            setResizeParam(1)
            setHidingLimit(300)
        } 
        
        if (window.innerWidth >= 1100) {
            setResizeParam(1.5)
            setHidingLimit(300)
        }
    }

	return <></>
}

export default React.memo(LineMove)