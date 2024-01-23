import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

const Home = () => {
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("warning");
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get('user')

                    console.log(response);
                    const user = response.data

                    setMessage(`Hello! ${user.first_name} ${user.last_name}`);
                    setVariant("success")
                } catch (e) {
                    setMessage("You are not logged in!")
                }
            }
        )();
    }, []);

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