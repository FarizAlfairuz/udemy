import React from 'react'
import SingleCategory from './SingleCategory'

function Categories() {
    return (
        <div>
            <div className="ml-5 mt-5 mb-5">
                <h4>Top Categories</h4>
            </div>

            <div className="container-fluid">
                <div className="row pl-4 pr-4">
                    <SingleCategory></SingleCategory>
                    <SingleCategory></SingleCategory>
                    <SingleCategory></SingleCategory>
                    <SingleCategory></SingleCategory>
                </div>
                <div className="row pl-4 pr-4">
                    <SingleCategory></SingleCategory>
                    <SingleCategory></SingleCategory>
                    <SingleCategory></SingleCategory>
                    <SingleCategory></SingleCategory>
                </div>
            </div>
        </div>
    )
}

export default Categories
