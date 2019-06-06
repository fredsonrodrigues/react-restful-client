import React from 'react'

export default props => (
    <footer className='main-footer'>
        <strong>
            Copyright &copy; {1900 + new Date().getYear()}
            <a href='https://github.com/jhonnyjks/react-restful-client' target='_blank'>
                {process.env.REACT_ORGANIZATION}
            </a>.
        </strong>
    </footer>
)