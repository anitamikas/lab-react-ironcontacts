import React from 'react';
import './List.css';


function List(props) {
    return (
        <div>
            <ul>
                <li><strong>Picture: </strong> <img className="listimg" src={props.data.pictureUrl} alt='Student portrait'></img></li>
                <li><strong>Name: </strong>{props.data.name}</li>
                <li><strong>Popularity: </strong>{props.data.popularity}</li>
            </ul>
            <button onClick={() => props.deleteHandler(props.data.id)}>Delete</button>
        </div>);
}

export default List;