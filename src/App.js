import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState } from "react";
import { connect } from 'react-redux';
import {generateUsers, addTask, deleteTask, markComplete} from './Store/Actions/todo'

import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

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

const App = ({generateUsers, stateList, addTask, deleteTask, markComplete}) => {
  const [task, setTask] = useState('');
  const inputHandler = (e) => {
    setTask(e.target.value);
  }

  return(
    <Container>
      <H1>TO-DO</H1>
      <RowFlowDiv>
        <SearchBar inputHandler={inputHandler} task={task}/>
        <AddTask onClick={()=>{
            addTask(task)
            setTask('')    
          }
        }>Add Task</AddTask>
        <AddTask onClick={generateUsers}>Generate names</AddTask>
      </RowFlowDiv>
      <ListDiv>
        {
          stateList.map((ele, key)=>{
            return <ItemCell key={key}>
                <Task isCompleted={ele?.completed}>{ele?.task}</Task>
                <RowFlowDiv>
                  <div onClick={()=>deleteTask(key)}>
                    <DeleteIcon/>
                  </div>
                  <div onClick={()=>markComplete(key)}>
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

const mapStateToProps = state => ({
  stateList: state.list
});

const mapDispatchToProps = dispatch => ({
  generateUsers: () => dispatch(generateUsers()),
  addTask: (task) => dispatch(addTask(task)),
  deleteTask: (index) => dispatch(deleteTask(index)),
  markComplete: (index) => dispatch(markComplete(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
