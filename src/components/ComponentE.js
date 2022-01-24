import React, { useContext, useEffect } from 'react';
import LoginContext from '../context-api/LoginContext';
import ComponentF from './ComponentF';

function ComponentE() {

    let logInData = useContext(LoginContext)
    useEffect(() => {
        console.log('LoginData', logInData);
    }, [])
    return <div>
        Component E={logInData.loggedInUser}
    </div>;
}

export default ComponentE;
