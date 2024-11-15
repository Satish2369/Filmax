import Body from "./Components/Body"
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import SplashScreen from "./Components/SplashScreen";




function App() {
  

  return ( <div className="bg-black">

<Provider store={appStore}>
 <Body/>
</Provider>
  </div>

  )
  
}

export default App;
