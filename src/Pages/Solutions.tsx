import { useParams } from 'react-router-dom';

type Props = {};

const Solutions = (props: Props) => {
  const { type } = useParams();
  return (
    <div>
      <h1>{type}</h1>
    </div>
  );
};

export default Solutions;
