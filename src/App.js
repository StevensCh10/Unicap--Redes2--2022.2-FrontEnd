import RoutesApp from "./routes"
import {AuthProvider} from "./contexts/auth"

function App() {

  return ( //className
    <AuthProvider>
      <RoutesApp/>
    </AuthProvider>
  );
}

export default App;
