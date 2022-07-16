const About = () => {
    return ( 
<body className="about-background">
    <header>
        <div className="header-logo">
            <img src="/img/1.png"/>
        </div>
    </header>
        <div className="about-container">
            <div className="dot">
                <img src="/img/Ellipse 1.png" alt="dot"/>
            </div>
            <div className="welcome">
                <p>ABOUT</p>
            </div>
            <div className="careers">
                <p>WE ARE WORLD BUILDERS FOR <span style={{color: "#E85F39"}}>BRANDS.</span></p>
            </div>
        </div>
        <div className="about-detail-container">
            <div className="about-detail-1">
                <p>
                    Realm is the pioneer of Engineered Marketing. We see the world in a “different light”. 
                    We see high-definition interactions, multi-layered connections, and deeper impactful, 
                    immersive storytelling. In other words we're not just a creative agency. We’re a 
                    super-charged jet engine for acceleration and business growth.
                </p>
            </div>
            <div className="about-detail-2">
                <p>
                    The concept of Building Worlds emerged from a 2016 collaboration with Alex McDowell. 
                    Alex created the technology and architecture of the world you see in the Spielberg 
                    film Minority Report among many others.
                </p>
            </div>
            <div className="about-detail-3">
                <p>
                    As I worked with Alex it struck me that a lot of his work and his thinking could also 
                    be applied to brand building too. Building Worlds is about realizing your brand’s 
                    destiny through a dynamic mixture of science, art and imagination.
                </p>
            </div>
        </div>
        <div className="our-team-container">
            <div className="careers">
                <p>OUR <span style={{color:"#E85F39"}}>TEAM</span></p>
            </div>
        </div>
        <div className="staff-container">
            <div className="staff-single-1">
                <img src="/img/Rectangle 36.png"/>
                <p>Shane Ryan Valdez</p>
                <div className="staff-job">
                    <p>Partner / Executive Creative Director</p>
                </div>
            </div>
            <div className="staff-single">
                <img src="/img/Rectangle 51.png"/>
                <p>Norman Reiss</p>
                <div className="staff-job">
                    <p>Partner / Managing Director</p>
                </div>
            </div>
            <div className="staff-single">
                <img src="/img/Rectangle 50.png"/>
                <p>Taylor Powers</p>
                <div className="staff-job">
                    <p>Account Excecutive</p>
                </div>
            </div>
            <div className="staff-single">
                <img src="/img/Rectangle 47.png"/>
                <p>Peter Harding</p>
                <div className="staff-job">
                    <p>Director / Editor</p>
                </div>
            </div>
            <div className="staff-single">
                <img src="/img/Rectangle 48.png"/>
                <p>Jacob Maymudes</p>
                <div className="staff-job">
                    <p>VFX Supervisor</p>
                </div>
            </div>
            <div className="staff-single">
                <img src="/img/Rectangle 49.png"/>
                <p>Noboru Bitoy</p>
                <div className="staff-job">
                    <p>Art Director</p>
                </div>
            </div>
        </div>
        <div className="about-btn">
            <button className="x-btn">X</button>
        </div>
</body>
    
     );
}
 
export default About;