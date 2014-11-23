/*****
    Gets JSON and creates HTML menu
*****/

var Menu = {
    $nav: $(".menu"),
    parseMenuItem: function (data) {
        var item = $("<li>").append(
            $("<a>", {
                href: '#' + data.link,
                html: data.name
            }));
        if (data.sub) {
            var subList = $("<ul>");
            $.each(data.sub, function () {
                subList.append(Menu.parseMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    },
    init: function(path) {
        if(path == "") path = "data/menu.json";
        $.getJSON("data/menu.json", function(data){
            $.each(data.menu, function () {
                Menu.$nav.append(
                    Menu.parseMenuItem(this)
                );
            });
        });
    }
};

