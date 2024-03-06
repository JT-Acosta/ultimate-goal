import styled from 'styled-components';

export const ContactLogo =styled.div`
  position: absolute;  
  top: 20px;
  left: 20px;
  font-size: 1.5rem; /* Adjust font size as needed */
  color: #ffffff; /* White text color */
  cursor: pointer; /* Change cursor to pointer on hover for better UX */
  justify-self: flex-start;
  margin-left: 24px; 
  font-weight: bold; 
`;

export const ContactForm = styled.div`
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100vh; /* Full height of the viewport */
    background-color: #01bf71;

    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        font-size: 16px;

        input,
        textarea {
            width: 100%;
            height: 35px; /* Adjust height as needed */
            padding: 7px;
            margin-bottom: 1rem; /* Add margin between inputs */
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);

            &:focus {
                border: 2px solid rgba(0, 206, 158, 1);
            }
        }

        textarea {
            min-height: 100px; /* Set minimum height */
            resize: vertical; /* Allow vertical resizing */
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