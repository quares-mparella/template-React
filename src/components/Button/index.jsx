const Button = ({children, onClick, type,name}) => {
  return (
    <button name={name} onClick={onClick} type={type}>{children.toUpperCase()}</button>
  )
}

export default Button