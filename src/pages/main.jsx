//import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Portfolio from '../components/portfolio.jsx';
//import PortfolioPage from './components/Portfolio/PortfolioPage.jsx';

import Hiring from '../components/hiring.jsx';
//import HiringPage from './components/Portfolio/HiringPage.jsx';
import Blog from '../components/blog.jsx';


function main() {
    return (
        <Container>
            <Row>
            <Col >
                <Card >
                        <Card.Img variant="top" src="../src/assets/Logo vector_light.svg" />
                    <Card.Text >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Portfolio />
            </Row>
            <Row>
                <Hiring />
            </Row>
            <Row>
                <Blog />
            </Row>
        </Container>
    );
}

export default main;