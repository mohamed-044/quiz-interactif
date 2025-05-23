import Accordion from 'react-bootstrap/Accordion';
import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import QuestionItem from './QuizItem';

function QuizAccordion({ selectedCategory }) {
  const { quiz } = useContext(QuizContext);

  const filtered = selectedCategory ? quiz.filter(q => q.category === selectedCategory) : quiz;

  return (
    <Accordion>
      {filtered.map((q, index) => (
        <Accordion.Item eventKey={index.toString()} key={q.id}>
          <Accordion.Header>
            <div className="d-flex justify-content-between align-items-center w-100">
                <span>{q.question}</span>
                {q.validated && (
                <span className={`${q.validated === 'juste' ? 'text-success' : 'text-danger'}`}>
                    {q.validated.toUpperCase()}
                </span>
                )}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <QuestionItem question={q} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default QuizAccordion;
