import React from "react";

import FetchFailedImg from "../../assets/fetchFailed.jpg";
import { PAGE_SIZE, TABLE_COLUMNS } from "./constants.js";
import "./styles.css";
import Loader from "../Loader/index.jsx";
import ErrorPage from "../ErrorPage/index.jsx";

const Table = ({ dataSource, isLoading, isError }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" aria-label={TABLE_COLUMNS.SERIAL_NO}>
            {TABLE_COLUMNS.SERIAL_NO}
          </th>
          <th scope="col" aria-label={TABLE_COLUMNS.PERCENTAGE_FUNDED}>
            {TABLE_COLUMNS.PERCENTAGE_FUNDED} 
          </th>
          <th scope="col" aria-label={TABLE_COLUMNS.AMOUNT_PLEDGED}>
            {TABLE_COLUMNS.AMOUNT_PLEDGED} 
          </th>
        </tr>
      </thead>
  
      <tbody>
        {isLoading &&
          [...Array(PAGE_SIZE)].map((_, key) => {
            return <Loader key={key} />;
          })}
  
        {isError && (
          <tr role="row">
            <td colSpan="3">
              <ErrorPage
                imgUrl={FetchFailedImg}
                caption={"Failed to fetch data!"}
              />
            </td>
          </tr>
        )}
  
        {!isLoading &&
          !isError &&
          dataSource?.map((data, key) => {
            return (
              <tr role="row" key={key}>
                <td aria-label={data["s.no"]}>{data["s.no"]}</td>
                <td aria-label={data["percentage.funded"]}>
                  <div className="percentage-funded">{data["percentage.funded"]}</div>
                </td>
                <td aria-label={data["amt.pledged"]} className="amt-pledged">{data["amt.pledged"]}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
