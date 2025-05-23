import { useState } from 'react';
import { Container } from 'react-bootstrap';
import FilterQuiz from './components/FilterQuiz';
import QuizAccordion from './components/QuizAccordion';
import { QuizProvider } from './context/QuizContext';

function App() {
  const [category, setCategory] = useState('');

  return (
    <QuizProvider>
      <Container className="py-3">
        <h1 className="text-center mb-4">Quiz Interactif</h1>
        <FilterQuiz onChange={setCategory} />
        <QuizAccordion selectedCategory={category} />
      </Container>
    </QuizProvider>
  );
}

export default App;
