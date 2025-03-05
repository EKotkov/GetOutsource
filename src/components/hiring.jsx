import Item from './Portfolio/MainPagePortfolioItem.jsx';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';


import rct from '../assets/react.svg';

function hiring() {
    return (
        <Stack direction="horizontal" gap={5} className="blog-class">
            <div className="portfolio-main-item" >
                <header>We are hiring</header>
                <p><img src={rct} /></p>
                <p>We need you</p>
                <p><a href="hiring">More jobs here</a></p>
            </div>
            <Carousel >
                <Carousel.Item>
                    <Item Header="Junior janitor" Description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae" Image={rct}></Item>
                </Carousel.Item>
                <Carousel.Item>
                    <Item Header="Sr Office 365 user" Description="dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. " Image={rct}></Item>
                </Carousel.Item>
                <Carousel.Item>
                    <Item Header="Scavenger" Description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" Image={rct}></Item>
                </Carousel.Item>
            </Carousel>
        </Stack>

    );
}

export default hiring;