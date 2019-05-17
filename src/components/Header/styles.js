import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 184px;
  background: #6739b8;
  justify-content: flex-end;
  align-items: center;
`
export const HeaderContainer = styled.header`
  width: 100%;
  height: 135px;
`
export const TitleInput = styled.input`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 28px;
  margin-left: 80px;
  width: 100%;
`

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  width: 770px;
  height: 49px;
  border-bottom: 1px solid #e4e4e4;
`
export const TabButton = styled.button`
  width: 128px;
  font-size: 14px;
  font-weight: 600;
  background: none;
  border: none;
  color: #898989;
  cursor: pointer;
  ${({ active }) =>
    active === true &&
    `
    color: #6739b8;
    border-bottom: 2px solid #6739b8;
  `}
`
