import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { render } from 'react-dom';
import { CirclesWithBar } from 'react-loader-spinner';
import ContentLoader, { Facebook } from 'react-content-loader'
import { Container } from 'react-bootstrap';

const MyLoader = () => <ContentLoader />
const MyFacebookLoader = () => <Facebook />

const Protected = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(user);
    if (loading)

        return <Container className='my-5'>
            <ContentLoader viewBox="0 0 380 70">
                {/* Only SVG shapes */}
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
        </Container>
    if (user)
        return children;
    return <Navigate state={location.pathname} to={`/login`}></Navigate>

};

export default Protected;