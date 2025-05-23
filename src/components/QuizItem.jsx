import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { QuizContext } from '../context/QuizContext';

function QuestionItem({ question }) {
  const { dispatch } = useContext(QuizContext);

  const handleValidation = (result) => {
    dispatch({ type: 'VALIDATE', payload: { id: question.id, result },});
  };

  return (
    <>
      <div className="me-4">
        <strong>{question.question}</strong>
        {question.validated && (
          <span className={question.validated === 'juste' ? 'text-success' : 'text-danger'}></span>
        )}
      </div>
      <div className="me-2">
        <p>Réponse : {question.answer}</p>
        <Button variant="success" className="me-2" onClick={() => handleValidation('juste')}
         disabled={question.validated !== null}> Juste </Button>
        <Button variant="danger" onClick={() => handleValidation('faux')}
         disabled={question.validated !== null} > Faux </Button>
      </div>
    </>
  );
}

export default QuestionItem;
