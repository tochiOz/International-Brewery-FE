/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import {
  Col, Row, Form, Button,
} from 'react-bootstrap';
import styled from 'styled-components';
import { Screen, Basics } from 'styles';
import { ReactComponent as Loader } from './svg/loader.svg';

const Wrapper = styled.div`
display: content
height: 80vh
p{
  font-weight: 500
}
${Screen.tablet`
p{
margin-bottom: 100px
}
`}
${Screen.screen425`
height: auto
`}
`;
const Header = styled.h1`
font-family: ${Basics.fonts.PeaceSans};
color: #4187E6
${Screen.largePhone`
font-size: 35px
`}
`;
const FormCon = styled.div`
display: flex
justify-content: flex-end
width: 100%
form{
  display: flex;
  flex-flow: column nowrap
  width: 70%
}
input{
  margin-bottom: 30px
  border: 1px solid #5555
  padding: 10px 30px
  border-radius: 15px
  outline: none
}
input::placeholder{
  color: #5555
}
.btn{
  width: 40%
  border-radius: 15px
  outline: none
}
${Screen.screen993`
justify-content: center
`}
${Screen.largePhone`
margin-bottom: 50px
form{
  width: 100%
}
`}
`;

const ButtonContainer = styled.div`
display: flex
width: 100%
justify-content: center;
align-items: center
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loading: false,
  });

  const {
    firstName, lastName, email, password, loading,
  } = formData;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setFormData({ ...formData, loading: false });
      }, 2000);
    }
    // eslint-disable-next-line
  }, [loading]);
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });
    // console.log(formData);
  };
  return (
    <Wrapper >
      <Row>
        <Col lg={true}>
          <Header>WELCOME TO BREWERY CO.</Header>
          <p>This is where we produce the best of the best drinks to turn your day up and make it a fun filled day.</p>
        </Col>
        <Col lg={true}>
          <FormCon>
            <Form onSubmit={(e) => onSubmit(e)} >
              <input type="text" placeholder='first name' name='firstName' required onChange={(e) => onChange(e)} value={firstName} />
              <input type="text" placeholder='last name' name='lastName' required onChange={(e) => onChange(e)} value={lastName} />
              <input type="email" placeholder='email' name='email' required onChange={(e) => onChange(e)} value={email} />
              <input type="password" placeholder='password' name='password' required onChange={(e) => onChange(e)} value={password} />
              <ButtonContainer >
                <Button variant="outline-primary" type='submit' >{loading ? <Loader /> : 'Signup'}</Button>
              </ButtonContainer>
            </Form>
          </FormCon>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Signup;