import { AuthGoogleProvider } from "./context/authGoogle";

import "./App.scss";
import { AppRoutes } from "./Routes/AppRoutes";

function App() {
    return (
        <div className="App">
            <AuthGoogleProvider>
                <AppRoutes />
            </AuthGoogleProvider>
        </div>
    );
}

export default App;
