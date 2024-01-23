import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

const Home = ({ user }) => {
    let message, variant;

    if(user) {
        message = `Hello! ${user.first_name} ${user.last_name}`;
        variant = "success";
    } else {
        message = "You are not logged in!";
        variant = "danger";
    }

    return (
        <>
            <div className="container">
                <Row className="text-center">
                    <Col md={6} className="mx-auto">
                        <Alert variant={variant} className="rounded-0" dismissible>
                            {message}
                        </Alert>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home;