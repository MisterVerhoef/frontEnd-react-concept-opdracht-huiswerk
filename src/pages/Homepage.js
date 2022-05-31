import React from 'react';


function Homepage() {
    return (

        <div>
            <header className="header-outer-container">
                <nav>
                    <ul>
                        <li>
                            Nav Item
                        </li>
                    </ul>
                </nav>
                <div className="header-inner-container">
                    <h1>Reddit header text</h1>
                </div>
            </header>
            <main className="main-outer-container">
                <div className="main-inner-container">main text
                    <article className="article-box">article text
                        <div className="article-box-inner">inner article text</div>
                    </article>
                </div>
            </main>
            <footer>
                <p>in opdracht van Novi Hogeschool @ 2022</p>
            </footer>
        </div>

    );
}

export default Homepage;