import { Container, Card, Button } from "react-bootstrap-v5";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">JWT Authentication</h1>
          <p className="text-center mb-4">
            This is the template for the JWT Authentication app that stores JWT in an HTTP-Only cookie.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias architecto, atque ipsum consectetur quisquam sit recusandae amet nihil beatae perferendis! A
            speriores in ratione nisi vel doloremque velit earum aliquam rem!
          </p>
          <div className="d-flex">
            <LinkContainer to={'/login'}>
              <Button variant="primary href='/login" className="me-3">Sign In</Button>
            </LinkContainer>
            <LinkContainer to={'/register'}>
              <Button variant="secondary href='/register" className="me-3">Sign Up</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero