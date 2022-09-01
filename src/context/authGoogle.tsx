import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }: any) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null || "");

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user");

            if (sessionToken && sessionUser) {
                setUser(sessionUser);
            }
        };
        loadStoreAuth();
    }, []);

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken!;
                const signUser: any = result.user;
                setUser(signUser);
                sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem(
                    "@AuthFirebase:user",
                    JSON.stringify(signUser)
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            });
    };

    function signOut() {
        sessionStorage.clear();
        setUser("");

        return <Navigate to="/" />;
    }

    return (
        <AuthGoogleContext.Provider
            value={{ signInGoogle, signed: !!user, user, signOut }}
        >
            {children}
        </AuthGoogleContext.Provider>
    );
};
