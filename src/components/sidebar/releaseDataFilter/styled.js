import styled from "styled-components";

export const ReleaseFilter = styled.div`
  align-items: center;
  padding: 0.875rem 1rem 1rem;
  width: 100%;
  border-bottom: 0.0625rem solid #eee;

  h3 {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.625rem;
  }
`;

export const RealiseSearch = styled.div`
  margin-bottom: 0.625rem;

  label {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      appearance: none;
      width: 1rem;
      height: 1rem;
      border: 0.125rem solid #01b4e4;
      background-color: #01b4e4;
      position: relative;
      cursor: pointer;
    }

    input[type="checkbox"]:checked::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0.24rem;
      width: 0.25rem;
      height: 0.5625rem;
      border: solid white;
      border-width: 0 0.15rem 0.15rem 0;
      transform: rotate(38deg);
    }

    span {
      margin-left: 0.25rem;
    }
  }
`;

export const DateFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    display: flex;

    p {
      width: 5.25rem;
      align-self: center;
      color: #a4a4a4;
      font-size: 0.9rem;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  width: 100%;
  background-color: white;
  padding-left: 0.6875rem;

  input {
    flex: 1;
    border: none;
    font-size: 0.8rem;
    outline: none;
    height: 2.375rem;
  }
`;

export const InputIcon = styled.div`
  background-color: #d3dbe2;
  padding: 0.5rem 0.5rem 0.5rem 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.375rem 0.375rem 0;

  img {
    width: 1rem;
    height: 1.5rem;
  }
`;
