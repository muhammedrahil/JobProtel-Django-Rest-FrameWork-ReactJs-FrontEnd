import React, { useEffect, useState } from 'react'
import { ImPriceTags } from 'react-icons/im';
import { HiShoppingBag } from 'react-icons/hi';
import { AiFillClockCircle } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import axios from "../../Utils/Axios";

const Job_Description_Part = () => {
  let { id } = useParams();
  const [singlesjob, setsinglejob] = useState(null)
  const [qualification,Setqualification] = useState([])
  const [fulljobdescriptions,Setfulljobdescriptions] = useState(null)
  const [jobdescriptions,Setjobdescriptions] = useState([])



  useEffect(() => {
    singlejob();
    Qualifications();
    fulljobdescription();
    jobdescription();
  }, [id])

  const singlejob = async () => {
    const res = await axios.get(`api/jobs/${id}/`).then((responce) => {
      if (responce.status === 200) {
        setsinglejob(responce.data);
        console.log('job get successfully');
      }
    })
  }

  const Qualifications = async () => {
    const res = await axios.get(`api/jobqualification/${id}/`).then((responce) => {
      if (responce.status === 200) {
        Setqualification(responce.data);
        console.log('Qualifications get successfully');
      }
    })
  }


  const fulljobdescription = async () => {
    const res = await axios.get(`api/fulljobdescription/${id}/`).then((responce) => {
      if (responce.status === 200) {
        Setfulljobdescriptions(responce.data[0]);
        console.log('fulljobdescription get successfully');
      }
    })
  }

  const jobdescription = async () => {
    const res = await axios.get(`api/job-description/${id}/`).then((responce) => {
      if (responce.status === 200) {
        Setjobdescriptions(responce.data);
        console.log('fulljobdescription get successfully');
      }
    })
  }

  return (
    <div className='sticky-lg-top col-lg-10 col-0  m-1 shadow border-primary p-3 border rounded' style={{ "zIndex": "1" }} >
      <div className='sticky-top' style={{ "backgroundColor": "white", "lineHeight": "8px" }}>
        <h5 className='fw-bold'>{singlesjob ? singlesjob.job_name.name : ''}</h5>
        <p><a href={singlesjob ? singlesjob.company_name.website_link : ''} >{singlesjob ? singlesjob.company_name.name : ''}</a></p>
        <p>{singlesjob ? singlesjob.company_city.name : ''}, {singlesjob ? singlesjob.company_state.name : ''}, {singlesjob ? singlesjob.company_contry.name : ''}</p>
        <p class="text-dark "> ₹{singlesjob ? singlesjob.start_month_salary : ''} - ₹{singlesjob ? singlesjob.end_month_salary : ''} a month</p>
        <Button className='col-lg-3 fw-bold shadow' >Apply Now </Button>
        <hr />
      </div>
      <div>
        <div className='mt-3' style={{ "lineHeight": "4px" }}>
          <div className='p-1 m-1' style={{ "lineHeight": "1px" }}>
            <p><span className='fw-bold'><ImPriceTags /> Salary</span></p>
            <p class="badge bg-light shadow-sm text-dark "> ₹{singlesjob ? singlesjob.start_month_salary : ''} - ₹{singlesjob ? singlesjob.end_month_salary : ''} a month</p>
          </div>
          <div className='p-1 m-1'>
            <p><span className='fw-bold'><HiShoppingBag /> Job type</span></p>
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobtypes.type1} </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobtypes.type2} </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobtypes.type3} </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobtypes.type4} </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobtypes.type5} </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobtypes.type6} </p>: ''}
          </div>
          <div className='p-1 m-1'>
            <p><span className='fw-bold'><AiFillClockCircle /> Shift and schedule</span></p>
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobshifts.shift1 } </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobshifts.shift2 } </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobshifts.shift3 } </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobshifts.shift4 } </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobshifts.shift5 } </p>: ''}
            {singlesjob ? <p class="badge bg-light shadow-sm text-dark ms-1">  {singlesjob.company_jobshifts.shift6 } </p>: ''}
          </div>
        </div>
        <div style={{ "lineHeight": "8px" }}>
          <h5 className='fw-bold'>Qualifications</h5>
          <ul>
            {qualification.map((res,index)=>{
              return(
                <li key={index}><p>{res.qualification}  {res.totel_year ? ": "+res.totel_year+" year" : ""}  (Preferred)</p></li>
              )
            })}
          </ul>
        </div>
        <div style={{ "lineHeight": "8px" }}>
          <h5 className='fw-bold'>Full Job Description</h5>
          <div className='p-2'>
            <p>Position - {singlesjob ? singlesjob.job_name.name : ''}</p>
            <p>Framework- {fulljobdescriptions ? fulljobdescriptions.framework : ""}</p>
            <p>Exp- {fulljobdescriptions ? fulljobdescriptions.start_experince : ""} - {fulljobdescriptions ? fulljobdescriptions.end_experince : ""} years</p>
            <p>Job Type- {fulljobdescriptions ? fulljobdescriptions.job_type : ""}</p>
          </div>
        </div>
        <div style={{ "lineHeight": "18px" }}>
          <h5 className='fw-bold'>Job Description</h5>
          <div className='p-1'>
            {jobdescriptions.map((res,index) =>{
              return(
                <li key={index}>{res.job_description}</li>
              )
            })}
          </div>
        </div>
        <div>
          <h6 className='fw-bold'>Speak with the employer</h6>
          <small><a href="" className='text-decoration-none fs-6'>+91 {singlesjob ? singlesjob.company_phone_number : ''}</a></small>
        </div>
      </div>
    </div>
  )
}

export default Job_Description_Part
