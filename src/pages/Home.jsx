import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div className="text-gray-700">
            <div>
                <nav>
                    <div>
                        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                            <Link to='/'>
                                <span>Food ninja</span>
                            </Link>
                        </h1>
                    </div>
                    <ul>
                        <li className="text-gray-700 font-bold">
                            <Link to='#'>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#'>
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#'>
                                <span>Contacts</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className='px-16 py-6'>
                <div>
                    <Link to='#'>Log in</Link>
                    <Link to='#'>Sign up</Link>
                </div>

                <header>
                    <h2 className='text-gray-900 text-6xl font-semibold'>Recepies</h2>
                    <h3 className='text-2xl font-semibold'>For ninjas</h3>
                </header>

                <div>
                    <h4 className='font-bold mt-12 pb-2 border-b-2 border-gray-200'>Latest recepies</h4>

                    <div className='mt-8'>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <span>Bean chili stew</span>
                                <span>Recepie by Mario</span>
                            </div>
                        </div>
                    </div>
                    
                    <h4 className='font-bold mt-12 pb-2 border-b-2 border-gray-200'>Most popular</h4>
                    <div className='mt-8'>

                    </div>
                </div>
                
                <div>
                    <div>Load More</div>
                </div>
            
            </main>
        </div>
    );
}
 
export default Home;

/*
    text-2xl, text-gray- 500, font-bold

    padding --- p-2 , py-2, px-2, pt-2, pr-2, pb-2, pl-2
    
    margin --- m-2 , my-2, mx-2, mt-2, mr-2, mb-2, ml-2

    border --- border(1px), border-0, border-2, border-4, border-t-2, border-r-4


*/