import { useState, useEffect } from 'react';
import AdminNav from './AdminNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axiosClient from '../../api/axios';

function AdminAbuseReportsPage() {
  const [abuseReports, setAbuseReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axiosClient.get('api/abuse-reports')
      .then(response => {
        setAbuseReports(response.data);

        console.log('Abuse reports:', response.data);
      })
      .catch(error => {
        console.error('Error fetching abuse reports:', error);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredReports = abuseReports.filter(report =>
      report.reporter.toLowerCase().includes(query) ||
      report.reportedUser.toLowerCase().includes(query) ||
      report.description.toLowerCase().includes(query) ||
      report.status.toLowerCase().includes(query)
    );
    setAbuseReports(filteredReports);
  };

  const handleClearResolved = () => {
    axiosClient.delete('http://localhost:8000/api/abuse-reports/clear-resolved')
      .then(response => {
        const unresolvedReports = abuseReports.filter(report => report.status != true);
        setAbuseReports(unresolvedReports);
      })
      .catch(error => {
        console.error('Error clearing resolved reports:', error);
        // Optionally, you can show an error message to the user.
      });
};



const handleResolveReport = (id) => {
    axiosClient.put(`http://localhost:8000/api/abuse-reports/${id}/resolve`)
      .then(response => {
        const updatedReports = abuseReports.map(report =>
          report.id === id ? { ...report, status: true } : report
        );
        setAbuseReports(updatedReports);
      })
      .catch(error => {
        console.error('Error resolving report:', error);
      });
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
                <div className={`card border-left-${report.status == true ? 'success' : 'danger'} shadow h-100`}>
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-4">
                        <div className="text-xs font-weight-bold text-primary text-uppercase">Reporter</div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mt-3">Reported User</div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mt-3">Description</div>
                        <div className="text-xs font-weight-bold text-primary text-uppercase mt-3">Status</div>
                        {report.status == false && (
                          <button className="btn btn-success btn-sm mt-3" onClick={() => handleResolveReport(report.id)}>
                            <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                            Resolve
                          </button>
                        )}
                      </div>
                      <div className="col-8">
                        <div className="h6">{report.reporter.name}</div>
                        <div className="h6 mt-3">{report.reported.name}</div>
                        <div className="h6 mt-3">{report.message}</div>
                        <div className={`h6 mt-3 text-${report.status == true ? 'success' : 'danger'}`}>{report.status == true ? 'Resolved' : 'Unresolved'}</div>
                       
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
