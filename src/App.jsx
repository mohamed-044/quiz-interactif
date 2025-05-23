import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import '../src/assets/styles/App.css'

function App() {


  return (
   <Container fluid className="bg-light py-3">
   <h1 className="text-center m-0">Quiz Interactif</h1>
   <Form.Select aria-label="category">
      <option>Choisir une catégorie</option>
      <option value="1">Maths</option>
      <option value="2">Science</option>
      <option value="3">Histoire</option>
    </Form.Select>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Quel est la valeur aproximative de pi ?</Accordion.Header>
        <Accordion.Body>
          Réponse
          <Button variant="success">Juste</Button>
          <Button variant="danger">Faux</Button>
        </Accordion.Body>
        <Accordion.Item eventKey="1">
        <Accordion.Header>De combien de planètes est composé le système solaire ?</Accordion.Header>
        <Accordion.Body>
          Réponse
          <Button variant="success">Juste</Button>
          <Button variant="danger">Faux</Button>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quel est la date de la révolution française ?</Accordion.Header>
        <Accordion.Body>
          Réponse
          <Button variant="success">Juste</Button>
          <Button variant="danger">Faux</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   </Container>
  )
}

export default App
