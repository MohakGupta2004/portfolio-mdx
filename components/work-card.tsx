import Image from "next/image";

const WorkCard = ({
  src,
  alt,
  companyName,
  jobRole,
  startingDate,
  endingDate,
  location,
}: {
  src: string;
  alt: string;
  companyName: string;
  jobRole: string;
  startingDate: string;
  endingDate: string;
  location: string;
}) => {
  return (
    <div className="flex justify-between mt-5">
      <div className="flex gap-5">
        <Image
          src={src}
          height={20}
          width={50}
          alt="realty"
          className="rounded-lg"
        />
        <div>
          <h1 className="text-lg font-grotesk font-bold">{companyName}</h1>
          <h2 className="text-xs text-gray-600 dark:text-gray-400">
            {jobRole}
          </h2>
        </div>
      </div>
      <div className="text-right text-gray-600 dark:text-gray-400">
        <div className="text-sm">
          {startingDate} - {endingDate}
        </div>
        <div className="text-sm">{location}</div>
      </div>
    </div>
  );
};
export default WorkCard;
