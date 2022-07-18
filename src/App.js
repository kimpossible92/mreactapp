import './styles/App.css';
import React from 'react';
import { Unity,useUnityContext} from "react-unity-webgl";

function App() {

    const {unityProvider} = useUnityContext({
        loaderUrl:"Build/vv4.loader.js",
        dataUrl: "Build/vv4.data",
        frameworkUrl: "Build/vv4.framework.js",
        codeUrl: "Build/vv4.wasm",
    });
      return <Unity unityProvider={unityProvider}/>
}

export default App;
