import styled from 'styled-components'

export const Container = styled.div`
  width: 770px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`

export const TitleInput = styled.input`
  margin: 36px 24px 0 0;
  font-size: 34px;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 12px;
`

export const DescriptionTextArea = styled.textarea`
  margin: 26px 24px 36px 0;
  padding: 5px;
  font-size: 12px;
  border: none;
  resize: none;
  border: 1px solid #e5e5e5;
  line-height: 12px;
  height: auto;
  &::placeholder {
    color: #aaaaaa;
  }
`
