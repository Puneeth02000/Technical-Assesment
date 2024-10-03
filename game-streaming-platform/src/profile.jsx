
import React from 'react';
import Profile from './profile2.jsx';

const ProfilePage = () => {
  const user = {
    name: 'User Name',
    bio: 'User Bio, The above user is Good in These Activities',
  };

  return (
    <div style={{background:'grey'}}>
      
      <Profile  user={user} />
    </div>
  );
};

export default ProfilePage;
