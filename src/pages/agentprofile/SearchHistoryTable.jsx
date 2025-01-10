import React, { useState } from 'react';
import {
  Search,
  Copy,
  Pencil,
  Trash,
  ArrowLeftIcon,
  ArrowRightIcon,
} from 'lucide-react';
import Button from '@/components/ui/Button.jsx';
import Input from '@/components/ui/Input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import cn from '@/lib/cn';
import Pagination from './Pagination';

const TableHeader = () => (
  <thead>
    <tr className="border-b bg-gray-50">
      <th className="w-12 px-4 py-3">
        <Checkbox />
      </th>
      <th className="px-4 py-3 text-left text-xs font-semibold text-quaternary">
        Investor Name
      </th>
      <th className="px-4 py-3 text-left text-xs font-semibold text-quaternary">
        Property Name
      </th>
      <th className="px-4 py-3 text-left text-xs font-semibold text-quaternary">
        Contacted
      </th>
      <th className="px-4 py-3 text-left text-xs font-semibold text-quaternary">
        Location
      </th>
      <th className="px-4 py-3 text-left text-xs font-semibold text-quaternary">
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
    <td className="px-4 py-3 text-xs text-primary font-medium">
      {data.investor}
    </td>
    <td className="px-4 py-3  text-tertiary font-medium text-xs">
      {data.property}
    </td>
    <td className="px-4 py-3 text-tertiary font-medium text-xs">
      {data.contacted}
    </td>
    <td className="px-4 py-3 text-tertiary font-medium text-xs">
      {data.location}
    </td>
    <td className=" border-bPrimary rounded-md text-xs text-secondary font-medium ">
      <div className="items-center flex gap-1">
        <div
          className={cn(
            'inline-flex rounded-full text-xs bg-primary text-white h-3 w-3 ',
            data.status === 'Active' ? 'bg-[ #17b26a]' : 'bg-[#0ba5ec]',
          )}
        ></div>
        <span className={`inline-flex px-2 py-1 rounded-full text-xs   `}>
          {data.status}
        </span>
      </div>
    </td>
    <td className="px-4 py-3 cursor-pointer">
      <div className="flex gap-2">
        <Trash className="h-3 w-3 text-bQuinary" />
        <Pencil className="h-3 w-3 text-bQuinary" />
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

      <Pagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SearchHistoryTable;
