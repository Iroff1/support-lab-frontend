import CSInquirementSuccess from '@components/cs/CSInquirementSuccess';
import CSInquirementContainer from '@containers/cs/CSInquirementContainer';
import { useState } from 'react';

const CSInquirementPage = () => {
  const [isDone, setIsDone] = useState(false);
  // const [isDone, setIsDone] = useState(true); // test code

  return (
    <>
      {isDone ? (
        <CSInquirementSuccess
          setIsDone={() => {
            setIsDone(false);
          }}
        />
      ) : (
        <CSInquirementContainer
          setIsDone={() => {
            setIsDone(true);
          }}
        />
      )}
    </>
  );
};

export default CSInquirementPage;
