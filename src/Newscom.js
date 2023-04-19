import React, { Component } from "react";
import { Newsitem } from "./Newsitem";
import ReactPropTypes from "react";

// const Newscom = () => {
export class Newscom extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }
    static ReactPropTypes = {
        country: ReactPropTypes.string,
        pageSize: ReactPropTypes.number,
        category: ReactPropTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;


    }


    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4388075c2da7454f89a68d39456144d5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })

    }
    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {

        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }

    handleNextClick = async () => {

        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }


    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey -Top Headlines  from
                        {this.capitalizeFirstLetter(this.props.category)} </h1>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 88) : ""}
                                        imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark"
                            onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark"
                            onClick={this.handleNextClick}> Next &rarr;</button>

                    </div>

                </div>
            </>
        );

    }
}

export default Newscom;