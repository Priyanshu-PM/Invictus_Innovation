import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import NavbarList from '../components/NavbarList';

const StudentLayout = () => {
    const currentUser = useSelector((state) => state.user.user);

    // Redirect if not logged in or wrong role
    if (!currentUser) {
        return <Navigate to="/auth/sign-in" replace />;
    }

    if (currentUser.role !== 'student') {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <NavbarList />
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default StudentLayout;
