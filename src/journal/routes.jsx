import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Layout} from '../common/components/Layout';
import {Dashboard} from './components/Dashboard';
import {NewEntry} from './components/NewEntry';
import {Entry} from './components/Entry';
import {Trash} from '../trash/components/Trash';
import {HomePage} from '../common/components/HomePage';

function AppRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/new-entry" element={<NewEntry />} />
                <Route path="/trash" element={<Trash />} />
            </Routes>
        </Layout>
    );
}

export default AppRoutes