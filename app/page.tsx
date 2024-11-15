"use client"

import { useState } from 'react';
import Link from 'next/link';

function ResumeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    const formData = {
      name,
      email,
      phone,
      summary,
      education,
      experience,
      skills,
      projects,
      image
    };
    localStorage.setItem('resumeData', JSON.stringify(formData));

    alert('Resume data saved successfully!')
  }

  return (
    <div className="contain w-full flex justify-center items-center p-5">
      <div className="myleft w-[50%]">
        <img className="h-[1010px] w-full rounded-md" src="https://play-lh.googleusercontent.com/JbYSifXLD71pQ8NB7tyaSsReFwfU3mVsqDBdpf__-B10RWdCHB_X2U5nfL4_7j9M0WE" alt="" />
      </div>
      <div className='rightMy min-h-[100vh] w-[50%] border border-gray-300 shadow-2xl p-8 rounded-lg'>
        <h1 className='text-[30px] text-center'>Resume Builder</h1>
        <br />
        <form className='flex flex-col gap-5'>
          <input className='outline-none h-[40px] w-[95%] border border-gray-500 rounded-md pl-2' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input className='h-[40px] outline-none w-[95%] border border-gray-500 rounded-md pl-2' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className='h-[40px] w-[95%] outline-none border border-gray-500 rounded-md pl-2' type="tel" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          <textarea className='h-[100px] w-[95%] outline-none border border-gray-500 rounded-md pl-2 pt-1' placeholder='Summary' value={summary} onChange={(e) => setSummary(e.target.value)} />
          <textarea className='h-[100px] w-[95%] outline-none border border-gray-500 rounded-md pl-2 pt-1' placeholder='Education' value={education} onChange={(e) => setEducation(e.target.value)} />
          <textarea className='h-[100px] w-[95%] outline-none border border-gray-500 rounded-md pl-2 pt-1' placeholder='Experience' value={experience} onChange={(e) => setExperience(e.target.value)} />
          <textarea className='h-[100px] w-[95%] outline-none border border-gray-500 rounded-md pl-2 pt-1' placeholder='Skills' value={skills} onChange={(e) => setSkills(e.target.value)} />
          <textarea className='h-[100px] w-[95%] outline-none border border-gray-500 rounded-md pl-2 pt-1' placeholder='Projects' value={projects} onChange={(e) => setProjects(e.target.value)} />
          <input type="text" className='h-[45px] w-[95%] outline-none border border-gray-500 rounded-md pl-2 pt-1' placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)} />
          <button type="button" className='bg-blue-700 h-[45px] rounded-md w-[95%] text-white' onClick={handleSubmit}>Generate Resume</button>
       <Link href={'/resume'}>   <button type="button" className='bg-blue-700 h-[45px] rounded-md w-[95%] text-white'>See Resume</button>
       </Link>
        </form>
      </div>
    </div>
  );
}

export default ResumeForm;
