import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import './global.css'
import Adjust from '@adjustcom/adjust-web-sdk'
import { Config } from './Config.ts'

if (Config.adjust) {
    Adjust.initSdk({
        appToken: Config.appToken,
        environment: 'production',
    })
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Layout />)
