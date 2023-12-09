'use client';
import { usePython } from 'react-py';
import {useRef, useState} from 'react';

export default function Codeblock() {
    const [input, setInput] = useState('')
    const userStdInput = useRef("")
    const { runPython, stdout, stderr, isLoading, isRunning, isAwaitingInput , sendInput} = usePython()
  
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

            {isAwaitingInput &&
                // input待ちのときだけ出現するフォーム
                <form>
                    <textarea
                        onChange={(e) => userStdInput.current = e.target.value}
                        placeholder="Enter your input here"
                    />
                    <input
                        type="submit"
                        value="Send"
                        onClick={(e) => {
                            e.preventDefault()
                            sendInput(userStdInput.current)
                        }}
                    />
                </form>
            }


            <p>Output</p>
            <pre>
                <code>{stdout}</code>
                <code>{stderr}</code>
            </pre>
        </div>
    )
  }
  