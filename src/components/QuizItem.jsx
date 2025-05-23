import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { QuizContext } from '../context/QuizContext';

function QuestionItem({ question, eventKey }) {
  const { dispatch } = useContext(QuizContext);

  const handleValidation = (result) => {
    dispatch({ type: 'VALIDATE', payload: { id: question.id, result },});
  };

  return (
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Header>
            <div className="d-flex justify-content-between align-items-center w-100">
                <span>{question.question}</span>
                {question.validation && (
                <span className={`${question.validation === 'juste' ? 'text-success' : 'text-danger'}`}>
                    {question.validation ? 'JUSTE' : 'FAUX'}
                </span>
                )}
            </div>
          </Accordion.Header>
      <Accordion.Body>
        <Card>
          <Card.Body>
            <p>Réponse : {question.answer}</p>
            <Button variant="success" className="me-2" onClick={() => handleValidation(true)} disabled={question.validation !== null}> Juste
            </Button>
            <Button variant="danger" onClick={() => handleValidation(false)} disabled={question.validation !== null} > Faux </Button>
          </Card.Body>
        </Card>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default QuestionItem;
