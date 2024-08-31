import React, { useEffect, useState } from 'react';
import Footer from '@/components/global/Footer';
import Navbar from '@/components/global/Navbar';
import CompaniesList from './CompaniesList.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies.jsx';
import { useDispatch } from 'react-redux';

import { setSearchJobByText } from '@/redux/jobSlice.js';
import AdminJobsList from './AdminJobsList.jsx';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs.jsx';


const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setSearchJobByText(input))
  },[input])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto my-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 ">Admin Panel - Jobs</h1>
        <div className="flex justify-between items-center mb-6">
          <Input
            className="w-1/3 px-4 py-2 border rounded"
            placeholder="Filter by name"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")} className="bg-red text-white px-4 py-2 rounded shadow">
            Post New Job
          </Button>
        </div>
        <AdminJobsList />
      </div>
      <Footer />
    </div>
  );
};

export default AdminJobs;
