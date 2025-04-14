
type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
};

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
}: PageHeaderProps) => {
  return (
    <div 
      className="relative bg-law-navy py-24 px-4 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-law-navy/80"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-gray-200">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
