import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
// Hooks
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
// images
import userNoImage from '../images/no-image-profile.png';
//react-icons
import { AiOutlineHome } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { TbLogout } from 'react-icons/tb';
//css
import './css/profile.css';

export const Profile = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();

	return (
		<main>
			<Nav />
			<div className="container">
				<div className="profile">
					<div className="side_bar">
						{/* Profile Image */}
						<img src={userNoImage} alt="profile image" />
						{/* Profile Details */}
						<ul className="details">
							<li>
								Username <span>{user && user.username}</span>
							</li>
						</ul>
						{/* Profile Menu */}
						<h3>Menu</h3>
						<ul className="menu">
							<li>
								<Link to="/">
									<AiOutlineHome /> Home
								</Link>
							</li>
							<li>
								<Link to="/details">
									<FiEdit /> Details
								</Link>
							</li>
							<li onClick={logout}>
								<TbLogout /> Logout
							</li>
						</ul>
					</div>
					<div className="user_blogs">
						<h1>{user && user.username} blog's</h1>
					</div>
				</div>
			</div>
		</main>
	);
};
