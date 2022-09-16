import styled from 'styled-components'

const OnSaleSl = styled.span`
  display: flex;
  flex-direction: column;
  padding: 0;
  line-height: 2;
  position: absolute;
  top: 13%;
  left: 5%;
  font-weight: 900;
  margin-block-start: 6rem;
  box-shadow: var(--bs3);
  font-size: var(--fontSizeTxt);
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  width: 67px;
  height: 67px;
  text-shadow: none;
  color: white;
  transform: scale3d(112%, 112%, 112%);
  background-color: var(--red);
  border-radius: 50%;
  z-index: 3;
`

export default OnSaleSl
