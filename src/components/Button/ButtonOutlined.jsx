
import { Link } from 'react-router-dom';

const ButtonOutlined = ({btnText}) => {
    return (
        <Link className="group relative inline-flex border border-secondary focus:outline-none w-full sm:w-auto"
        href="" target="_blank">
        <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-secondary text-center font-bold uppercase bg-white/20 ring-1 ring-secondary ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">{btnText}</span>
    </Link>
    );
};

export default ButtonOutlined;