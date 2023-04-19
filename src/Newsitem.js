import React, { Component } from "react";

// const Newsitem = (props) => {
export class Newsitem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl,author,date } = this.props;

        return (
            <>
                <div className="my-3">
                    <div className="card" >
                        <img src={!imgUrl?"https://images.indianexpress.com/2022/09/GettyImages-Long-Covid-1200.jpg":imgUrl} 
                        className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                          <p className="card-text">{description}...</p>
                          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on 
                          {new Date(date).toGMTString()}</small></p>
                         

                            <a href={newsUrl}  className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
