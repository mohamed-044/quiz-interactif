import { createContext, useReducer } from "react";
import quizData from '../assets/data/Questions.json'
import { quizReducer } from '../reducers/QuizReducers';

const initialState = quizData.map(q => ({ ...q, validated: null }));

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ quiz: state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export const QuizContext = createContext();