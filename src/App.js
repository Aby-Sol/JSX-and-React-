import './App.css';
import Name from './Name' //Importing the name
import Description from './Description' //Importing the description
import Price from './Price.jsx'; //Importing the price
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product.js'; //Importing the product's informations
import BellPepper from './BellPepper.png' //The picture that shows when a name is entered
import Default from './Default.png' //The default picture
 
function App() {
  let visitorName= prompt("Hello, what's your name ?")
  return (
    <div className='Body'>
      {/*The Header*/}
      <div >
      { visitorName ? <div className='Header'> <img src={BellPepper} style={{width:50}}/> <h2> Hello, {visitorName}! </h2></div> :<div className='Header'> <img src={Default} style={{width:50}}/> <h2> Hello, there! </h2></div>}
     {/*If a visitor name is entered, a picture is shown else a default picture is shown*/}

      </div>

      {/*The Card*/}

    <Card className='Card' style={{ width: '25rem' }}>
      <Card.Img variant="top" src={product.Image}></Card.Img>
      <Card.Body className='CardBody'>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Price className='Price'></Price>
          <Description/>
        </Card.Text>
        <Button size="lg" variant="dark">Add to cart </Button>
      </Card.Body>
    </Card>
    </div>

  );
}

export default App;
