document.addEventListener('DOMContentLoaded', function () {
    var triggers = document.getElementsByClassName("lightbox_trigger")
    
    for ( const trigger of triggers) {
    trigger.addEventListener("click", function(e) {
            
        e.preventDefault();
        
        let image_href = this.getAttribute('src');
        
        var element =  document.getElementById('lightbox')
        
        if (typeof(element) != 'undefined' && element != null) {
            
            document.getElementById('content').innerHTML = '<img src="' + image_href + '" />';
            
            document.getElementById('lightbox').style.display = "";
        }
        
        else { 
            console.log("inserting lightbox..")
            
            var lightbox = 
            '<div id="lightbox">' +
                // '<p>Click to close</p>' +
                '<div id="content">' + 
                    '<img src="' + image_href +'"/>' +
                '</div>' +	
            '</div>';

            var target = document.querySelector("body");
            target.insertAdjacentHTML('beforeend', lightbox);
        }

        var el = document.getElementById('lightbox')
        if(el) {
            document.getElementById('lightbox').addEventListener('click', function() { 
                document.getElementById("lightbox").style.display = "none"
            })
        }


    });
}
}, false);
