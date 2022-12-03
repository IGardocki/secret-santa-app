import './App.css';
import { Container, Card } from 'react-bootstrap';
import holidayBackground from './holidayBackground.png'

function App() {

  return (
    <Container fluid style={{ display: "flex", flexDirection: "column", minHeight: "100vh", maxWidth: "100vw", textAlign: "center", alignItems: "center", justifyContent: "space-around", backgroundImage: `url(${holidayBackground})`, backgroundSize: 'cover' }}>


      <Card style={{ minHeight: "80vh" }}>

        <Card.Title><h1>Hey friend! Sounds like you've gotten the <i>JackBox Party Pack 9</i> as a Secret Santa gift!</h1></Card.Title>
        <br />
        <Card.Title><h2>Oh, neat. How do I get it?</h2></Card.Title>
        <Card.Body>Well! You can download your digital products from: {` `}
          <a href='https://transactions.sendowl.com/orders/117121526/download/fa132ec9d3a894a9191b56a41c54c9b7'>this link</a>
        </Card.Body>

        <Card.Body>
          In order to use some of the products in this order you will require the following Steam code:
          <br />
          QXD5P-0DDGF-LZWE6
        </Card.Body>

        <Card.Title>In case you have problems, here's a video to guide you through the process!</Card.Title>
        <Card.Body>
          <iframe width="320" height="180" src="https://www.youtube.com/embed/TvJcC79mT34" title="How to Redeem Steam Codes for Jackbox Games" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Card.Body>

      </Card>
    </Container>
  );
}

export default App;
