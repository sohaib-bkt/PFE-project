import { useState, useEffect } from 'react';
import AdminNav from './AdminNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axiosClient from '../../api/axios';
import HashLoader from 'react-spinners/HashLoader';

function AdminAbuseReportsPage() {
  const [abuseReports, setAbuseReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAbuseReports, setFilteredAbuseReports] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setFilteredAbuseReports(abuseReports);
  }, [abuseReports]);

  useEffect(() => {
    axiosClient.get('api/abuse-reports')
      .then(response => {
        setAbuseReports(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching abuse reports:', error);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredReports = abuseReports.filter(report =>
      report.reporter.name.toLowerCase().includes(query) ||
      report.reported.name.toLowerCase().includes(query) ||
      report.message.toLowerCase().includes(query)
    );
    setFilteredAbuseReports(filteredReports);
  };

  const handleClearResolved = () => {
    axiosClient.delete('http://localhost:8000/api/abuse-reports/clear-resolved')
      .then(response => {
        const unresolvedReports = abuseReports.filter(report => !report.status);
        setAbuseReports(unresolvedReports);
      })
      .catch(error => {
        console.error('Error clearing resolved reports:', error);
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
  if (loading) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
        <HashLoader color="red" loading={loading} size={80} />
      </div>
    );
  }
  

  return (
    
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
                style={{ width: "230px", marginTop: '10px' }}
              />
              <button className="btn btn-success btn-icon-split" onClick={handleClearResolved} style={{ marginTop: '10px' }}>
                <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faBroom} />
                </span>
                <span className="text">Clear Resolved Reports</span>
              </button>
            </div>
          </div>
          <div className="row">
            {filteredAbuseReports.map(report => (
              <div key={report.id} className="col-lg-4 mb-4">
                <div className={`card border-left-${report.status ? 'success' : 'danger'} shadow h-100`}>
                  <div className="card-body p-1">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th>Reporter:</th>
                          <td>{report.reporter.name}</td>
                        </tr>
                        <tr>
                          <th>Reported:</th>
                          <td>{report.reported.name}</td>
                        </tr>
                        <tr>
                          <th>Product Name:</th>
                          <td>{report.product.name}</td>
                        </tr>
                        <tr>
                          <th>Message:</th>
                          <td>{report.message}</td>
                        </tr>
                        <tr>
                          <th>Status:</th>
                          <td><div className={`h6 mt-1 text-${report.status == true ? 'success' : 'danger'}`}>{report.status == true ? 'Resolved' : 'Unresolved'}</div></td>
                        </tr>
                        {!report.status && (
                          <tr>
                            <th></th>
                            <td>
                              <button className="btn btn-success btn-sm" onClick={() => handleResolveReport(report.id)}>
                                <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                                Resolve
                              </button>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
   
  );
}

export default AdminAbuseReportsPage;
