import React, { useState } from 'react';
import { ArrowLeft, Eye, Edit, Check, Download, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const PayrollManagement = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Operations Manager',
      department: 'Operations',
      avatar: 'https://i.pravatar.cc/150?img=1',
      hours: {
        total: 168,
        regular: 160,
        overtime: 8
      },
      pay: {
        base: 5500,
        overtime: 420,
        bonus: 500,
        gross: 6520,
        deductions: {
          tax: 1248,
          insurance: 200,
          other: 200,
          total: 1448
        },
        net: 5072
      },
      status: 'Approved',
      paidDate: '1/31/2025'
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'Software Developer',
      department: 'Engineering',
      avatar: 'https://i.pravatar.cc/150?img=2',
      hours: {
        total: 152,
        regular: 152,
        overtime: 0
      },
      pay: {
        base: 4256,
        overtime: 0,
        bonus: 200,
        gross: 4456,
        deductions: {
          tax: 891,
          insurance: 150,
          other: 150,
          total: 1041
        },
        net: 3415
      },
      status: 'Pending',
      anomaly: true
    },
    {
      id: 3,
      name: 'Carol Davis',
      role: 'Technical Specialist',
      department: 'Support',
      avatar: 'https://i.pravatar.cc/150?img=3',
      hours: {
        total: 176,
        regular: 160,
        overtime: 16
      },
      pay: {
        base: 5120,
        overtime: 768,
        bonus: 300,
        gross: 6188,
        deductions: {
          tax: 1202,
          insurance: 180,
          other: 180,
          total: 1382
        },
        net: 4806
      },
      status: 'Draft',
      anomalies: 2
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Data Analyst',
      department: 'Analytics',
      avatar: 'https://i.pravatar.cc/150?img=4',
      hours: {
        total: 160,
        regular: 160,
        overtime: 0
      },
      pay: {
        base: 4800,
        overtime: 0,
        bonus: 800,
        gross: 7200,
        deductions: {
          tax: 1435,
          insurance: 250,
          other: 250,
          total: 1685
        },
        net: 5515
      },
      status: 'Paid',
      paidDate: '1/31/2025'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Paid': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalEmployees = employees.length;
  const totalPayroll = employees.reduce((sum, emp) => sum + emp.pay.gross, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
              <div className="h-6 border-l border-gray-300" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Payroll Entries - January 2025</h1>
                <div className="flex items-center space-x-4 mt-2 text-gray-600">
                  <span>{totalEmployees} employees</span>
                  <span>•</span>
                  <span>${totalPayroll.toLocaleString()} total</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Departments</option>
              <option>Operations</option>
              <option>Engineering</option>
              <option>Support</option>
              <option>Analytics</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Draft</option>
              <option>Paid</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Quick Add</span>
            </button>
          </div>
        </div>

        {/* Payroll Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">EMPLOYEE</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">HOURS</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">GROSS PAY</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">DEDUCTIONS</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NET PAY</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">STATUS</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={employee.avatar} 
                          alt={employee.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-gray-900">{employee.name}</span>
                            {employee.anomaly && (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-full">
                                1 anomaly
                              </span>
                            )}
                            {employee.anomalies && (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-full">
                                {employee.anomalies} anomalies
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{employee.role}</div>
                          <div className="text-sm text-gray-500">{employee.department}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{employee.hours.total}h total</div>
                        <div className="text-gray-500">
                          {employee.hours.regular}h reg, {employee.hours.overtime}h OT
                        </div>
                        <div className="text-gray-500">${employee.hours.total}/hr</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">${employee.pay.gross.toLocaleString()}</div>
                        <div className="text-gray-500">Base: ${employee.pay.base.toLocaleString()}</div>
                        <div className="text-gray-500">
                          {employee.pay.overtime > 0 && `OT: $${employee.pay.overtime}`}
                          {employee.pay.bonus > 0 && ` Bonus: $${employee.pay.bonus}`}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">${employee.pay.deductions.total.toLocaleString()}</div>
                        <div className="text-gray-500">Tax: ${employee.pay.deductions.tax}</div>
                        <div className="text-gray-500">Other: ${employee.pay.deductions.other}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">${employee.pay.net.toLocaleString()}</div>
                        {employee.paidDate && (
                          <div className="text-gray-500">Paid: {employee.paidDate}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(employee.status)}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                          <Edit className="h-4 w-4" />
                        </button>
                        {employee.status === 'Draft' && (
                          <button className="p-2 text-green-600 hover:text-green-700 rounded-lg hover:bg-green-50">
                            <Check className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
              ←
            </button>
            <div className="w-64 h-2 bg-gray-200 rounded-full">
              <div className="w-full h-2 bg-gray-400 rounded-full"></div>
            </div>
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;