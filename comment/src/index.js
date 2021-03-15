import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to continue?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Penny"
          timeAgo="Today at 6:00PM"
          commentText="Happy Birthday!"
          imgSrc={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jason"
          timeAgo="Today at 5:30PM"
          commentText="Thanks!"
          imgSrc={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Angela"
          timeAgo="Yesterday at 12:00AM"
          commentText="Have a nice day!"
          imgSrc={faker.image.people()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
