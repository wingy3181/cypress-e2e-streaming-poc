"use client";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function PokemonClient() {
    const router = useRouter();
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(99);
    }, []);

    const handleSubmit = (formData: { [x: string]: any; }) => {
        const urlParams = Object.keys(formData)
            .map(key => [key, formData[key]].join('='))
            .join('&');

        router.push(`/abc?${urlParams}`);
    };

    return (
        <>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name="count" value={count} onChange={e => setCount(parseInt(e.target.value))}/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}
