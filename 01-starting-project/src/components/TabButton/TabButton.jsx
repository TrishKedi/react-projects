export default function TagButtons({children, isSelected, ...props}){
    return(
        <li><button className={isSelected ? 'active': undefined} {...props}>{children}</button></li>
    );
}