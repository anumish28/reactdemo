import React from 'react';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png';
import pic from '../pic.jpg';

function Dashboard() {
    return (
        <div className="container">
             
        <div className="col-sm-11 m-auto">
        <h1> Tests Summary </h1>
          <div className="web bg-light">
            <label> <b> Your tests </b> </label>
            <div className="dash">
              <table class="table table-hover">
                <tr>
                  <th> Title </th>
                  <th> Type </th>
                  <th> Project </th>
                  <th> Tester <br/>added </th>
                  <th> Tester <br/>finalised </th>
                  <th> Tester <br/>attended </th>
                  <th> Status </th>
                </tr>
                
                <tr>
                  <td> Test public autorise par Sosh </td>
                  <td> Web </td>
                  <td> Mind Area </td>
                  <td> 31 </td>
                  <td className="text-success"> 31 </td>
                  <td className="text-warning"> 0 </td>
                  <td> <button type="button" class="btn btn-outline-success"> Finished </button> </td>
                </tr>
              </table>
            </div>
          </div>
         </div>
         <br/><br/>
          <div className="col-sm-11 m-auto bg-light">
            <div className="image">
                <img src={logo} width="980px" alt="logo"/>
            </div>
            </div>
            <br/> <br/>
            <div className="col-sm-11 m-auto bg-light">
            <div className="pic">
                <img src={pic} width="980px" alt="logo"/>
            </div>
          </div> 
          </div>
      
        

    ) 
}

export default Dashboard;