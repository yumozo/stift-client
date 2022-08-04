import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  const [recordsData, setRecordsData] = useState({
    records: [],
    loading: true,
  });

  useEffect(() => {
    populateData();
  }, [])

  const populateData = async () => {
    const response = await fetch("archive");

    const data = await response.json();
    setRecordsData({ records: data, loading: false });
  };


  // Fetching data from db
  const renderTable = (records: any) => {
    return (
      <table className="mt-8 text-sm text-left w-full xl:w-3/4">
        <tbody>
          {console.log(records)}
          {records.map((record: any) => (
            <tr className="bg-white border-b" key={record.date}>
              <th scope="row" className="py-4  font-normal whitespace-nowrap">
                <a href="/record/id">{record.title}</a>
              </th>
              <td className="px-6 py-4 font-light">
                <a href="/record/id">{record.date}</a>
              </td>
            </tr>
          ))}
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


  let contents = recordsData.loading ? (
    <p>
      <em className="text-xl">Loading...</em>
    </p>
  ) : (
    renderTable(recordsData.records)
  );

  return (
    <main className="flex flex-col items-center w-3/5 px-6 py-3">
      <span className="text-lg pb-4">Archive</span>
      {contents}
    </main>
  );
};
