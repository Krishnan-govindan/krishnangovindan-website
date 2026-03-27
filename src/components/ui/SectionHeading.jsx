const SectionHeading = ({ children, className = "" }) => {
  // Only apply default text-charcoal if the caller hasn't passed a color class
  const hasColorOverride = /\btext-\S/.test(className);
  return (
    <h2
      className={`font-heading text-3xl md:text-4xl font-bold leading-tight mb-4 ${
        hasColorOverride ? "" : "text-charcoal"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
