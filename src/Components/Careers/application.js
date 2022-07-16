const Application = () => {
    return ( 
        <body class="background">
            <header>
                <div class="header-logo">
                    <img src="/img/1.png"/>
                </div>
            </header>
            <div class="careers-row">
                <div class="careers-left-column">
                    <div class="left-column-container-1">
                        <div class="dot">
                            <img src="/img/Ellipse 1.png"/>
                        </div>
                        <div class="welcome">
                            <p>LOS ANGELES</p>
                        </div>
                        <div class="careers">
                            <p>WEB DEVELOPER</p>
                        </div>
                        <div class="careers-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur.
                            </p>
                        </div>
                        <div class="icons">
                            <div class="remote-icon">
                                <img src="/img/Icon.png"/>
                                <p>REMOTE</p>
                            </div>
                            <div class="fulltime-icon">
                                <img src="/img/Icon (1).png"/>
                                <p>FULL-TIME</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="careers-right-column">
                    <div class="right-column-container">
                        <div class="container-move">
                            <div class="apply-title">
                                <p>APPLY</p>
                            </div>
                            <form>
                                <input type="text" id="form" name="fname" value="First Name"/>
                                <input type="text" id="form-1" name="lname" value="Last Name"/>
                                <input type="text" id="form-3" name="email" value="Email"/>
                                <input type="text" id="form-1" name="number" value="Phone"/>
                                <input type="text" id="form-2" name="portfolio" value="Portfolio URL"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="exi-btn">
                <button class="x-btn">X</button>
            </div>
        </body>

     );
}

export default Application;