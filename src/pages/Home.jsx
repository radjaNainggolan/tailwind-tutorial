import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div className="text-gray-700 bg-gray-200 font-body">
            <div>
                <nav>
                    <div>
                        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                            <Link to='/' className="text-green-500 sm:text-red-700 lg:text-blue-700 text-sm md:text-xl">
                                Food ninja
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
                <div className="flex text-orange-200 justify-center md:justify-end">
                    <Link to='#'>Log in</Link>
                    <Link to='#' className="ml-2">Sign up</Link>
                </div>

                {/* <div className="flex items-end">
                    <div className="bg-red-500 w-4 h-4"></div>
                    <div className="bg-green-500 w-6 h-6"></div>
                    <div className="bg-blue-500 w-8 h-8"></div>
                </div> */}


                <header>
                    <h2 className='text-gray-900 text-6xl font-semibold'>Recepies</h2>
                    <h3 className='text-2xl font-semibold'>For ninjas</h3>
                </header>

                <div>
                    <h4 className='font-bold mt-12 pb-2 border-b-2 border-gray-200'>Latest recepies</h4>

                    <div className='mt-8'>
                        <div className="bg-white rounded overflow-hidden shadow-md">
                            <img src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-mediumThreeByTwo440-v2.jpg" alt="" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">Bean chili stew</span>
                                <span className="block text-gray-500 text-sm">Recepie by Mario</span>
                            </div>
                        </div>
                    </div>
                    
                    <h4 className='font-bold mt-12 pb-2 border-b-2 border-gray-200'>Most popular</h4>
                    <div className='mt-8'>

                    </div>
                </div>
                
                <div className="flex justify-center">
                    <div className="bg-slate-400 text-orange-400">Load More</div>
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