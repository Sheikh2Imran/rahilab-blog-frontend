import React from 'react'
import Posts from './Posts';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s9">
                    <Posts />
                </div>
                <div className="col s3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;