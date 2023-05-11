import { useState } from 'react';
import { Container } from 'react-bootstrap';

function Form(props) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {

    };
    const handleSubmit = (event) => {

    };

    const { name, email, message } = formState;
    
    return (
        <Container className="my-5">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={handleChange} 
                    value={name}
                    className="form-control mb-3"
                />
                
                <label>Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    onChange={handleChange}
                    value={email}
                    className="form-control mb-3"
                />
                
                <label>Message:</label>
                <textarea 
                    name="message" 
                    onChange={handleChange}
                    value={message}
                    className="form-control mb-3"
                ></textarea>
                
                <button type="submit" className="btn btn-dark">
                Send Message
                </button>
            </form>
        </Container>
    )
}

export default Form;