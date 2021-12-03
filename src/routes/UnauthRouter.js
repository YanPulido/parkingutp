import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/public/Home'
import { SignIn } from '../components/public/SignIn'
import Admin  from '../components/public/Admin'
import { NotFound } from '../components/NotFound'


export const UnauthRouter = () => {
    return (
        <Routes>
            <Route path="/" exact element={ <Home /> }></Route>
                <Route path="signin" element={ <SignIn /> }></Route>
                <Route path="admin" element={ <Admin /> }></Route>
            <Route path="*" element={ <NotFound /> }></Route>
        </Routes>
    )
}
