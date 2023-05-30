import useNavigation from "../hooks/use-navigation";

import classNames from "classnames";




//children is going to some text that we want to show inside of anchor element
function Link({to, children, className, activeClassName}) {

    const {navigate, currentPath}= useNavigation();

    const classes = classNames("text-blue-500", 
    className,
    //if current path is equal to to then we want to add in a className of activeClassName & that's going to be a prop that is going to flow up into our component.
    currentPath === to && activeClassName
    );

    const handleClick =(event)=>{
        console.log(event);
        event.preventDefault();

        navigate(to);
    };

    return (
    <a className={classes}  href={to} onClick={handleClick}>
        {children}
        </a>
    )
}
 
export default Link;