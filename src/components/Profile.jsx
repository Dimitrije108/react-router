import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>You can visit:</h2>
      <ul>
        <li>
          <Link to="popeye">Popeye page</Link>
        </li>
        <li>
          <Link to="spinach">Spinach page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Profile;