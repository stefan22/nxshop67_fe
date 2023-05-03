import styled, { keyframes } from 'styled-components'

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  z-index: 2;
`

const DropDownItem = styled.div`
  background: ${props => (props.highlighted ? '#fffff7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  border-left: 3px solid ${props => (props.highlighted ? 'red' : 'white')};
  img {
    margin-right: 10px;
  }
`

const glow = keyframes`
  from {
    box-shadow: 0 0 0 yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`

const SearchContainer = styled.div`
  position: relative;
  width: 50%;
  height: fit-content;
  max-height: 450px;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    input {
      display: flex;
      border: 1px solid var(--darkblue);
      width: 100%;
      border-radius: 20px;
      font-weight: 300;
      background: var(--xlightblue);
      font-size: 1rem;
      margin-bottom: 3rem;
      box-shadow: var(--bs4);
      padding: 0.875rem 1.25rem;
      &.loading {
        animation: ${glow} 0.5s ease-in-out infinite alternate;
      }
    }
  }

  #dropdown {
    position: inherit !important;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
    padding: 0 0 0 0.35rem;
    z-index: 10;
    div {
      max-width: 150px;
      font-size: 0.87rem;
      font-weight: 300;
      width: 100%;
      cursor: pointer;
      padding: 0 1rem 0 0;
      margin-bottom: 2rem;
      text-align: center;
      align-items: center;
      height: auto;
    }
  }
`

export { DropDown, DropDownItem, SearchContainer }
