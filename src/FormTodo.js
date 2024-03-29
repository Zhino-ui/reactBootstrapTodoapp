import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

const FormTodo = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventdefault();
        if(!value) return;
        addTodo(value);
        setValue("")
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label> <b>Add Todo</b> </Form.Label>
            <Form.Control type="text" className="input" value={value} onChange={e=>setValue(e.target.value)} placeholder="add new todo"/>
        </Form.Group>
        <Button variant='primary mb-3' type='submit'>Submit</Button>
    </Form>
  )
}

export default FormTodo