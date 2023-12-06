'use client';
import { usePython } from 'react-py';
import { useState } from 'react';

export default function Codeblock() {
    const [input, setInput] = useState('')
    const { runPython, stdout, stderr, isLoading, isRunning } = usePython()
  
    return (
        <div>
            {isLoading ? <p>Loading...</p> : <p></p>}
            <form>
                <textarea
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your code here"
                />
                <input
                type="submit"
                value={!isRunning ? 'Run' : 'Running...'}
                disabled={isLoading || isRunning}
                onClick={(e) => {
                    e.preventDefault()
                    runPython(input)
                }}
                />
            </form>
            <p>Output</p>
            <pre>
                <code>{stdout}</code>
                <code>{stderr}</code>
            </pre>
        </div>
    )
  }
  