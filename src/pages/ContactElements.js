import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactLogo =styled(Link)`
  position: absolute;  
  top: 20px;
  left: 20px;
  font-size: 1.5rem; 
  color: #ffffff; 
  cursor: pointer; 
  justify-self: flex-start;
  margin-left: 24px; 
  font-weight: bold; 
  text-decoration: none;
`;

export const ContactForm = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    background-color: #01bf71;

    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        font-size: 16px;

        input,
        textarea {
            width: 100%;
            height: 35px; 
            padding: 7px;
            margin-bottom: 1rem; 
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);

            &:focus {
                border: 2px solid rgba(0, 206, 158, 1);
            }
        }

        textarea {
            min-height: 100px; 
            resize: vertical; 
        }

        label {
            margin-top: 1rem;
        }

        input[type='submit'] {
            margin-top: 2rem;
            cursor: pointer;
            background: #fff;
            color: #010606;
            border: none;

            &:hover {
                transition: all 0.2s ease-in-out;
                background: #010606;
                color: #fff;
            }
        }
    }
`;

export const Notification = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 20px 40px;
    background-color: #010606;
    color: #01bf71;
    border-radius: 5px;
    cursor: pointer;
    z-index: 999; 
    display: ${props => props.visible ? 'block' : 'none'};
`;