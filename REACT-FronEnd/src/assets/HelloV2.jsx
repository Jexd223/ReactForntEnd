const Hello = ({message,name}) =>{
    console.log({message, name});
    return(
        <div>
            <h1>
                {message} {name}
            </h1>
        </div>
    )
}

import PropType from 'prop-types';

Hello.PropType = {
    message : PropType.string.isRequired,
    name : PropType.string.isRequired
}

export default Hello;