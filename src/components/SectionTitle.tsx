
type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
