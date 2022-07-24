import logo from "./logo.svg";
import React from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import "./App.css";

const endpoint = "https://api.spacex.land/graphql/";
const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

function App() {
  // using GraphQL Request
  const { data, isLoading, error } = useQuery("launches", () => {
    return request(endpoint, FILMS_QUERY);
  });

  // using Fetch API
  // const { data, isLoading, error } = useQuery("launches", () => {
  //   return fetch(endpoint, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query: FILMS_QUERY })
  //   })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("Error fetching data");
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => data.data);
  // });

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return <pre>{error.message}</pre>;
  }

  return (
    <div className="App">
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
