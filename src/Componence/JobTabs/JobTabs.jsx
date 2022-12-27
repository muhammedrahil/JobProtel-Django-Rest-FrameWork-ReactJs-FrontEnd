import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobPart from '../JobPart/JobPart';
import Job_Description_Part from '../Job_Description_Part/Job_Description_Part';
import "./JobTabs.css";
import axios from "../../Utils/Axios";

const JobTabs = () => {
  const [key, setKey] = useState('jobs');
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    alljobs()
  }, [])

  const alljobs = async () => {
    const res = await axios.get('api/jobs/').then(async (responce) => {
      if (responce.status === 200) {
        setjobs(responce.data.results);
        console.log('jobs get successfully');
      }
    })
  }

  return (
    <Container className='' >
      <div className="row mt-4 p-2">
        <div className="col-lg-3"></div>
        <Tabs id="uncontrolled-tab-example" defaultActiveKey="jobs"
          fill activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 col-lg-6" >
          <Tab eventKey="jobs" title={<h3>Job feed</h3>} className='col-lg-12'>
            <div className="row " >
              <div className="col-lg-6 col-12">
                {
                  jobs.map((item, index) => {
                    return (
                      <JobPart key={item.id} job={item}  />
                    )
                  })}
              </div>
              <div className="col-lg-6 " >
                <Job_Description_Part/>
              </div>
            </div>
          </Tab>
          <Tab eventKey="recent" title={<h3>Recent searches</h3>} className='col-lg-6'>
          </Tab>
        </Tabs>
        <div className="col-lg-3"></div>
      </div>
    </Container>
  )
}

export default JobTabs
