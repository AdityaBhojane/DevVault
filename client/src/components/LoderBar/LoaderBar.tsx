
import {Flex, Progress } from 'antd';

const LoaderBar = ({percent}:{percent:number}) => {

//   const decline = () => {
//     setPercent((prevPercent) => {
//       const newPercent = prevPercent - 10;
//       if (newPercent < 0) {
//         return 0;
//       }
//       return newPercent;
//     });
//   };

  return (
    <Flex vertical gap="small">
      <Flex vertical gap="small">
        <Progress percent={percent} type="circle" />
      </Flex>
    </Flex>
  );
};

export default LoaderBar;