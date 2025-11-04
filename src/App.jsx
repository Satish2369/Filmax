import Body from "./Components/Body"
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import "./index.css"



function App() {
  

  return ( <div className="bg-black">

<Provider store={appStore}>
 <Body/>
</Provider>
  </div>

  )
  
}

export default App;
