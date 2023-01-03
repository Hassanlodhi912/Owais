import React from "react";
import ErrorMessage from "./Error";
import styled from "styled-components";


import { Button } from "../styles/Button";
export default function Products() {
 
  return (
    <Wrapper>


    <div className="container">
      <div class="common-heading">
        <div class="title">Sign In</div>
        <div className="container">
        <div className="contact-form">
        
          <div class="contact-inputs">
            <span style={{fontSize:"26px"}} >First Name*</span>
            <input type="text" placeholder="Enter Your First Name" required />
          </div>
          <div class="contact-inputs">
            <span style={{fontSize:"26px"}}>Last Name*</span>
            <input type="text" placeholder="Enter Your last Name" required />
          </div>
          <div class="contact-inputs">
            <span style={{fontSize:"26px"}}>Batch ID*</span>
            <input type="email" placeholder="Enter Your ID" required />
          </div>
      <Button > Submit</Button>
          
         
        
      </div>
    </div>
        
      </div>
    </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    
  `;