import axios from "axios";

export default {
    getSavedArticles : function()
    {
       return axios.get("api/articles")
    },

    getArticles :function(searchObj)
    {
        let q=searchObj.topic;
        let startDate=searchObj.startYear;
        let endDate=searchObj.endYear
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4ce897641c3446babede737c831ec9ad&q="+q+"&begin_date="+startDate+"&end_date="+endDate)
    },

    saveArticle: function(article) {
         return axios.post("/api/articles", article);
       // alert("hi")
      },

      deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
      // alert("hi")
     }


}