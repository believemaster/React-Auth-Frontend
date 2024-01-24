import { Alert, Col, Row } from "react-bootstrap";

const Home = ({ user, setLogin }: {user:any, setLogin: Function}) => {
    let message, variant;

    if(user) {
        message = `Hello! ${user.first_name} ${user.last_name}`;
        variant = "success";
        setLogin();
    } else {
        message = "You are not logged in!";
        variant = "danger";
        setLogin();
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