import React, { useContext} from 'react'
import { UserDataContext } from '../context/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'

const UserProtectedWrapper = (
    {
        children
    }
) => {
    const { user } = useContext(UserDataContext);

    // Check if user is logged in
    if (!user || !user.email) {
        return <Navigate to="/login" replace />;
    }

  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper
