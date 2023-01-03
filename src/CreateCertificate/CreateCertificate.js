import styled from "styled-components";

import { useState } from "react";
import axios from "axios";
import { Button } from "../styles/Button";

export const CreateCertificate = ({ setLoginUser }) => {
  const [image, setImage] = useState('')

  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const handleApi = () => {
    //call the api
    const url = "http://localhost:9002/api/image"

    const formData = new FormData()
    formData.append('image', image)
    
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }

  return (
    <Wrapper>


    <div className="container">
      <div class="common-heading">
        <div class="title">CREATE CERTIFICATE</div>
        <div className="container">
        <div className="contact-form">
        
          <div class="contact-inputs">
            <span style={{fontSize:"26px"}} >First Name*</span>
            <input type="text" placeholder="E.g: Nauman" required />
          </div>
          <div class="contact-inputs">
            <span style={{fontSize:"26px"}}>Last Name*</span>
            <input type="text" placeholder="Ahmed" required />
          </div>
          <div class="contact-inputs">
            <span style={{fontSize:"26px"}}>Batch ID*</span>
            <input type="email" placeholder="nauman@gmail.com" required />
          </div>
          <div class="contact-inputs">
            <span style={{fontSize:"26px"}}>University*</span>
            <input type="text" placeholder="Hamdard University" required />
          </div>
          <div class="contact-inputs">
            <span class="details"style={{fontSize:"26px"}}>Date</span>
            <input type="date" required />
          </div>
          <div class="contact-inputs">
            <span class="details" style={{fontSize:"26px"}}>Certificate For *</span>
            <input type="text" placeholder="Owais lodhi" required />
          </div>
      </div>
      <div style={{display:"flex",flexDirection:"column"}}>
      <span className="common-heading">Degree Upload</span>
      <img className="img-style" src={image ? URL.createObjectURL(image) : null}  />
      <figure>
      <input type="file" onChange={handleChange} /> 
      </figure>

      <Button  onClick={handleApi}> Submit</Button>
    </div>
    <Button onClick={() => setLoginUser({})}>Log Out</Button>
        
      </div>
    </div>
    </div>

    </Wrapper>

  );
};
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