import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3 p-3">
          <div className="col-lg-6">
            <h3 className="text-white">Dashboard</h3>
          </div>
          <div className="col-lg-6">
            <div className="row mx-auto">
              <a href="existCustomer.html" className="btn btn-success mr-auto">
                Exist Customers
              </a>
              <a href="existInvoice.html" className="btn btn-success mr-auto">
                Exist Invoices
              </a>
              <a
                href="addInvoicePreStep.html"
                className="btn btn-success mr-auto"
              >
                <i className="fas fa-plus" /> New Invoice
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h3 className="lead text-white p-2 mb-0 bg-dark border-bottom">
            Overview
          </h3>
          <table id="invoices" className="table bg-white mt-0 p-0 b-shadow-2">
            <thead className="thead-dark">
              <tr>
                <th>Project</th>
                <th>Owner</th>
                <th>Processing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>
                  <a
                    href="aproveInvoice.html"
                    className="table-status bg-success text-white"
                  >
                    <small>ARE</small>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>
                  <a
                    href="aproveInvoice.html"
                    className="table-status bg-danger text-white"
                  >
                    <small>FNA</small>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>
                  <a
                    href="aproveInvoice.html"
                    className="table-status bg-warning text-white"
                  >
                    <small>MKT</small>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>
                  <a
                    href="aproveInvoice.html"
                    className="table-status bg-info text-white"
                  >
                    <small>OTH</small>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>
                  <a
                    href="aproveInvoice.html"
                    className="table-status bg-danger text-white"
                  >
                    <small>FNA</small>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>
                  <a
                    href="aproveInvoice.html"
                    className="table-status bg-success text-white"
                  >
                    <small>ARE</small>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>
                  <a
                    href="aproveInvoice.html"
                    className="table-status bg-success text-white"
                  >
                    <small>ARE</small>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>
                  <a
                    href="aproveInvoice.html"
                    className="table-status bg-danger text-white"
                  >
                    <small>FNA</small>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
