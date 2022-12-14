import {Link} from 'react-router-dom';
import { useState } from 'react';
const Home = () => {

    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <div className="text-gray-700 bg-gray-200 font-body">
            <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 md:flex md:justify-end">
                    <nav className="text-right">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                                <Link to='/' className="text-green-500 sm:text-red-700 lg:text-blue-700 text-sm md:text-xl hover:text-gray-700">
                                    Food ninja
                                </Link>
                            </h1>
                            <div  className="px-4 mr-2 cursor-pointer md:hidden" onClick={()=>{setOpen(!open);}}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </div>
                        </div>
                        <ul className={`${open?'':'hidden'} md:block md:text-sm md:mt-6 md:space-y-3`}>
                            <li className="text-gray-700 font-bold">
                                <Link to='#' className=" px-4 flex justify-end active:border-r-2 active:border-amber-600" >
                                    <span>Home</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className="px-4 flex justify-end">
                                    <span>About</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className="px-4 flex justify-end">
                                    <span>Contacts</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <main className='px-16 py-6 md:col-span-2'>
                    <div className="flex text-orange-200 justify-center md:justify-end">
                        <Link to='#' className="btn md:border-amber-300 md:border-2 hover:bg-amber-200 hover:text-white transition ease-out delay-100">Log in</Link>
                        <Link to='#' className="btn ml-2 md:border-amber-300 md:border-2 hover:bg-amber-200 hover:text-white transition ease-out delay-100">Sign up</Link>
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

                        <div className='mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 '>
                            <div className="card">
                                <img src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-mediumThreeByTwo440-v2.jpg" alt="" className="w-full h-32 sm:h-48 object-cover" />
                                <div className="m-4">
                                    <span className="font-bold">Bean chili stew</span>
                                    <span className="block text-gray-500 text-sm">Recepie by Mario</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>25 min</span>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://www.thespruceeats.com/thmb/0NYiiP8oJ-hIh2JA9Rb7QDglmrc=/1500x1000/filters:no_upscale()/easy-bangkok-street-vendor-noodles-3217098-step-05-84be4b73f0c14287a6be3679d145ae1d.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
                                <div className="m-4">
                                    <span className="font-bold">Noodles</span>
                                    <span className="block text-gray-500 text-sm">Recepie by Mario</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>25 min</span>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-mediumThreeByTwo440-v2.jpg" alt="" className="w-full h-32 sm:h-48 object-cover" />
                                <div className="m-4">
                                    <span className="font-bold">Toffy curry</span>
                                    <span className="block text-gray-500 text-sm">Recepie by Mario</span>
                                </div>
                                <div className="badge">
                                    <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>25 min</span>
                                </div>
                            </div>
                        </div>
                        
                        <h4 className='font-bold mt-12 pb-2 border-b-2 border-gray-200'>Most popular</h4>
                        <div className='mt-8'>

                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="btn bg-slate-400 text-orange-400">Load More</div>
                    </div>
                
                </main>
            </div>
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