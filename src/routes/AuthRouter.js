import React from 'react'
import { Routes, Route } from 'react-router'
import { NotFound } from '../components/NotFound'
import Dashboard from '../components/private/Dashboard'

export const AuthRouter = () => {

    return (
        <Routes>
            <Route path="/dashboard" element={ <Dashboard/> }> 
                <Route path="*" element={ <NotFound/> } />
            </Route>
            
        </Routes>
    )
}
