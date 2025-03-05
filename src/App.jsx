import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Blog from "./pages/blog";
import Portfolio from "./pages/portfolio";
import Hiring from "./pages/hiring";
import Main from "./pages/main";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import ContentPage from "./pages/ContentPage";

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    {/*<div className="container">*/}
                    {/*    <div className="container-inner">*/}

                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Main />} />
                                    <Route path="/portfolio" element={<Portfolio />} />
                                    <Route path="/hiring" element={<Hiring />} />
                                    <Route path="/blog" element={<Blog />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contacts" element={<Contacts />} />
                                    <Route path="/page/:id" element={<ContentPage />} />
                                </Routes>
                            </BrowserRouter>
                    {/*    </div>*/}
                    {/*</div>*/}
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </ThemeProvider>
    );

}

export default App


