import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete}) =>(
    <section className="functions">
        <Button text="clear" type="button-long-text" clickHandler={onContentClear}/>
        <Button text="<-" type="" clickHandler={onDelete}/>
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}
 export default Functions