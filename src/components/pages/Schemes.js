import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";
import Pagination from "../layout/Pagination";
import Carousel from "../layout/Carousel";

const Schemes = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const [showPerPage,setShowPerPage]=useState(8);
  const [pagination, setPagination] = useState({
    start:0,
    end:showPerPage
  });
  const onPaginationChange=(start,end)=>{
    setPagination({start:start,end:end})

  }
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/api/schemeSchema");
    setUser(result.data);
    console.log(result);
  };
  return (
    <div>
      <Carousel/>
      <section>
      <h1 style={{ textAlign: "center" }}>SCHEMES AVAILABLE FOR MARKET PRICE</h1>
      <p style={{ textAlign: "justify", color: "gray",margin:'5px' }}>
        Minimum Support Price (MSP) is a form of market intervention by the
        Government of India to insure agricultural producers against any sharp
        fall in farm prices. The minimum support prices are announced by the
        Government of India at the beginning of the sowing season for certain
        crops on the basis of the recommendations of the Commission for
        Agricultural Costs and Prices (CACP). MSP is price fixed by Government
        of India to protect the producer - farmers - against excessive fall in
        price during bumper production years. The minimum support prices are a
        guarantee price for their produce from the Government. The major
        objectives are to support the farmers from distress sales and to procure
        food grains for public distribution. In case the market price for the
        commodity falls below the announced minimum price due to bumper
        production and glut in the market, government agencies purchase the
        entire quantity offered by the farmers at the announced minimum price.
      </p>
      </section>
      <div classNmae="container">
        <div classNmae="py-4">
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">title</th>
                <th scope="col">State</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(pagination.start,pagination.end).map((users, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  {/* <td>{users.id}</td> */}
                  <td>{users.title}</td>
                  <td>{users.State}</td>

                  <td>{users.Website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}/>
      </div>
    </div>
  );
};

export default Schemes;
