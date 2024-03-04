import "./AboutMePage.css";

function AboutMePage() {
    return (
        <>
            <div id="profile-page-top"></div>
            <div className="page-container profile-page-container">
                <div className="about-me-container">
                    <img id="profile-my-image" src="./avatar.jpg" alt="profile image"></img>
                    <div className="about-me-content">
                        <h3 className="about-me-title">
                            About Me
                        </h3>
                        <h1 className="about-me-headline">
                            Hi! I'm Alfonso and welcome to my portfolio!
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum id iste ducimus, quaerat doloribus ex accusamus autem vitae cum veritatis ab corporis ut non! Ipsa blanditiis rem nemo rerum voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda quasi magni consequuntur pariatur ea tenetur, natus necessitatibus ipsum, atque minus tempora, repudiandae deleniti suscipit? Suscipit repudiandae reiciendis eveniet rem.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dignissimos quis assumenda fugit natus atque ipsa sunt voluptate deleniti eligendi facilis qui explicabo veniam pariatur, ex, voluptatem non possimus voluptates.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias earum aperiam alias sapiente sint tenetur molestiae dolor quasi reiciendis consequuntur accusantium corrupti magnam soluta id commodi, eligendi voluptas nam ratione.
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AboutMePage;