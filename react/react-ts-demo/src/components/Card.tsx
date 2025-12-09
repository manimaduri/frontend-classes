
type CardProps ={
    children: React.ReactNode;
    shadow?: boolean;
    padding?: string;
}
const Card = (props : CardProps) => {
    const { children, shadow , padding = "16px"} = props;
  return (
    <div style={{
        boxShadow: shadow ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
        padding: padding,
        borderRadius: "8px",
        backgroundColor: "white",
        marginTop : "10px"
    }}>
        {children}
    </div>
  )
}

export default Card