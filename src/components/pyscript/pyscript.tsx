'use client'
import {PythonProvider} from 'react-py'
import Codeblock from './codeBlock';
import {useEffect} from "react";

export const Pyscript = ({inputCode}:{inputCode:string}) => {

    useEffect(() => {
        navigator.serviceWorker
            .register('/react-py-sw.js')
            .then((registration) =>
                console.log(
                    'Service Worker registration successful with scope: ',
                    registration.scope
                )
            )
            .catch((err) => console.log('Service Worker registration failed: ', err))
    }, [])

    return (
        <PythonProvider>
            <Codeblock inputCode={inputCode}/>
        </PythonProvider>
    )
}
