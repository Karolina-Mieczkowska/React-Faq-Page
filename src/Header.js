import Image from './Image';
const Header = () => {
    return (
        <header className="header">
            <div className="surface">
                <Image/>
                <h1>FAQ</h1>
                <p>Frequently asked questions about the meaning of life</p>
            </div>
        </header>
    );
}
 
export default Header;