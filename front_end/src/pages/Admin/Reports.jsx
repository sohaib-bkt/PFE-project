import React, { useState } from 'react';
import AdminNav from './AdminNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AdminAbuseReportsPage() {
  // Sample abuse reports data
  const initialAbuseReports = [
    {
      id: 1,
      reporter: 'User123',
      reportedUser: 'User456',
      description: 'Inappropriate behavior',
      status: 'pending'
    },
    {
      id: 2,
      reporter: 'User789',
      reportedUser: 'User101',
      description: 'Spamming',
      status: 'resolved'
    }
  ];

  const [abuseReports, setAbuseReports] = useState(initialAbuseReports);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredReports = initialAbuseReports.filter(report =>
      report.reporter.toLowerCase().includes(query) ||
      report.reportedUser.toLowerCase().includes(query) ||
      report.description.toLowerCase().includes(query) ||
      report.status.toLowerCase().includes(query)
    );
    setAbuseReports(filteredReports);
  };

  const handleClearResolved = () => {
    const unresolvedReports = abuseReports.filter(report => report.status !== 'resolved');
    setAbuseReports(unresolvedReports);
  };

  const handleResolveReport = (id) => {
    const updatedReports = abuseReports.map(report =>
      report.id === id ? { ...report, status: 'resolved' } : report
    );
    setAbuseReports(updatedReports);
  };

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <AdminNav />
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Abuse Reports</h1>
          </div>
          <div className="row mb-3">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search reports"
                value={searchQuery}
                onChange={handleSearch}
                style={{ width: "230px" , marginTop: '10px' }}
              />
              <button className="btn btn-success btn-icon-split" onClick={handleClearResolved} style={{marginTop: '10px'}}>
                <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faBroom} />
                </span>
                <span className="text">Clear Resolved Reports</span>
              </button>
            </div>
          </div>
          <div className="row">
            {abuseReports.map(report => (
              <div key={report.id} className="col-lg-4 mb-4">
                <div className={`card border-left-${report.status === 'resolved' ? 'success' : 'danger'} shadow h-100`}>
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-4">
                        <div className="text-xs font-weight-bold text-primary text-uppercase">Reporter</div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mt-3">Reported User</div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mt-3">Description</div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mt-3">Status</div>
                        {report.status === 'pending' && (
                          <button className="btn btn-success btn-sm mt-3" onClick={() => handleResolveReport(report.id)}>
                            <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                            Resolve
                          </button>
                        )}
                      </div>
                      <div className="col-8">
                        <div className="h6">{report.reporter}</div>
                        <div className="h6 mt-3">{report.reportedUser}</div>
                        <div className="h6 mt-3">{report.description}</div>
                        <div className={`h6 mt-3 text-${report.status === 'resolved' ? 'success' : 'danger'}`}>{report.status}</div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAbuseReportsPage;
