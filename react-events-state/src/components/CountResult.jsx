const CountResult = () => {
  console.log('Count result was rendered');
  return <h1>The current count is</h1>;
};

export default CountResult;

// Avoid child component being re-rendered
// when parent component is re-rendered
// as long as props haven't changed
// import { memo } from 'react';
// const CountResultMemoized = React.memo(CountResult);
// export default CountResultMemoized;
