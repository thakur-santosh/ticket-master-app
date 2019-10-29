import React from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import CustomerList from './component/customer/list';
import Home from './component/home/home';
import DepartmentList from './component/department/list';
import EmployeeList from './component/employee/list';
import AddEmployee from './component/employee/add';
import ListEmployee from './component/employee/show';
import ListTickets from './component/ticker/list';



function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="alert alert-primary" role="alert">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/ticket" className="nav-link">Tickets</Link>
            </li>
            <li class="nav-item">
              <Link to="/department" className="nav-link">Department</Link>
            </li>
            <li class="nav-item">
              <Link to="/employee" className="nav-link">Employees</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/customer" component={CustomerList} />
          <Route path="/department" component={DepartmentList} />
          <Route path="/employee" component={EmployeeList} exact={true} />
          <Route path="/employee/add" component={AddEmployee} />
          <Route path="/employee/:id" component={ListEmployee} />
          <Route path="/ticket" component={ListTickets} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
