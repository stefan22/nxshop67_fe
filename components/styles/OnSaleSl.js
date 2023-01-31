import styled from 'styled-components'

const OnSaleSl = styled.span`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: absolute;
  top: 40%;
  left: 1%;
  font-weight: 400;
  // margin-block-start: 6rem;
  box-shadow: var(--bs5);
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  width: 53px;
  height: 53px;
  color: var(--white);
  background-color: var(--red);
  border-radius: 50%;
  z-index: 3;
  text-align: center;
  font-size: var(--fontSizeTxt);
  line-height: 1.35;
`

export default OnSaleSl
