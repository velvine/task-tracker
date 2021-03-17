import propTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'
const Header=({title, onAdd, showAdd}) =>{
  const location=useLocation()
    return(
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' && (
            <Button color={showAdd ?'green' :'red'}
            text={showAdd ? 'close' : 'Add'} 
            onClick={onAdd}/>
            )}

        </header>
    )
}
Header.defaultProps={
    title:'Task Tracker',
}
Header.propTypes={
    title: propTypes.string.isRequired,
}
export default Header