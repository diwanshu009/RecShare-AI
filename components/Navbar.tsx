import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className='navbar'>
            <nav>
                <Link href='/'>
                    <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32}/>
                    <h1>RecShare.AI</h1>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
