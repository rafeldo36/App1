import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Vasai() {
  return (
    <div >
    <div className="d-flex justify-content-around">
      <Card border="primary" style={{ width: '50rem' }}>
        {/* <Card.Img variant="top" src="image.jpg" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <br />
    <div className="d-flex justify-content-around">
      <Card border="success" style={{ width: '50rem' }}>
        {/* <Card.Img variant="top" src="image.jpg/100px180" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default Vasai;