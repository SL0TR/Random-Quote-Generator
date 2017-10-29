$(document).ready(function(){
    
    getRanQuote();
    
    var randomNum, randomQ, randomA;
    
    function getRanQuote() {
      randomNum = Math.floor((Math.random() * 999));
      var link = "https://api.forismatic.com/api/1.0/?method=getQuote&key="+randomNum+"&lang=en&format=jsonp&jsonp=?";
      $.getJSON(link, function(a) {
        randomQ = a.quoteText;
        randomA = a.quoteAuthor;
     if (randomA == "") 
       randomA = "Anonymous"
     
     $(".quote").html("\' "+randomQ+"\'");
     $(".author").html("-"+ randomA);    
        
      });    
    };
    
    $(".get").click(function(){
      getRanQuote();
    });
    $(".tweetQ").click(function(){
      window.open("https://twitter.com/intent/tweet?text="+randomQ+" -"+randomA);
    });  
  });