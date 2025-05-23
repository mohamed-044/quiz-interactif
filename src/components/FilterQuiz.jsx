import '../assets/styles/FilterQuiz.css'
import { Form } from 'react-bootstrap';

function FilterQuiz ({ setCategory }) {
    return (
        <Form.Select aria-label="category" onChange={(e) => setCategory(e.target.value)} className='mb-4'>  
        <option value="">Choisir une catégorie</option>
        <option value="Maths">Maths</option>
        <option value="Sciences">Sciences</option>
        <option value="Histoire">Histoire</option>
        </Form.Select>
    );
}
export default FilterQuiz;