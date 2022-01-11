import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const Description = styled.div`
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  padding: 20px 0;
  border-radius: 50%;
  width: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
  color: #000;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;
