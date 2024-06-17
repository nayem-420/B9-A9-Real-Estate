import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                return result.user;
            })
            .catch((error) => {
                console.error(error.message);
                throw error;
            });
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                return result.user;
            })
            .catch((error) => {
                console.error(error.message);
                throw error;
            });
    };

    const authInfo = { user, createUser, signInUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;