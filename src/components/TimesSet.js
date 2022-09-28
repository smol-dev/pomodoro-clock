import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
//import { Button, Typography } from '@material-ui/core'
import '../index.css';


function TimesSet({ setBreakLength, breakLength, setSessionLength, sessionLength, playOn }) {


    const handleBreakIncrement = () => {
        if (breakLength >= 60 || playOn) {
            return null
        } else {
            setBreakLength(breakLength + 1)
        }
    }

    const handleBreakDecrement = () => {
        if (breakLength === 1 || playOn) {
            return null
        } else {
            setBreakLength(breakLength - 1)
        }
    }
    const handleSessionIncrement = () => {
        if (sessionLength >= 60 || playOn) {
            return null
        } else {
            setSessionLength(sessionLength + 1)
        }
    }

    const handleSessionDecrement = () => {
        if (sessionLength === 1 || playOn) {
            return null
        } else {
            setSessionLength(sessionLength - 1)
        }
    }


    return (
        <div>
            <Container id="timeset">
                <Row className="border rounded m-1 text-light">
                    <Col xs={1} className="ml-3 d-flex align-items-center justify-content-center">
                        <Button
                            variant="outline-light"
                            size="sm"
                            className="badge-pill shadow"
                            id="session-decrement"
                            onClick={handleSessionDecrement}
                        >
                            <span>-</span></Button>
                    </Col>
                    <Col className="text-center p-1">
                        <div id="session-label">Session Length</div>
                        <div id="session-length" className='h4'>{sessionLength}</div>
                    </Col>
                    <Col xs={1} className="mr-3 d-flex align-items-center justify-content-center">
                        <Button
                            variant="outline-light"
                            size="sm"
                            id="session-increment"
                            className='badge-pill shadow'
                            onClick={handleSessionIncrement}
                        >+</Button>
                    </Col>
                </Row>
                <Row className="border rounded m-1 text-light">
                    <Col xs={1} className="ml-3 d-flex align-items-center justify-content-center">
                        <Button
                            variant="outline-light"
                            size="sm"
                            className="badge-pill shadow"
                            id="break-decrement"
                            onClick={handleBreakDecrement}
                        >
                            <span>-</span></Button>
                    </Col>
                    <Col className="text-center p-1">
                        <div id="break-label">Break Length</div>
                        <div id="break-length" className='h4'>{breakLength}</div>
                    </Col>
                    <Col xs={1} className="mr-3 d-flex align-items-center justify-content-center">
                        <Button
                            variant="outline-light"
                            size="sm"
                            id="break-increment"
                            className='badge-pill shadow'
                            onClick={handleBreakIncrement}
                        >+</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TimesSet
