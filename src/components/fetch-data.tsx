import { useState, useEffect } from "react";

export default function FetchData() {
  // displayName = FetchData.name;
  const [state, setState] = useState({
    records: [],
    loading: true,
  });

  useEffect(() => {
    populateRecordsData();
  });

  const renderRecordsTable = (records: any) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: any) => (
            <tr key={record.date}>
              <td>{record.title}</td>
              <td>{record.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const populateRecordsData = async () => {
    const response = await fetch("archive");
    console.log(response);

    // try {
    const data = await response.json();
    console.log(data);
    setState({ records: data, loading: false });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  let contents = state.loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderRecordsTable(state.records)
  );

  return (
    <div>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
};
