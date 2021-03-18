import React from 'react'
import '../assets/css/Home.css'
import Courses from '../component/Courses'
import Categories from '../component/Categories'
import Footer from '../component/Footer'


function Home() {
    return (
        <div>
            <div className="banner pt-5">
                <div className="card ml-5 pl-4 pt-3 pr-4" style={{ width: "25rem", height: "13rem" }}>
                    <h1>Dream up</h1>
                    <h6>Ambition accepted. Learn the latest skills to reach your professional goals.</h6>
                    <form>
                        <input type="text" className="form-control" placeholder="What do you want to learn?" />
                    </form>
                </div>
            </div>
            <div className="ml-5 mt-5">
                <h4>The world's largest selection of courses</h4>
                <p>Choose from 130,000 online video courses with new additions published every month</p>
                <br />
            </div>
            <Courses />

            <div className="personal-learning d-flex flex-column justify-content-center align-items-center">
                <h2>Get personal learning recommendations</h2>
                <h4>Answer a few questions for your top picks</h4>
                <button className="btn btn-start">Get Started</button>
            </div>

            <Categories />

            <div className="ml-5 mt-5">
                <h4>Featured topics by category</h4>
            </div>

            <div className="row pl-4 pr-4 ml-3 mr-3 mt-5">
                <div className="col-lg col-md-3 col-sm-6 p-0 m-2">
                    <h5>Development</h5>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                </div>
                <div className="col-lg col-md-3 col-sm-6 p-0 m-2">
                    <h5>Business</h5>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                </div>
                <div className="col-lg col-md-3 col-sm-6 p-0 m-2">
                    <h5>IT and Software</h5>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                </div>
                <div className="col-lg col-md-3 col-sm-6 p-0 m-2">
                    <h5>Design</h5>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                    <h6 className="mt-3"><a href="#">Python</a></h6>
                    <p className="mt-3">2.002.934 students</p>
                </div>
            </div>
            <button className="btn btn-explore my-2 pt-2 pb-2 my-sm-0" type="submit"> <strong>Explore more</strong> </button>

            <div className="instructor container d-flex justify-content-center">
                <img src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg" alt="" />
                <div className="m-5 d-flex flex-column justify-content-center align-items-start">
                    <h4>Become an instructor</h4>
                    <h6>Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</h6>
                    <button className="btn btn-explore my-2 pt-2 pb-2 my-sm-0 mx-sm-0" type="submit"> <strong>Start teaching today</strong> </button>
                </div>
            </div>

            <div className="w-100 d-flex flex-column justify-content-center align-items-center pt-5 pb-5" style={{ borderTop: "1px solid rgb(219, 216, 216)", borderBottom: "1px solid rgb(219, 216, 216)" }}>
                <h4>Trusted by companies of all sizes</h4>
                <div className="d-flex justify-content-center pt-2">
                    <h6>Booking.com</h6>
                    <h6>Booking.com</h6>
                    <h6>Booking.com</h6>
                    <h6>Booking.com</h6>
                </div>
            </div>


            <div className="business d-flex justify-content-center">
                <div className="m-5 d-flex flex-column justify-content-center align-items-start">
                    <h4>Udemy for Business</h4>
                    <h6>Get unlimited access to 5,500+ of Udemy’s top courses for your team.</h6>
                    <button className="btn btn-explore my-2 pt-2 pb-2 my-sm-0 mx-sm-0" type="submit"> <strong>Get Udemy for Business</strong> </button>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start" >
                    <img src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg" alt="" />
                </div>
            </div>

            <div className="d-flex justify-content-center p-5" style={{ borderTop: "1px solid rgb(219, 216, 216)" }}>
                <iframe width="480" height="315" src="https://www.youtube.com/embed/QFIhEmOd6No" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="d-flex flex-column justify-content-center align-items-start p-5" style={{ width: "40vw" }}>
                    <h2>Transform your life through education</h2>
                    <h6>Mohamad Alaloush launched a new career in software development by taking courses on Udemy. What will you be able to do?</h6>
                </div>
            </div>

            

            <Footer />

        </div>
    )
}

export default Home
