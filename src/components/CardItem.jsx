import Card from 'react-bootstrap/Card';

function CardItem(props) {
    return (
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={props.Image}  />
          <Card.Body>
            <Card.Title>{props.Header}</Card.Title>
            <Card.Text>
                {props.Description}        
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
    );
}

export default CardItem;