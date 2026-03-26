const Card = ({ children, className = "", hoverEffect = true, style }) => {
  const hover = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-card transition-all duration-300"
    : "";

  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-soft ${hover} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
