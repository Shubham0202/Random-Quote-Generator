import MenuSvg from '../../assets/menu.svg'
import SpinnerAnim from './SpinnerAnim'
import Hero from './Hero'
import QuoteCard from './QuoteCard'
import useRandomQuotes from '../../hooks/useRandomQuotes'
const Main = () => {
    const {quotes,isLoading,error} = useRandomQuotes('https://api.quotable.io/quotes/random');

    return (
        <div className={`relative text-white w-full h-dvh bg-center bg-no-repeat bg-cover overflow-x-hidden overflow-y-scroll`}>
           {/* spinner anim */}
           <SpinnerAnim/>

            <div className="nav p-2">
                <div className='hover:bg-gray-600 w-fit rounded-full p-1'><img src={MenuSvg} className='w-12 h-12' alt="" /></div>
            </div>
            <main className='px-4'>
               <Hero/>
               <div className="flex items-start justify-center gap-4 flex-wrap">
               {
                quotes.map(q=>
                    <QuoteCard title={q.content} author={q.author}/>
                )
               }
               </div>
            </main>
        </div>
    )
}

export default Main
