//import React from 'react';
import Stack from 'react-bootstrap/Stack';
import CardGroup from 'react-bootstrap/CardGroup';

import Item from './Portfolio/MainPagePortfolioItem.jsx';
import ItemSmall from './MarkdownViewerSmall.jsx';
import CardItem from './CardItem.jsx';

import rct from '../assets/react.svg';

function portfolio() {
    return (
        <Stack direction="horizontal" gap={5}>
            <div className="portfolio-main-item" >
                <header>Portfolio</header>
                <p><img src={rct} /></p>
                <p>Our great portfolio</p>
                <p><a href="portfolio"> Look at here</a></p>
            </div>

            <CardGroup >
                <CardItem Header="portfolio proj 1" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Image={rct}></CardItem>
                {/*<ItemSmall previewLength="500" fileName="grades_case.md" className="portfolio-main-item" />*/}
                <CardItem Header="portfolio proj 2" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D" Image={rct}></CardItem>
                <CardItem Header="portfolio proj 3" Description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Image={rct}></CardItem>
            </CardGroup>
        </Stack>
    );
}

export default portfolio;