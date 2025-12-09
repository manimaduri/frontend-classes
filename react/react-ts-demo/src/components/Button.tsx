type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
};
const Button = (props: ButtonProps) => {
  const { label, variant = "primary", disabled = false, onClick } = props;
  const background = {
    primary: "#007bff",
    secondary: "#6c757d",
    danger: "#dc3545",
  };
  const variantBg = background[variant];

  return (
    <button
      style={{
        backgroundColor: variantBg,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        marginRight: "10px",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
