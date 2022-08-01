import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // static displayName = Home.name;

  const [state, setState] = useState({
    records: [],
    loading: true,
  });

  const populateData = async () => {
    const response = await fetch("archive");

    const data = response.json();
    setState({ records: data, loading: false });
  };
  // useEffect(() => {
  //   if (state.loading == false) {
  //     return;
  //   }
    populateData();
  // }, [state]);

  // Fetching data from db
  const renderTable = (records) => {
    return (
      <table className="mt-8 text-sm text-left w-full xl:w-3/4">
        <tbody>
          {console.log(records)}
          {/* {records.map((record) => (
            <tr className="bg-white border-b" key={record.date}>
              <th scope="row" className="py-4  font-normal whitespace-nowrap">
                <a href="/record/id">{record.title}</a>
              </th>
              <td className="px-6 py-4 font-light">
                <a href="/record/id">{record.date}</a>
              </td>
            </tr>
          ))} */}
          <tr className="bg-white">
            <th
              colSpan={2}
              scope="row"
              className="text-center py-4 text-gray-400 font-light whitespace-nowrap"
            >
              <Link to="/text-edit" title="new record">
                New
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    );
  };


  let contents = state.loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderTable(state.records)
  );

  return (
    <div className="flex flex-col items-center">
      <main className="w-3/5 px-2 py-3">
        <div className="flex flex-col items-center px-4">
          <span className="text-lg pb-4">Archive</span>
          {contents}
        </div>
      </main>
    </div>
  );
};

export default Home;
