import React from 'react'
import NavBar from '../../Componence/NavBar/NavBar'
import Search from '../../Componence/Search/Search'
import JobTabs from '../../Componence/JobTabs/JobTabs'


const Landing = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <NavBar/>
          <Search/>
          <JobTabs/>
        </div>
      </div>
      
    </div>
  )
}

export default Landing
