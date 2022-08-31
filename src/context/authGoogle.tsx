import { createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }: any) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

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

    return (
        <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user }}>
            {children}
        </AuthGoogleContext.Provider>
    );
};
