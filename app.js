  
  
  
    var url = "https://www.homedepot.com/p/Instant-Mosaic-12-in-x-12-in-Metal-Backsplash-Tile-in-Stainless-6-Pack-6-03-104/207053448";
   
    var searchTerm = "red sofa";
    var customConfigId="";
    //var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    var queryURL = 'https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?' + 'q=' + searchTerm + '&apikeys=' +apikey +'&Ocp-Apim-Subscription-Key='+subscriptionKey;
    
        // Creating an AJAX call for the specific movie button being clicked
       // $(function() {
            var params = {
                // Request parameters
                "q": searchTerm,
                "customconfig": customConfigId
            };
     
            $.ajax({
                url: "https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?" + $.param(params),
                beforeSend: function(xhrObj){
                    // Request headers
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
                },
                type: "GET",
                // Request body
                data: "",
            })
            .done(function(data) {
                alert("success");
                console.log(data);
            })
            .fail(function() {
                alert("error");
            });
       // });
      
