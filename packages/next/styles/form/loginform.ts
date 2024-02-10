import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 500px;
`;

export const InputField = styled.input`
  font-family: 'Inter';
  background: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  margin-top: 8px;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 4px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 6px 0;
`;

export const InputLabel = styled.label`
  color: #8f8f8f;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  outline: none;
  background-color: #1976d2;
  border: none;
  font-family: 'Inter';
  font-size: 18px;
  padding: 10px 0;
  border-radius: 10px;
  padding: 12px 15px;
`;

export const Aligning = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
