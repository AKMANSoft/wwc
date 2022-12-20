import React, { useRef } from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Timeline from './timeline';
// import Cloud1 from '../images/DogeonRocket.png'
import Cloud from '../images/videos/giphy.gif'
import { Button } from 'react-bootstrap';
import { useInView } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";


const Roadmap = (props) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [elemPos, setElemPos] = useState(0)
    const [left, setLeft] = useState(-500)
    const [resizeParam, setResizeParam] = useState(1)
    const [hidingLimit, setHidingLimit] = useState(200)

    useEffect(() => {
        resizeHandler()
    }, [])

    useEffect(() => {
        if ((isInView && elemPos === 0 )|| (isInView && left === -200)) {
            setElemPos(props.scrollPos)
        }
    }, [isInView])

    useEffect(() => {
        if (isInView) {
            if (((props.scrollPos - elemPos) / 5) * resizeParam < ref.current.clientWidth + hidingLimit) {
                setLeft(((props.scrollPos - elemPos) / 5) * resizeParam)
            }
        }
    }, [props.scrollPos])

    const resizeHandler = () => {

        if (window.innerWidth >= 1100) {
            setResizeParam(1.5)
            setHidingLimit(300)
        } else if (window.innerWidth >= 767) {
            setResizeParam(1)
            setHidingLimit(300)
        } else if (window.innerWidth >= 650) {
            setResizeParam(2)
            setHidingLimit(200)
        } else if (window.innerWidth >= 400) {
            setResizeParam(1.5)
            setHidingLimit(200)
        } else if (window.innerWidth < 400) {
            setResizeParam(1)
            setHidingLimit(300)
        }
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8} className="position-relative">
                    <div className="roadmap" ref={ref}>
                        <Card>
                            <div
                                className={`line-of-motion-2`}
                                style={{ left: `${left}px` }}
                            ></div>
                            <div className="content">
                                <div className="heading">
                                    <h2 className='text-center'>ROADMAP</h2>
                                </div>
                            </div>
                            <Card.Body>
                                <Timeline />
                                <div className='text-center'>
                                    <Button variant='theme'>Join Whitelist</Button>
                                </div>
                                {/* <div className='shape shape-top35-left0'>
                  <img src={Cloud} alt='' />
                </div>
                <div className='shape shape-13'>
                  <img src={Cloud1} alt='' />
                </div> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='shape shape-bottom-right-60'>
                        <img src={Cloud} alt='' className='giphy' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default React.memo(Roadmap);