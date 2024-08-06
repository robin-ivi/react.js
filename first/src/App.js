import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blog } from './Data/blog';

function App() {
  let a = "Krishna";
  let obj = {
    'name': "Krishna",
    'class': "BA"
  }
  let j = true;
  return (
    <div className="main">
      <Header email="wsa@gmail.com" asd={obj}>
        <h1>Wllo to header section</h1>
      </Header>
      {/* <Container fluid>
        <Row>
          <Col className='col-12 text-center py-4'>
            <h1>One Demo</h1>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          { blog.map((v,i) =>{
              return(

                <ProductItems pitem={v} key={i}/>
              )
          } )}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
function ProductItems({pitem}) {
  return (
    <div className="col-lg-3 mb-4">
      <Card>
      <Card.Body>
        <Card.Title>{pitem.title}</Card.Title>
        <Card.Text>
        {pitem.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div >
  )
}