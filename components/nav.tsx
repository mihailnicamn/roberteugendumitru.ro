import Link from "next/link"




export default function Navbar() {
    const strings = {
        name: 'Robert Dumitru Studio'
    }
    return (<>
        <div className='w-screen flex justify-between items-center pl-20 pr-20 pt-2'>
            <div className='flex flex-col'>
                <Link prefetch href='/'>
                    <div className='text-2xl font-bold'>{strings.name}</div>
                </Link>
            </div>
            <div className='flex flex-row'>
                <Link prefetch href='/about'>
                    <div className='text-2xl font-bold'>About</div>
                </Link>
                <div className='text-2xl font-bold ml-10'>Projects</div>
                <div className='text-2xl font-bold ml-10'>Contact</div>
            </div>
        </div>
    </>)
}