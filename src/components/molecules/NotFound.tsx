import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../atoms';

const NotFound: React.FC = () => {
  return (
    <main className="App h-screen bg-gradient-to-r from-bg-blue-left to-bg-blue-right p-16">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
          <Link
            to="/login"
          >
            <PrimaryButton text='Go to login page' />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
