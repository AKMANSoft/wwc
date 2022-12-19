import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
// import Cloud1 from '../images/doge-char.png'
// import Cloud from '../images/fire.png'

const FAQ = (props) => {
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
            if (((props.scrollPos - elemPos) / 3.5) * resizeParam < ref.current.clientWidth + hidingLimit) {
                setLeft(((props.scrollPos - elemPos) / 3.5) * resizeParam)
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
            setResizeParam(1)
            setHidingLimit(200)
        }
    }


    return (
        <section className='faq' ref={ref}>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <div className='faq-bg'>
                            <div
                                className={`line-of-motion-3`}
                                style={{ left: `${left}px` }}
                            ></div>
                            <div className='faq-body'>
                                <div className='content'>
                                    <div className='heading'>
                                        <h2>FAQS</h2>
                                    </div>
                                </div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>ut labore et dolore magna aliqua. Ut enim ad </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>ut labore et dolore magna aliqua. Ut enim ad </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>ut labore et dolore magna aliqua. Ut enim ad </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>ut labore et dolore magna aliqua. Ut enim ad </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>ut labore et dolore magna aliqua. Ut enim ad </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    {/* <Accordion.Item eventKey="5">
                  <Accordion.Header>ut labore et dolore magna aliqua. Ut enim ad </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>ut labore et dolore magna aliqua. Ut enim ad </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>ut labore et dolore magna aliqua. Ut enim ad </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item> */}
                                </Accordion>
                            </div>
                            {/* <div className='shape shape-12'>
              <img src={Cloud} alt='' />
            </div>
            <div className='shape shape-13'>
              <img src={Cloud1} alt='' />
            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default React.memo(FAQ);