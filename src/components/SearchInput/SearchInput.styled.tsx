import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  padding: 0 0 0 10px;

  border: 1.5px solid #e3dede;

  background-color: ${(props) => props.theme.input?.primary};

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconSection = styled.div`
  & .search-icon {
    height: 20px;
    width: 20px;
  }
`;

const Icon = styled.img``;

const InputSection = styled.div`
  margin-left: 10px;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;

  background-color: transparent;
  outline: none;
  border: none;

  font-weight: 600;
`;

export { Section, IconSection, InputSection, Input, Icon };
