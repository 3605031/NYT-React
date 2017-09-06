import axios from "axios";


const APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + "&q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query,start,end) {
    let date_query = "";
    if(start!==""){
       date_query += "&begin_date=" + start + "0101";
    }
    if(end!==""){
      date_query += "&end_date=" + end + "0101";
    }
    console.log(BASEURL+ query + date_query);
    return axios.get(BASEURL+ query + date_query);
  },
  getArticles : function(){
    return axios.get("/api/articles")
  },
  saveArticles : function(article){
    return axios.post("/api/articles", {article})
  },
  delete : function(id){
    return axios.post(`/api/delete/${id}`);
  }
};