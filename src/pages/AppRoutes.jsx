import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';
import Dashboard from '../components/Dashboard';
import NewEntry from '../components/NewEntry';
import Entry from '../components/Entry';
import Trash from '../components/Trash';

function AppRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/new-entry" element={<NewEntry />} />
                <Route path="/trash" element={<Trash />} />
            </Routes>
        </Layout>
    );
}

export default AppRoutes