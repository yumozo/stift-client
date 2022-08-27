import { useEffect, useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components'
//import './custom.css';

// function setToken(userToken: any) {
//   sessionStorage.setItem('token', JSON.stringify(userToken))
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   if (!tokenString) {
//     console.error('token string is empty')
//     return
//   }
//   const userToken = JSON.parse(tokenString)
//   return userToken?.token
// }

const StyledTable = styled.table`
  margin-top: 2rem;
  text-align: left;
  width: 100%;

  @media screen and (min-width: 1000px) {
  & {
    width: 75%;
  }

  th {
    padding: 1rem 0;
    white-space: nowrap;
  }

  // end with table style
}
`

export default function Home() {
  // const [token, setToken] = useState();
  // const token = getToken();

  // if (!token) {
  //   return (
  //     <Layout>
  //       <Login setToken={setToken} />
  //     </Layout>
  //   )
  // }
  const [recordsData, setRecordsData] = useState({
    records: [],
    loading: true,
  });

  useEffect(() => {
    populateData();
  }, [])

  const populateData = async () => {
    // UNCOMENT WHEN START TO WORK WITH FETCHING
    // const response = await fetch("archive");

    // const data = await response.json();
    // setRecordsData({ records: data, loading: false });
  };


  // Fetching data from db
  const renderTable = (records: any) => {
    return (
      <StyledTable>
        <tbody>
          {console.log(records)}
          {records.map((record: any) => (
            <tr key={record.date}>
              <th scope="row" className="py-4  font-normal whitespace-nowrap">
                <a href="/record/id">{record.title}</a>
              </th>
              <td className="px-6 py-4 font-light">
                <a href="/record/id">{record.date}</a>
              </td>
            </tr>
          ))}
          <tr>
            <th
              colSpan={2}
              scope="row"
              className="text-center py-4 font-light whitespace-nowrap"
            >
              <Link href="/text-edit" title="new record">
                New
              </Link>
            </th>
          </tr>
        </tbody>
      </StyledTable>
    );
  };


  let contents = recordsData.loading ? (
    <p>
      <em className="text-xl">Loading...</em>
    </p>
  ) : (
    renderTable(recordsData.records)
  );

  // return (
  //   <main className="flex flex-col items-center w-3/5 px-6 py-3">
  //     <span className="text-lg pb-4">Archive</span>
  //     {contents}
  //   </main>
  // );

  return (
    <>
      <main className="flex flex-col items-center w-3/5 px-6 py-3">
        <span className="text-lg pb-4">Archive</span>
        {contents}
      </main>
      {/* <Routes>
      {AppRoutes.map((route, index) => {
        const { element, ...rest } = route;
        return <Route key={index}
          {...rest}
          element={element} />;
      })}
    </Routes> */}
    </>
  );
}
