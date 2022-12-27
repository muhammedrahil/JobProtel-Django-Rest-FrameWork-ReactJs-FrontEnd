import React, { useState } from 'react'
import { ImPriceTags } from 'react-icons/im';
import { HiShoppingBag } from 'react-icons/hi';
import { AiFillClockCircle } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const getHour = (job) => {
  let job_date = new Date(job.created_date).getDate();
  let Now_date = new Date().getDate();
  if (job_date === Now_date) {
    let job_time = new Date(job.created_date).getHours();
    let Now_time = new Date().getHours();
    let hour = Now_time - job_time
    return hour
  }
}
const getMinute = (job) => {
  let Now_time = new Date().getMinutes();
  let Minute_time = new Date(job.created_date).getMinutes()
  let Minute = Now_time - Minute_time
  return Minute
}
const getDate = (job) => {
  return new Date(job.created_date).toLocaleDateString()
}

const JobPart = ({ job }) => {
  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/jobid/${id}`)
  }
  return (
    <div className="col-lg-10 col-12 ms-4 m-2 shadow border-primary p-3 border rounded " 
    style={{ "lineHeight": "8px", "cursor": "pointer" }} onClick={()=> {clickHandler(job.id)}}>
      <p>
        {getHour(job) <= 24 ? <span class="badge bg-primary">New</span> : null}
        {getHour(job) <= 24 ? <span className='mt-2 float-end text-success fw-bold'>
          {getHour(job) === 0 ? getMinute(job) + " minute" : getHour(job) + " Hours"} ago</span>
          : <span className='mt-2 float-end text-success fw-bold'> {getDate(job)} </span>}
      </p>
      <h5 className='fw-bold'>{job.job_name.name ? job.job_name.name : ''}</h5>
      <p>{job.company_name.name ? job.company_name.name : ''}</p>
      <p>{job.company_city.name ? job.company_city.name : ''}, {job.company_state.name ? job.company_state.name : ''}, {job.company_contry.name ? job.company_contry.name : ''}</p>
      <div className='p-2'>
        <span class="badge bg-light shadow-sm text-dark "><ImPriceTags /> ₹{job.start_month_salary ? job.start_month_salary : ''} - ₹{job.end_month_salary ? job.end_month_salary : ''} a month</span>
        <span class="badge bg-light shadow-sm text-dark ms-3"><HiShoppingBag /> {job.company_jobtypes.type1 ? job.company_jobtypes.type1 : ''} {job.company_jobtypes.type1 ? '+1' : ''} </span>
        <span class="badge bg-light shadow-sm text-dark ms-3"><AiFillClockCircle /> {job.company_jobshifts.shift1 ? job.company_jobshifts.shift1 : ''} {job.company_jobshifts.shift2 ? '+1' : ''}   </span>
      </div>
    </div>
  )
}

export default JobPart
