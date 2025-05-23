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
         <QuestionItem key={q.id} question={q} eventKey={index.toString()} />
      ))}
    </Accordion>
  );
}

export default QuizAccordion;
