/*****
	Loads article JSON files and parses in HTML
*****/

var Article = {
	list:[],
	loadPath: function(path) {
		$.getJSON(path, function(data){
			Article.renderArticle(data);
		});	
	},
	loadNum: function(num) {
		$.getJSON(Article.list[num], function(data){
			Article.renderArticle(data);
		});	
	},
	loadLatest: function(path) {
		$.getJSON(path, function(data){
			Article.list = data.articles;
			Article.loadNum(0);
		});
	},
	renderArticle: function(a){	
        $(".mainContent h3").text(
            a.article[0].name
        );
        $(".mainContent article").html(
            a.article[0].content
        );
        $.each(a.article[0].related, function(index, value) {
        	$(".related ul").append(
        		"<li>" + value + "</li>"
        	);
        });
	}
};