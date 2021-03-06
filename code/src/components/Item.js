import React, { useState,useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card'
import Checkbox from '@material-ui/core/Checkbox'
import Delete from '@material-ui/icons/Delete'

import { tasks } from '../reducers/tasks'

const Box = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
`
const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`
const TextContainer = styled.p`
  padding: 10px;

`

export const Item = ({ item }) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState(item.checked)

  useEffect(() => {
    dispatch(
      tasks.actions.changeChecked({
        id: item.id, 
        checked: check
      })
    )
}, [check])

  return (
    <StyledCard>
     <TextContainer>{item.text}</TextContainer> 
      <div>
        <Checkbox type="checkbox" checked={item.checked} onChange={() => { setCheck(prev => !prev) }}/>
        <Box>
          <Delete type="button" onClick={() => { dispatch(tasks.actions.removeItem(item)) }} />
        </Box>
      </div>
    </StyledCard>
  )
}