

const SectionHeader = ({ 
  title, 
  description, 
  paddingBottom = "pb-[50px]", // default padding
  titleClasses = "text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl font-bold text-white",
  descClasses = "text-gray-400 mt-5 text-2xl font-medium"
}) => {
  return (
    <div className={paddingBottom}>
      <h1 className={titleClasses}>{title}</h1>
      <p className={descClasses}>{description}</p>
    </div>
  );
};

export default SectionHeader;
