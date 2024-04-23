import React from 'react';
import Prods from '@Components/Prods.jsx';

export default function Anonce() {
    return (
        <div className="container">
            <div className="row">
                {/* Sidebar */}
                <aside className="col-md-3">
                    <div className="card">
                        <article className="filter-group">
                            <header className="card-header">
                                <h6 style={{ fontWeight: 'bold', fontSize: '15px', margin: '10px' }}>Tri </h6>
                            </header>
                            <div className="card-body">
                                <RadioInput label="All Announcement (19)" />
                                <RadioInput label="Accepted (5)" />
                                <RadioInput label="Rejected (5)" />
                                <RadioInput label="Pending (3)" />
                            </div>
                        </article>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="col-md-9">
                    <div className="row">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <Prods key={index} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
      
    );
}

// Helper component for radio input
const RadioInput = ({ label }) => (
    <div className="form-check">
        <input className="form-check-input" type="radio" />
        <label className="form-check-label">{label}</label>
    </div>
);
