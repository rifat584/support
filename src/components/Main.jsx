import React, { use, useState } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { Suspense } from "react";
import { toast } from "react-toastify";
import Aside from "./Aside";

const Main = ({ showTickets }) => {
  const ticketsInfo = use(showTickets);

  const [count, setCount] = useState([]);
  const [resolved, setResolved] = useState([]);

  const countProgress = (ticket) => {
    // console.log(ticket);
    const newCount = [...count, ticket];
    setCount(newCount);
  };

  const showResolved = (issue) => {
    const { description } = issue;
    const allResolved = [...resolved, description];
    setResolved(allResolved);
    toast.success("Task Resolved!");
    setCount((prevCount) =>
      prevCount.filter((ticket) => ticket.id !== issue.id)
    );
  };

  return (
    <div className="container mx-auto my-12">
      <TopSection count={count} resolved={resolved}></TopSection>

      <div className="lg:flex">
      <Suspense fallback={<p>Data is Loading...</p>}>
        <BottomSection
          ticketsInfo={ticketsInfo}
          count={count}
          resolved={resolved}
          countProgress={countProgress}
          showResolved={showResolved}
        ></BottomSection>
      </Suspense>
      
      <Aside count={count} resolved={resolved} showResolved={showResolved} countProgress={countProgress}></Aside>
      </div>
    </div>
  );
};

export default Main;
