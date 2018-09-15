import React, { Component } from "react";
import { Input, Btn } from "../../Form";
 import "./Saved.css"
import API from "../../../utils/API";
import { Link } from 'react-router-dom'
class Saved extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        console.log("loading")
        API.getSavedArticles()
            .then(res => this.setState({ articles: res.data }))
            .catch(err => console.log(err));
    }

    handleArticleDelete = id => {
        console.log(id+"gggggggggggggggggg")
        API.deleteArticle(id)
          .then(res => this.loadArticles())
          .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mx-auto ">
                    <div className="col-md-9 mx-auto  tex-center mt-2">


                        <div className="card">
                            <div className="card-header parentPosition">
                                Articles
                                <Link className="text-light  text-right ml-5 position" to="/">Click to go Back to Home</Link>
                            </div>

                            <div className="card-body text">
                                {this.state.articles.length ? (
                                    <ul >
                                        {this.state.articles.map(article => (
                                            <li key={article._id} className="bg-light mb-5 mt-5 border border-dark ml-3 ">
                                                <strong>
                                                    <h2> Title : {article.title}</h2>
                                                    <h2> URL :  {article.url}      </h2>
                                                    <h3>Pub Date : {article.date}</h3>
                                                    <Btn onClick={() => this.handleArticleDelete(article._id)}>Delete</Btn>
                                                </strong>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </div>

                        </div>











                    </div>
                </div>
            </div>
        )
    }

 
};
export default Saved;