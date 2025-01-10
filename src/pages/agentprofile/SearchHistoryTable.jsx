import React, { useState } from 'react';
import { Search, Copy, Pencil } from 'lucide-react';
import Button from '@/components/ui/Button.jsx';
import Input from '@/components/ui/Input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';

const TableHeader = () => (
  <thead>
    <tr className="border-b bg-gray-50">
      <th className="w-12 px-4 py-3">
        <Checkbox />
      </th>
      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
        Investor Name
      </th>
      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
        Property Name
      </th>
      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
        Contacted
      </th>
      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
        Location
      </th>
      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
        Status
      </th>
      <th className="w-20 px-4 py-3"></th>
    </tr>
  </thead>
);

const TableRow = ({ data }) => (
  <tr className="hover:bg-gray-50 border-b">
    <td className="px-4 py-3">
      <Checkbox />
    </td>
    <td className="px-4 py-3 text-sm">{data.investor}</td>
    <td className="px-4 py-3 text-sm text-violet-600">{data.property}</td>
    <td className="px-4 py-3 text-sm">{data.contacted}</td>
    <td className="px-4 py-3 text-sm">{data.location}</td>
    <td className="px-4 py-3">
      <span
        className={`inline-flex px-2 py-1 rounded-full text-xs
        ${
          data.status === 'Active'
            ? 'bg-green-50 text-green-700'
            : 'bg-blue-50 text-blue-700'
        }`}
      >
        {data.status}
      </span>
    </td>
    <td className="px-4 py-3">
      <div className="flex gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Copy className="h-4 w-4 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Pencil className="h-4 w-4 text-gray-500" />
        </Button>
      </div>
    </td>
  </tr>
);

const SearchHistoryTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const tableData = [
    {
      investor: 'Charles T',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Active',
    },
    {
      investor: 'Davis Torff',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
    {
      investor: 'Zain Korsgaard',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
    {
      investor: 'Martin Philips',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
    {
      investor: 'Anika Dias',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
    {
      investor: 'Miracle Geidt',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <TableHeader />
          <tbody>
            {tableData.map((row, index) => (
              <TableRow key={index} data={row} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map(page => (
            <Button
              key={page}
              variant={currentPage === page ? 'secondary' : 'ghost'}
              className="w-8 h-8 p-0"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
        </div>
        <Button
          variant="ghost"
          onClick={() => setCurrentPage(prev => Math.min(4, prev + 1))}
          disabled={currentPage === 4}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SearchHistoryTable;
