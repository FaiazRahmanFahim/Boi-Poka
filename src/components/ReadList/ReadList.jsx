import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadBooks } from "../../utility/AddToLS";
import ReadBook from "./ReadBook/ReadBook";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  //console.log(readList);

  const getAllData = useLoaderData();
  //console.log(getAllData);

  useEffect(() => {
    const getReadBookDataFromLS = getReadBooks();

    const convertedIds = getReadBookDataFromLS.map((id) => parseInt(id));

    const filterReadList = getAllData.filter((data) =>
      convertedIds.includes(data.bookId)
    );
    setReadList(filterReadList);
  }, [getAllData]);

  return (
    <div className="my-10 mx-auto">
      <Tabs className="text-xl font-bold">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readList.map((rb) => (
            <ReadBook key={rb.bookId} rb={rb}></ReadBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
