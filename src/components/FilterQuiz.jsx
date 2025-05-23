import '../assets/styles/FilterQuiz.css'
import Form from 'react-bootstrap/Form';

function FilterQuiz({ onChange }) {
  return (
    <Form.Select onChange={e => onChange(e.target.value)} className='mb-4'>
      <option value="">Toutes les catégories</option>
      <option value="Math">Math</option>
      <option value="Science">Science</option>
      <option value="Histoire">Histoire</option>
    </Form.Select>
  );
}

export default FilterQuiz;
