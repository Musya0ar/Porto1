import DigitalClock from "./digitalclock"

console.log('Parameter Header')
function Header (){
    return (
        <div className="header">
            <a href="#" className="logo">Musya</a>
            <DigitalClock />

            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">My Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )

}
export default Header