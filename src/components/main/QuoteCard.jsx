import ShareSvg from '../../assets/cardIcons/share.svg';
import CopySvg from '../../assets/cardIcons/copy.svg';
import SpeakSvg from '../../assets/cardIcons/speak.svg';

const QuoteCard = ({title,author}) => {

    return (

        <div className={`shadow bg-white text-black px-2 py-2 rounded-lg mt-6 sm:w-80`}>
                <h3 className="text-gray-500 capitalize py-2 border-b">-{author} </h3>
                <p className="font-semibold text-lg mt-2">
                    {title}
                </p>
                <div className="flex items-center gao-2">
                    <div className="p-1 hover:bg-gray-200 rounded-xl sm:cursor-pointer">
                    <img src={SpeakSvg} className='w-10 h-10' alt="" />
                    </div>
                    <div className="p-1 hover:bg-gray-200 rounded-xl sm:cursor-pointer">
                    <img src={CopySvg} className='w-10 h-10' alt="" />
                    </div>
                    <div className="p-1 hover:bg-gray-200 rounded-xl sm:cursor-pointer">
                    <img src={ShareSvg} className='w-10 h-10' alt="" />
                    </div>
                </div>
        </div>
    )
}

export default QuoteCard