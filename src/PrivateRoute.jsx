import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, Route } from 'react-router'
import { useAuth } from './contexts/AuthContextProvider'

function PrivateRoute() {

  const {token} = useAuth();
  // bu tokenin gecerli olup olmadigini kontrol eden mekanizmaya istek at

  return token ? <Outlet/> : <Navigate to='/admin/login'/>
  
}

export default PrivateRoute