import { Alert, Col, Row } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <div className="container">
                <Row className="text-center">
                    <Col md={6} className="mx-auto">
                        <Alert variant="success" dismissible>
                            Hello! You are logged in.
                        </Alert>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home;