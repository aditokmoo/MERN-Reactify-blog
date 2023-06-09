import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Nav } from '../components/Nav';
// Hooks
import { useAuthContext } from '../hooks/useAuthContext';
import { useUser } from '../hooks/useUser';
import { useLogout } from '../hooks/useLogout';
// images
import userNoImage from '../images/no-image-profile.png';
//react-icons
import { FiEdit, FiLogOut } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineLock } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
// react spinners
import { ScaleLoader } from 'react-spinners';
//css
import './css/profile.css';

export const Profile = () => {
	const { user } = useAuthContext();
	const { userData } = useUser();
	const { logout } = useLogout();
	const [ isLoading, setIsLoading ] = useState(true)
	
	const { username, email } = userData
	const { id } = useParams();

	return (
		<main>
			<Nav />
			<div className="container">
				<div className="profile">
					<div className="side_bar">
						{/* Profile Image */}
						<div className="image">
						{isLoading && <ScaleLoader color="#3698d6" id='profileLoading' />}
						<img onLoad={() => setIsLoading(false)} src={userData.image === userNoImage ? userNoImage : `../../public/images/${userData.image}`} style={{ display: isLoading ? 'none' : 'block' }} />
						</div>
						{/* Profile Details */}
						<ul className="details">
							<li>
								Username <span>{username}</span>
							</li>
							<li>
								Email <span>{email}</span>
							</li>
						</ul>
						{/* Profile Menu */}
						{user && user.username === id && (
						<>
							<h3>Menu</h3>
							<ul className="menu">
								<li>
									<Link to={`/profile/${user.username}/create`}>
										<FaPlus /> Create post
									</Link>
								</li>
								<li>
									<Link to={`/profile/${user.username}/details`}>
										<FiEdit /> Edit profile
									</Link>
								</li>
								<li>
									<Link to={`/profile/${user.username}/change`} >
										<AiOutlineLock /> Change password
									</Link>
								</li>
								<li>
									<button>
										<BsTrash3 /> Delete profile
									</button>
								</li>
								<li>
									<button onClick={logout}>
										<FiLogOut /> Logout
									</button>
								</li>
							</ul>
						</>
						)}
					</div>
					<div className="user_blogs">
						<h1>{username} blog's</h1>
					</div>
				</div>
			</div>
		</main>
	);
};
