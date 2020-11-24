import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export default () => {
    console.log("SisgnIN Text")
 return { signIn } = useContext(AuthContext);
}