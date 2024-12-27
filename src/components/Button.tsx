
interface Props {
  children: React.ReactNode;
  size?: 'small' | 'large';
  onClick?: () => void;
};


export default function Button({children, size = 'small', onClick }:Props) {
    const sizeClasses = {
        small: 'rounded-md px-3 py-2 text-sm font-semibold  bg-brand-1',
        large: 'rounded-lg px-5 py-3 text-base font-semibold bg-brand-2',
    };
    
    return (
        <button type="button" className={`${sizeClasses[size]} leading-[140%] text-white cursor-pointer`} onClick={onClick}>
            {children}
        </button>
    );
};

