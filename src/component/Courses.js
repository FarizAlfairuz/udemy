import React, { useState, useEffect } from 'react'
import '../assets/css/Courses.css'
import CoursesCard from './CoursesCard'
import Slider from "react-slick"
import axios from 'axios'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import youtubeApi from '../API/youtubeApi';


function Courses() {
    const [course, setCourse] = useState({
        activeCourse: 1,
        activeName: "Python",
        list: [
            { id: 1, name: "Python" },
            { id: 2, name: "Excel" },
            { id: 3, name: "Web Development" },
            { id: 4, name: "JavaScript" },
            { id: 5, name: "Data Science" },
            { id: 6, name: "AWS Certification" },
            { id: 7, name: "Drawing" }
        ],
        previews: []
    })

    const [video, setVideo] = useState({
        videoMetaInfo: [],
    })


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function listClicked(index) {
        setCourse({ ...course, activeCourse: course.list[index].id, activeName: course.list[index].name })

    }

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${course.activeCourse}`)
            .then(response => {
                setCourse({ ...course, previews: response.data.data })
                // console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [course.activeCourse])

    useEffect(() => {
        youtubeApi.get('/search', {
            params: {
                q: course.activeName
            }
        })
            .then(response => {
                setVideo({
                    ...video,
                    videoMetaInfo: response.data.items,
                })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [course.activeName])

    function toggleClickedList(index) {
        // console.log(course.activeCourse)
        // console.log(course.activeName)
        if (course.list[index].id === course.activeCourse) {
            return "list-group-item clicked"
        } else {
            return "list-group-item"
        }
    }


    return (
        <div>
            <ul className="list-group list-group-horizontal ml-5" style={{ cursor: "pointer" }}>
                {course.list.map((courses, index) =>
                    <div
                        key={index}
                        onClick={() => {
                            listClicked(index)
                        }}>
                        <li className={toggleClickedList(index)}>{courses.name}</li>
                    </div>
                )}
            </ul>

            <div className="preview p-5 m-5 align-items-center">
                <div>
                    <h3>{course.previews.first_name} {course.previews.last_name}</h3>
                    <p>{course.previews.email}</p>
                    <h6>Explore {course.activeName}</h6>
                </div>
                <div>
                    <img alt="avatar" src={course.previews.avatar} className="rounded-circle" style={{ width: "150px" }} />
                </div>
            </div>

            <div style={{ height: "70vh", margin: "5%" }}>
                <Slider {...settings}>
                    {video.videoMetaInfo.map((result) =>
                        <CoursesCard
                            title={result.snippet.title}
                            author={result.snippet.channelTitle}
                            thumbnail={result.snippet.thumbnails.medium.url}
                            desc={result.snippet.description}
                            time={result.snippet.publishedAt}
                        />
                    )}
                </Slider>
            </div>

            <div className="ml-5 mt-5">
                <h4>Students are viewing</h4>
            </div>

            <div style={{ height: "70vh", margin: "5%" }}>
                <Slider {...settings}>
                    {video.videoMetaInfo.map((result) =>
                        <CoursesCard
                            title={result.snippet.title}
                            author={result.snippet.channelTitle}
                            thumbnail={result.snippet.thumbnails.medium.url}
                            desc={result.snippet.description}
                            time={result.snippet.publishedAt}
                        />
                    )}
                </Slider>
            </div>

            <div className="ml-5 mt-5">
                <h4>Because you searched for "react"</h4>
            </div>

            <div style={{ height: "70vh", margin: "5%" }}>
                <Slider {...settings}>
                    {video.videoMetaInfo.map((result) =>
                        <CoursesCard
                            title={result.snippet.title}
                            author={result.snippet.channelTitle}
                            thumbnail={result.snippet.thumbnails.medium.url}
                            desc={result.snippet.description}
                            time={result.snippet.publishedAt}
                        />
                    )}
                </Slider>
            </div>



        </div>

    )
}

export default Courses
