/*****
	Include libraries, frameworks, and JS object scripts here
*****/

include('scripts/jquery-2.1.1.min.js');
include('scripts/menu.js');
include('scripts/article.js');
include('scripts/site.js');


function include(url)
{
    document.write('<script src="' + url + '" type="text/javascript"></script>');
    return false;
}
