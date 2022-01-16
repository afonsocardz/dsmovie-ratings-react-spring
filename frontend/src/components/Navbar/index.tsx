

import {ReactComponent as GithubIcon } from 'assets/img/github.svg';

function Navbar() {
    return (
        
            <header>
                <nav>
                    <div>
                        <h1>DSMovie</h1>

                        <a href='https://github.com/afonsocardz'>
                            <GithubIcon/>
                            <p>/afonsocardz</p>
                        </a>
                    </div>
                </nav>
            </header>
        
    );
}
export default Navbar;