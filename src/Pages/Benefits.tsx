import { useParams } from 'react-router-dom';
import { MySpace3dBenefits, Store3dBenefits } from '../Components';

type Props = {};

const Benefits = (props: Props) => {
  const { type } = useParams();

  return (
    <div>
      {type == 'myspace3d' && <MySpace3dBenefits />}
      {type === 'store3d' && <Store3dBenefits />}
    </div>
  );
};

export default Benefits;
