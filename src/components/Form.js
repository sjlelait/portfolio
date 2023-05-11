import { useState } from 'react';
import { Container } from 'react-bootstrap';

function Form(props) {
    const getNewState = () => ({
        name: '',
        email: '',
        message: ''
    });

    const [formState, setFormState] = useState(getNewState());

    const encode = ({ name, email, message }) => { 
        return `form-name=contact&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;
    };

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formState)
        });

        setFormState(getNewState());
    };

    const { name, email, message } = formState;
    
    return (
        <Container className="my-5">
            <form onSubmit={handleSubmit}>
            <input type="hidden" name="form-name"  value="contact" />
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