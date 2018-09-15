import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Input, Btn } from "../../Form";
import "./Home.css"
import API from "../../../utils/API";
class Home extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: []
    }
    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
     parse =str=> {
        // validate year as 4 digits, month as 01-12, and day as 01-31 
        if ((str = str.match (/^(\d{4})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/))) {
           return(true)
        }
        return false;
 }

    handleArticleSave = id => {
      
        API.saveArticle(this.state.articles[id])
          .then(res => alert("Article Saved"))
          .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        this.state.articles = [];
        let tempArticles = [];
        event.preventDefault();

        if (this.state.topic && this.state.startYear && this.state.endYear ) {
            if(!this.parse(this.state.startYear)&& !this.parse(this.state.startYear))
            {
                alert("Make sure that date format is YYYYMMDD")
            }
            if(this.state.endYear<this.state.startYear)
            {
                alert("End year should be greater than Start year ")
            }
            else
            {
            API.getArticles({
                topic: this.state.topic,
                startYear: this.state.startYear,
                endYear: this.state.endYear
            })
                .then(res => {
                    for (let x = 0; x < 5; x++) {
                      console.log( res.data.response.docs[x].pub_date);
                        tempArticles.push({ id: x, title: res.data.response.docs[x].headline.main, url: res.data.response.docs[x].web_url ,date:res.data.response.docs[x].pub_date})
                        console.log(tempArticles[x].title)
                    }
                    this.setState({ articles: tempArticles })
                    console.log(this.state.articles.length)
                }
                )

                .catch(err => console.log(err));
            }
        }
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row mx-auto ">
                    <div className="col-md-9 mx-auto   mt-2">
                  
                        <div className="card">
                            <div className="card-header parentPosition" >
                                Search Parameters
                                <Link className="text-light  text-right ml-5 position" to="/saved">Click to see Saved Articles</Link>
                             </div>
                            <h5 className="card-title"></h5>
                            <div className="card-body">
                                <Input
                                    value={this.state.topic}
                                    onChange={this.handleInputChange}
                                    name="topic"
                                    placeholder="Topic"
                                />
                                <Input
                                    value={this.state.startYear}
                                    onChange={this.handleInputChange}
                                    name="startYear"
                                    placeholder="Start Year (Format(YYYYMMDD)):"
                                />
                                <Input
                                    value={this.state.endYear}
                                    onChange={this.handleInputChange}
                                    name="endYear"
                                    placeholder="End Year (Format(YYYYMMDD)):"
                                />
                                <Btn
                                    disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Search
                            </Btn>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mx-auto ">
                    <div className="col-md-9 mx-auto     mt-2">
                        <div className="card">
                            <div className="card-header text-center">
                                Articles
                            </div>
                             
                            <div className="card-body text">
                                {this.state.articles.length ? (
                                    <ul >
                                        {this.state.articles.map(article => (
                                            <li key={article.id} className="bg-light mb-5 mt-5 border border-dark ml-3 ">
                                                <strong>
                                                    <h2> Title : {article.title}</h2>
                                                    <h2> URL :  {article.url}      </h2>
                                                    <h3>Pub Date : {article.date}</h3>
                                                <Btn  onClick={()=>this.handleArticleSave(article.id)}>Save</Btn>
                                                </strong>
                                            </li>
                                        ))}
                                    </ul>
                                        ) : (
                                        <h3>No Results to Display </h3>
                                       
                                )}
                            </div>
                           
                        </div>
                        </div>
                    </div>
                </div>


                )
            }
        
        }
        
export default Home;