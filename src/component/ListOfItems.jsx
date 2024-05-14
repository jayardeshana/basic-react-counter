import React from "react";
import Items from "../Items.js";
import "../css/ItemListStyle.css";
const ListOfItems = () => {
  return (
    <div className="items-table">
      <h2>Items Table</h2>
      <table className="table-container">
        <thead className="table-data">
          <tr>
            <th className="table-head">Item Name</th>
            <th className="table-head">Price</th>
            <th className="table-head">Code</th>
            <th className="table-head">Seller</th>
          </tr>
        </thead>
        <tbody>
          {Items.map((item, index) => (
            <tr key={index}>
              <td className="table-data">{item.item_name}</td>
              <td className="table-data">${item.item_price}</td>
              <td className="table-data">{item.item_code}</td>
              <td className="table-data">{item.item_seller}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfItems;
