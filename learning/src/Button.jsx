const Button = ({ ButtonClick, children }) => {
    return (
        <button onClick={ButtonClick}>
            {children}
        </button>
    );
}


export default Button