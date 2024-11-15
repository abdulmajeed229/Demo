"use client";
import { useEffect, useState } from 'react';

export default function ResumeSummary() {
  const [resumeData, setResumeData] = useState<any>({});

  useEffect(() => {
    const data = localStorage.getItem('resumeData');
    setResumeData(data ? JSON.parse(data) : {});
  }, []);

  return (
    <div className="w-full flex justify-center items-center p-5">
      <div className="min-h-[100vh] w-full md:w-[80%] lg:w-[50%] border border-gray-300 shadow-2xl p-8 rounded-lg">
        <h1 className="text-[24px] md:text-[30px] text-center">Resume</h1>
        <div className="flex flex-col gap-5">
          
          <div className="w-full flex justify-center">
          
            <img
              src={resumeData.image}
           
              className="h-24 w-24 md:h-32 md:w-32 rounded-full mt-2"
            />

          </div>

          <p className="text-sm md:text-base"><strong>Name:</strong> {resumeData.name}</p>
          <p className="text-sm md:text-base"><strong>Email:</strong> {resumeData.email}</p>
          <p className="text-sm md:text-base"><strong>Phone:</strong> {resumeData.phone}</p>
          <p className="text-sm md:text-base"><strong>Summary:</strong> <br /><br />{resumeData.summary}</p>
          <p className="text-sm md:text-base"><strong>Education:</strong> <br /><br />{resumeData.education}</p>
          <p className="text-sm md:text-base"><strong>Experience:</strong> <br /><br />{resumeData.experience}</p>
          <p className="text-sm md:text-base"><strong>Skills:</strong> <br /><br />{resumeData.skills}</p>
          <p className="text-sm md:text-base"><strong>Projects:</strong><br /><br /> {resumeData.projects}</p>
        </div>
      </div>
    </div>
  );
}
