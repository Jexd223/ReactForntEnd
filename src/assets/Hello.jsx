const Hello = ({name,message}) =>{
    return(
        <div>
            <h1>
                {name} {message}
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