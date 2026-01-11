import React, { useState } from "react";

// The CategoryIcons object is kept as is, but the categories are updated
// to reflect Data Engineering domain, using the existing icons as placeholders.
const CategoryIcons = {
  "Data & Cloud Expertise": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Professional Experience": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "Architecture & Pipelines": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Data & Cloud Expertise": [
      // Sourced from Key skills and Summary
      "I have over 6 years of experience with Python and SQL, and Power BI & Tableau[cite: 6, 7, 34]. I am specialized in DBT, Python, SQL, and Power BI, consistently delivering scalable and efficient data pipelines[cite: 35]. My cloud experience includes 5+ years with AWS and Azure, and 4+ years with Snowflake / DBT[cite: 8, 9, 10].",
    ],
    "Professional Experience": [
      // Sourced from Summary and Career history
      "I am an experienced Data Engineer with 6 years at top companies like Siemens and ExxonMobil[cite: 34]. My proven ability includes designing modern architectures, migrating data products, and optimizing workflows to maximize ROI[cite: 36]. Currently, I am a Senior Data Engineer at ExxonMobil, driving the migration of legacy products into a modern data mesh architecture using Snowflake, DBT, Azure, AWS, and Terraform[cite: 38, 40, 41].",
    ],
    "Architecture & Pipelines": [
      // Sourced from Achievements and Key responsibilities
      "I design and optimize DBT models in Snowflake and Azure to deliver scalable data pipelines[cite: 43]. I have successfully migrated legacy reports into modern data mesh architectures and built reporting environments like Microsoft Fabric[cite: 44]. A key achievement was cutting report refresh times from 2-3 hours to just 5 minutes by optimizing DBT models and cloud workflows[cite: 47]. I also led the modernization of legacy pipelines by replacing Microsoft SSIS with Python-based solutions[cite: 64, 68].",
    ],
    "Teamwork & Processes": [
      // Sourced from Key responsibilities and Achievements (general team/process items)
      "I partner with business teams to enable self-service analytics and streamline data operations[cite: 45]. I act as an internal consultant, ensuring data accuracy, operational efficiency, and maintainable systems[cite: 55]. I collaborate with cross-functional teams, including Data Science teams in the US and Brazil, to enhance models and product analytics[cite: 74, 85]. I leverage automation to improve team productivity and operational efficiency, for example, automating report generation to save 20 hours/month[cite: 57, 70, 93].",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center px-4 text-left">
      <div className="mx-auto w-full max-w-4xl">
        {/* Changed the main heading to English */}
        <h2 className="text-white text-center text-4xl font-bold drop-shadow-[2px_2px_0_#7836cf]">
          About Me and My Work
        </h2>
        <ul className="mt-8 space-y-4 text-lg drop-shadow-[2px_2px_0_#7836cf]">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all"
              >
                <div className="flex items-center gap-3 p-4">
                  {/* Icons are matched by the new English category name */}
                  {CategoryIcons[category] || CategoryIcons["Data & Cloud Expertise"]}
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[200px] min-w-0 overflow-hidden md:max-w-none">
                      {/* Category name is now in English */}
                      <span className="block truncate text-lg text-white drop-shadow-[1px_1px_0_#7836cf] font-bold">
                        {category}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 shrink-0 transform text-[#6a2cbb] transition-transform ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.05020 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${
                    openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[0.8em] text-white text-semibold ">
                    {/* The content is now an array of strings (sentences) from the CV */}
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            {item}
                        </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillsList;