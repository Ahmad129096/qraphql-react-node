//@ts-nocheck

import { gql, useQuery } from "@apollo/client";
import { LOAD_USERS } from "./GraphQl/Queries";
import { useEffect } from "react";
export default function GetUsers() {
  const { error, loading, data = [] } = useQuery(LOAD_USERS);

  console.log({ data, loading, error });
  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

  return (
    <>
      {loading ? (
        <h1>Loading data .....</h1>
      ) : (
        <>
          {data?.getAllUsers?.slice(0, 20)?.map((d) => (
            <>
              <h1>{d.id}</h1>
              <h1>{d.firstName}</h1>
              <h1>{d.lastName}</h1>
              <h1>{d.email}</h1>
            </>
          ))}
        </>
      )}
    </>
  );
}
