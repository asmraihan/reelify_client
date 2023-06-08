
import { Link } from 'react-router-dom';

const ButtonDefault = ({btnText}) => {
    return (

        <Link className="group relative inline-flex border border-secondary focus:outline-none w-full sm:w-auto" href="/docs">
            <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-secondary ring-1 ring-secondary ring-offset-1 ring-offset-secondary transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
               {btnText}
            </span>
        </Link>

    );
};

export default ButtonDefault;