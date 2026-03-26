const Button = ({ text, href, variant = "primary", className = "", style }) => {
  const base =
    "inline-block font-body font-semibold text-sm uppercase tracking-wide rounded-full px-8 py-4 transition-all duration-300";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-[#a8832e] hover:-translate-y-0.5 hover:shadow-gold",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-white hover:-translate-y-0.5",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} style={style}>
      {text}
    </a>
  );
};

export default Button;
