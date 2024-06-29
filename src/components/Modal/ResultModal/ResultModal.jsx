import { useSelector } from "react-redux";

import { selectResult } from "../../../redux/userChat/userChatSelector";
import { StyledTopicTitle } from "../../../pages/Home/Home.styled";

export const ResultModal = () => {
  const result = useSelector(selectResult).feedback;
  let res = null;
  if (result) {
    res = JSON.parse(result.feedback);
  }
  console.log(result);
  return (
    <>
      {res && (
        <>
          <StyledTopicTitle>Your result for today:</StyledTopicTitle>
          <p>
            <span>{"Dialog rating: "}</span>
            <span>{res?.dialog_rating}</span>
          </p>
          <p>
            <span>{"Grammar mistakes: "}</span>
            <span>{res?.dialog_rating}</span>
          </p>
          <p>
            <span>{"Vocabulary mistakes: "}</span>
            <span>{res?.vocabulary_mistakes}</span>
          </p>
        </>
      )}
      {!res && <StyledTopicTitle>We have some problem with loading data. Please, try else.</StyledTopicTitle>}
    </>
  );
};
