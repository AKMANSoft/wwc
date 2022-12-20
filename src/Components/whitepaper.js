import React, { useCallback, useMemo, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Cloud from './../images/videos/giphy.gif'
import './../css/lines.scss'
import { useInView } from "framer-motion"
import { useEffect } from 'react';
import { useState } from 'react';

const Whitepaper = (props) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [elemPos, setElemPos] = useState(0)
    const [left, setLeft] = useState(-200)
    const [resizeParam, setResizeParam] = useState(1)
    const [hidingLimit, setHidingLimit] = useState(200)

    useEffect(() => {
        resizeHandler()
        // window.addEventListener('resize', () => {
        //     resizeHandler()
        // })
    }, [])

    useEffect(() => {
        if ((isInView && elemPos === 0) || (isInView && left === -200)) {
            setElemPos(props.scrollPos)
        }
    }, [isInView])

    useEffect(() => {
        if (isInView) {
            let futureleft = ((props.scrollPos - elemPos) / 3) * resizeParam
            if (futureleft < ref.current.clientWidth + hidingLimit) {
                setLeft(futureleft)
                // setPrevScrollPos(props.scrollPos)
            }
        }
    }, [props.scrollPos])

    const resizeHandler = () => {
        if (window.innerWidth >= 1100) {
            setResizeParam(1.5)
            setHidingLimit(300)
        }

        if (window.innerWidth >= 767) {
            setResizeParam(1)
            setHidingLimit(300)
        }

        if (window.innerWidth >= 650) {
            setResizeParam(2)
            setHidingLimit(200)
        }

        if (window.innerWidth >= 400) {
            setResizeParam(1.5)
            setHidingLimit(200)
        }

        if (window.innerWidth < 400) {
            setResizeParam(.8)
            setHidingLimit(200)
        }  
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={8} className="position-relative">
                    <section className='whitepaper' ref={ref}>
                        <div className='whitepaper-section'>
                            <div
                                className={`line-of-motion-1`}
                                style={{ transform: `translateX(${left}px) skew(20deg)` }}
                            ></div>
                            <div className='whitepaper-content'>
                                <div className='heading'>
                                    <h2>WHITEPAPER</h2>
                                </div>
                                <p className='dim'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                            </div>
                            <Button variant="theme-outline"><span>READ WHITEPAPER</span></Button>
                        </div>
                    </section>
                    <div className='shape shape-bottom-left-60'>
                        <img src={Cloud} alt='' className='giphy' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default React.memo(Whitepaper);