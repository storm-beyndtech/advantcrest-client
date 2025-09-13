import { useState } from 'react';
import { IoIosWarning } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function NoKycAlert() {
  const [show, setShow] = useState(true);

  return (
    show && (
      <div className="flex items-center p-3 mb-2 text-yellow-700 rounded-xl bg-yellow-50/10 dark:bg-gray-900/20 dark:text-yellow-500">
        <IoIosWarning className="flex-shrink-0 w-6 h-6 opacity-50" />
        <span className="sr-only">Info</span>
        <div className="ms-3 text-xs font-medium">
          We need your KYC Data for some action. Provide{' '}
          <Link to="/dashboard/kyc" className="font-semibold text-green-500">
            KYC Data.
          </Link>
        </div>
        <button
          onClick={() => setShow(false)}
          className="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
        >
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    )
  );
}
