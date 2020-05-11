import React from 'react'
import 'bulma/css/bulma.css';

const CoolButton = props => {
        const {isSmall, isDanger, isSuccess, className } = props
        const clases = `button ${className} ${isSmall ? "is-small" : ""} ${
            isDanger ? "is-danger" : ""
          } ${isSuccess ? "is-success" : ""} `;
          return <button className={clases}>{props.children}</button>
}

export default CoolButton;