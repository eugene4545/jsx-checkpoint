import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; //import react components
import product from './Product'; //import our product file
import Name from './Name';
import Description from './Description';
import Price from './Price';
import './App.css'
// card components with some inline styling 
function CardWithButton() {
  return (
    <Card style={{ width: '25rem'}}>
      <Card.Img variant="top" src= {product.image} style={{width:'25em'}} />
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text style={{display: 'flex', gap: '30px'}}><Price /><span class="material-symbols-outlined">
shopping_cart
</span></Card.Text>
{/* imported style icons the link stored in the html file */}
        <Card.Text style={{marginTop:'-10px', color: 'orange'}}>
        <span class="material-symbols-outlined">star</span>
        <span class="material-symbols-outlined">star</span>
        <span class="material-symbols-outlined">star</span>
        <span class="material-symbols-outlined">star</span>
        <span class="material-symbols-outlined">star_half</span>
        </Card.Text>
        <Card.Text style={{fontSize: '15px', marginLeft: '8px'}}><Description /></Card.Text>
        
        <Button variant="primary" style={{background:'red'}}>Buy</Button>
      </Card.Body>
    </Card>
  );
}




export default CardWithButton;