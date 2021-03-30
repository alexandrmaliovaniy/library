import React, {useContext} from 'react';
import Context from "../Context";

function Author(props) {
    let {Input} = useContext(Context);
    return(
        <span onClick={()=> Input(props.name)}>{props.name}</span>
    )
}
export default Author;