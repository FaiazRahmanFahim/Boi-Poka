import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const booksData = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="text-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <Books booksData={booksData}></Books>
      </Suspense>
    </>
  );
};

export default Home;
