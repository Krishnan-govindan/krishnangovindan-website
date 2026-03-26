const SectionHeading = ({ children, className = "" }) => {
  return (
    <h2
      className={`font-heading text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
