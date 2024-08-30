import { Link } from 'react-router-dom';
import { CustomButton } from 'src/components/common';

function Home() {
  return (
    <div className="container" style={{ paddingTop: 50 }}>
      <Link to="/help">
        <CustomButton type="primary">Go to help page</CustomButton>
      </Link>
    </div>
  );
}

export default Home;
