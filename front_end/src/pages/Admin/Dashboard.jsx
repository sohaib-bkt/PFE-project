
import {Chart as ChartJS} from 'chart.js/auto';
import {Bar ,Pie} from 'react-chartjs-2'
import '@Css/customAdmincss.css';
import AdminNav from './AdminNav';
import { useEffect, useState } from 'react';
import axiosClient from '../../api/axios';
export default function Dashbord() {
   const [data , setData] = useState({});
   useEffect(() => {
     axiosClient.get('http://localhost:8000/api/dashboard/getdatacharts').then((res) => {
       setData(res.data)
       console.log(res.data);
     })
   },[])
    return (
        <>
     
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <AdminNav/>
              <div className="container-fluid">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                  <a
                    href="#"
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  >
                    <i className="fas fa-download fa-sm text-white-50" /> Generate
                    Report
                  </a>
                </div>
                {/* Content Row */}
                <div className="row">
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Users
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {data.user}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Products
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {data.product}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                              Tasks
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                  {data.reportTruePercentage}%
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm mr-2">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: `${data.reportTruePercentage}%` }}
                                    aria-valuenow={data.reportTruePercentage}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pending Requests Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Pending Requests
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {data.pending}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Row */}
                <div className="row">
                  {/* Area Chart */}
                  <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Earnings Overview
                        </h6>
                       
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <div  >
                        <Bar
                        data={{
                          labels: data.months, 
                          datasets: [
                            {
                              label: 'User Registration',
                              data: data.monthCount, 
                              backgroundColor: 'rgba(54, 162, 235, 0.6)',
                              borderColor: 'rgba(54, 162, 235, 1)',
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          scales: {
                            y: {
                              beginAtZero: true,
                              precision: 0,
                              ticks: {
                                stepSize: 1,
                              },  
                            },
                          },
                        }}
                      />

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pie Chart */}
                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Revenue Sources
                        </h6>
                    
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <div style={{width: '10'}}>
                          <Pie data={{labels: ['Red', 'Blue', 'Yellow'],datasets:[{label:'My First Dataset',data:[300,50,100],backgroundColor:['rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)']}]}}/>
                        </div>
                        <div className="mt-4 text-center small">
                          <span className="mr-2">
                            <i className="fas fa-circle text-primary" /> Direct
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-success" /> Social
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-info" /> Referral
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Row */}
                </div></div></div>
      </>
      
    );
}