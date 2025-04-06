import React from 'react'

export const Footer = () => {
    let footerStyle = {
        width: "100%",
        backgroundColor: "grey",
    }

    return (
        <footer className='text-light' style={footerStyle}>
            <p className="text-center my-0">Copyright &copy; MyTodosList.com</p>
        </footer>
    )
}