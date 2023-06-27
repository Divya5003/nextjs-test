import Head from "next/head";
import { useState } from "react";

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState("");

    const getResponseFromOpenAI = async () => {
        setResponse("");
        console.log("Getting response from OpenAI...");
        setIsLoading(true);
        const response = await fetch("/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: prompt }),
        });

        const data = await response.json();
        setIsLoading(false);
        console.log(data.text);
        setResponse(data.text);
    };

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=''>
                <div className=''>
                    <h1 className=''>Next.js & OpenAI Sample Application</h1>
                </div>

                <div className=''>
                    <textarea
                        className=''
                        placeholder="Enter a prompt"
                        onChange={(e) => setPrompt(e.target.value)}
                        row="5"
                        cols="50"
                    />
                    <button className='' onClick={getResponseFromOpenAI}>
                        Get Response
                    </button>

                    <div className=''>
                        {isLoading ? (
                            <div>Waiting for response ...</div>
                        ) : (
                            <div>{response}</div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}