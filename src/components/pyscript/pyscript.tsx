'use client'
import pyscriptStyle from './pyscript.module.css';
import { PythonProvider } from 'react-py'
import Codeblock from './codeBlock';
import {ReactNode} from "react";

export const Pyscript = () => {
  return (
    <PythonProvider>
      <Codeblock />
    </PythonProvider>
  )
}
