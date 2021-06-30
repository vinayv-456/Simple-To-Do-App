import styled from "styled-components";

const StyledSearchBar = styled.input.attrs(props=>{
    props.type = 'text';
    props.size = props.size || "1em";
})`
    padding: 10px;
    margin-top: 20px;
    width: 20%;
`
const SearchBar = ({inputHandler, task}) => {
    
    return(
        <StyledSearchBar placeholder="enter any task" value={task}  onInput={inputHandler} ></StyledSearchBar>
    );
}

export default SearchBar;
