import React from 'react';
import { useGetUsersQuery } from './api';

const UserList = () => {
  const { currentData: users, error, isLoading } = useGetUsersQuery();

  return isLoading ? <p>Loading...</p>
    : error ? <p>Error: {error}</p>
    : (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
}

export default UserList;
