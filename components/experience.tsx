import WorkCard from "./work-card";

const Experience = () => {
  return (
    <div className="mt-12">
      <div>
        <h2 className="text-xs text-gray-500">Featured</h2>
        <h1 className="text-3xl font-bold">Experience</h1>
      </div>
      <div>
        <WorkCard src={'/realtygenielogo.png'} alt="realty" startingDate="December 2025" endingDate="Present" location="Canada (remote)" jobRole="Full Stack Developer" companyName="RealtyGenie"/>
      </div>
    </div>
  );
};
export default Experience;
