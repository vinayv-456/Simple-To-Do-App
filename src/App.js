import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Creators} from './Store/Actions/todo'

import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const RowFlowDiv = styled(Container)`
  flex-direction: row;
` 
const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;
`

const AddTask = styled.button`
  background-color: skyblue;
  padding: 10px;
  margin-top: 20px;
  width: 10%;
  margin-left: 5px;
`
const ItemCell = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  width: 30%;
  padding: 5px;
  border-bottom: 1px solid black;
`
const H1 = styled.h1`
  text-align: center;
`

const Task = styled.div`
  text-decoration :  ${(props)=>
    props.isCompleted ? props.isCompleted===true && "line-through" : "none" 
  };
`

const App = () => {
  const [task, setTask] = useState('');
  const stateList = useSelector((state)=>state.list);
  const isLoading = useSelector((state)=>state.isLoading);
  const dispatch = useDispatch();
  
  const inputHandler = (e) => {
    setTask(e.target.value);
  }

  return(
    <Container>
      <H1>TO-DO</H1>
      <RowFlowDiv>
        <SearchBar inputHandler={inputHandler} task={task}/>
        <AddTask onClick={()=>{
            dispatch(Creators.addTaskSuccess(task))
            setTask('')    
          }
        }>Add Task</AddTask>
        <AddTask onClick={()=>dispatch(Creators.addRandomNamesRequest())}>Generate names</AddTask>
      </RowFlowDiv>
      <ListDiv>
        {
          isLoading 
          ?
          <CircularProgress />
          :
          stateList.map((ele, key)=>{
            return <ItemCell key={key}>
                <Task isCompleted={ele?.completed}>{ele?.task}</Task>
                <RowFlowDiv>
                  <div onClick={()=>dispatch(Creators.deleteTaskSuccess(key))}>
                    <DeleteIcon/>
                  </div>
                  <div onClick={()=>dispatch(Creators.markCompleteTaskSuccess(key))}>
                    <DoneIcon/>
                  </div>
                </RowFlowDiv>
              </ItemCell>
          })
        }
      </ListDiv>

    </Container>
  );
}

export default App;
