import Image from 'next/image'
import Navbar from '../components/nav'
export default function Home() {
    const url = 'https://images.squarespace-cdn.com/content/v1/63559e6e38a9e948f2f9e9a5/93d223bd-a7e8-419a-bf6a-c98abde7e7d9/PLAN+CATTED.png'
    return (
        <>
            <Navbar />
            <main className={`flex min-h-screen flex-col items-center justify-between `}>
               PLAN LOADED FROM SQUARESPACE [TEST]
                <Image
                    src={url}
                    width={500}
                    height={500}
                    alt='test' />
            </main>
        </>
    )
}
