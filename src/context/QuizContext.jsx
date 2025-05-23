import { createContext, useReducer, useContext } from "react";
import quizData from '../assets/data/Questions.json'

const QuizContext = createContext();

const initialState = quizData.map(q => ({ ...q, validated: null }));

function quizReducer(state, action) {
    switch (action.type) 
    { case 'VALIDATE': return state.map(q => q.id === action.payload.id
        && q.validate === null ? { ...q, validates: action.payload.result} : q );
    default : return state;
};
}    

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ quiz: state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}