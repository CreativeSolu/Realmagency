const JobsWelcome = () => {
    return ( 
        <body class="background">
            <header>
                <div class="header-logo">
                    <img src={"/img/1.png"}/>
                </div>
            </header>
            <div class="careers-row">
                <div class="careers-left-column">
                    <div class="left-column-container">
                        <div class="dot">
                            <img src={"/img/Ellipse 1.png"}/>
                        </div>
                        <div class="welcome">
                            <p>WELCOME</p>
                        </div>
                        <div class="careers">
                            <p>CAREERS</p>
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
                    </div>
                </div>
                <div class="careers-right-column">
                    <div class="job-container">
                        <div class="job">
                            <div class="job-post">
                                <p>WEB DEVELOPER</p>
                                <p class="job-description">
                                    Lorem ipsum dolor...
                                </p>
                            </div>
                            <div class="location">
                                <p class="location-title">LOCATION</p>
                                <p class="location-detail">LOS ANGELES, CA</p>
                            </div>
                            <div class="apply-button">
                                <button type="button" class="button">APPLY</button>
                            </div>
                        </div>
                        <div class="job-2">
                            <div class="job-post">
                                <p>WEB DEVELOPER</p>
                                <p class="job-description">
                                    Lorem ipsum dolor...
                                </p>
                            </div>
                            <div class="location">
                                <p class="location-title">LOCATION</p>
                                <p class="location-detail">LOS ANGELES, CA</p>
                            </div>
                            <div class="apply-button">
                                <button type="button" class="button">APPLY</button>
                            </div>
                        </div>
                        <div class="job-3">
                            <div class="job-post">
                                <p>WEB DEVELOPER</p>
                                <p class="job-description">
                                    Lorem ipsum dolor...
                                </p>
                            </div>
                            <div class="location">
                                <h1 class="location-title">LOCATION</h1>
                                <p class="location-detail">LOS ANGELES, CA</p>
                            </div>
                            <div class="apply-button">
                                <button type="button" class="button">APPLY</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="exit-btn">
                <button class="x-btn">X</button>
            </div>

            
        </body>

     );
}
 
export default JobsWelcome;