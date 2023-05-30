export default function About(){
    return(
        <div className="about-section font-link">
            <div className="container text-center w-75 my-4">
                <h1>About Us</h1>
                <p className="">This project was crafted and developed by three talented developers listed below.
                    The purpose of this project was to create a YouTube clone that mimicks the behavior
                    and functionality of the infamous YouTube website.
                </p>
            </div>
            <div className="container w-75">
                <h2 className="text-center bg-danger text-light p-2">Meet Our Team! :D</h2>
                <div className="row pb-4">
                    <div className="col-4">
                        <div className="card">
                            <img src='https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/bread.jpg?strip=all&lossy=1&ssl=1' alt='Pic of bread' />
                            <div className="container p-2">
                                <h2>Naomi Pate</h2>
                                <p className="title">Technical Lead</p>
                                <p>A self-directed and motivated individual with entry-level software development experience. Fluent in HTML web design, CSS/Bootstrap, JavaScript, and React. I am currently working to expand my knowledge to become a Full Stack Developer while studying in the intensive Pursuit Fellowship Program.</p>
                                <a href='https://github.com/naomipate'>Visit me on Github!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex">
                        <div className="card">
                                <img src='https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/bread.jpg?strip=all&lossy=1&ssl=1' alt='Pic of bread' />
                                <div className="container p-2 align-items-stretch">
                                    <h2>Angel Wu</h2>
                                    <p className="title">Technical Associate</p>
                                    <p>Passionate to be Full Stack Developer. Currently studying in Pursuit Intensive Program.</p>
                                    <a href='https://github.com/angels178'>Visit me on Github!</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex">
                        <div className="card">
                                <img src='https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/bread.jpg?strip=all&lossy=1&ssl=1' alt='Pic of bread' />
                                <div className="container p-2 align-items-stretch">
                                    <h2>Onyx McQueen</h2>
                                    <p className="title">Technical Associate</p>
                                    <p>A dedicated and lifelong learner of different full-stack web development techniques. Currently pursuing a FSW development career though the intensive Pursuit Fellowship Program.</p>
                                    <a href='https://github.com/OnyxMcQueen'>Visit me on Github!</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}