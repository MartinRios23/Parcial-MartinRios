import React from "react";
import './Table.css';


function Table({ region }) {
  if (!region) return null;
  return (
    <div className="tableContainer">
      <table>
        <tr>
          <th>name</th>
          <th>capital</th>
          <th>region</th>
          <th>population</th>
          <th>area</th>
          <th></th>
        </tr>
        {region.map((i) => {
          return (
            <tr>
              <td>{i.name}</td>
              <td>{i.capital}</td>
              <td>{i.region}</td>
              <td>{i.population}</td>
              <td>{i.area}</td>
              <td>
                <a href={i.flag}>Details</a>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
