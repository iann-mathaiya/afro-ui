'use client'
import useSound from 'use-sound'
import { Link } from "lucide-react"
import { useRef, useState } from "react"

type Player = {
    id: number
    avatarSrc: string
    avatarAlt: string
}

const players: Player[] = [
    { id: 1, avatarAlt: '1', avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { id: 2, avatarAlt: '2', avatarSrc: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { id: 3, avatarAlt: '3', avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" },
    { id: 4, avatarAlt: '4', avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
]

export default function ShareLink() {

    const inputRef = useRef(null)
    const [isCopied, setIsCopied] = useState(false)
    const [link] = useState('curation.agency/?via=alicorak')

    const soundAlert = '/soft-bells.mp3'

    const [play] = useSound(soundAlert)

    function copyToClipboard(event: React.FormEvent<HTMLFormElement>) {

        const link = inputRef.current!['value']

        event.preventDefault()

        navigator.clipboard.writeText(link)

        play()

        setTimeout(() => {
            setIsCopied(true)
        }, 1000)

    }

    return (
        <section className="p-4 w-96 max-w-lg bg-gray-800 flex flex-col items-center rounded-3xl border border-gray-600">
            <div className="p-3 w-fit rounded-full bg-gray-700">
                <Link size={24} className="text-gray-200" />
            </div>

            <h1 className="mt-4 text-lg text-white">Share your link</h1>
            <p className="text-gray-300">Copy link invite and share with your player</p>

            <div className="w-full mt-4">
                <form onSubmit={copyToClipboard}>
                    <input ref={inputRef} type="text" value={link} disabled className="py-2 px-4 rounded-full w-full text-gray-200 disabled:bg-gray-700 border border-gray-600" />
                    <button type="submit" disabled={isCopied} className="py-2 px-4 mt-1 rounded-full w-full text-lime-400 bg-lime-800/40 disabled:cursor-alias">
                        <span className=" ">{isCopied ? 'Link Copied' : 'Copy Link'}</span>
                    </button>
                </form>
            </div>

            <div className="mt-4 w-full border-t border-gray-700" />

            <div className="mt-4 w-full flex justify-center items-center">
                <div className="-space-x-1 overflow-hidden">
                    {players.map(player =>
                        <img
                            key={player.id}
                            className="inline-block h-7 w-7 rounded-full ring-2 ring-gray-800 grayscale hover:grayscale-0"
                            src={player.avatarSrc}
                            alt={player.avatarAlt}
                        />
                    )}

                </div>
                <p className="text-sm text-gray-300 pl-4">invite more friends</p>
            </div>

        </section>
    )
}
