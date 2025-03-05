import CardItem from './CardItem.jsx';
import Stack from 'react-bootstrap/Stack';
import CardGroup from 'react-bootstrap/CardGroup';

import rct from '../assets/react.svg';
function blog() {
    return (
        <Stack direction="horizontal" gap={5} className="blog-class">
            <div className="portfolio-main-item" >
                <header>Our blog</header>
                <p><img src={rct} /></p>
                <p>Our definitely not boring blog</p>
                <p><a href="blog">Click here if you are really sure </a></p>
            </div>
            <CardGroup >
                <CardItem Header="Blog post 1" Description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." Image={rct}></CardItem>
                <CardItem Header="Blog post 2" Description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Image={rct}></CardItem>
                <CardItem Header="Blog post 3" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." Image={rct}></CardItem>
            </CardGroup>
        </Stack>

    );
}

export default blog;