// Whenever a new file is added to the /photos directory
// get that file path and add it to the html.

{/* <div class="gallery">
<img src="./images/photo ${number}.jpg" class="lightbox_trigger" alt="no">
    <div class="desc">buildings</div>
</div> */}

document.addEventListener('DOMContentLoaded', function () {
    var number = 10

        for (let i = 0; i < number; i++) {
            var gallery =
            '<div class="gallery">' +
                '<img src="./images/photo' + i + '.jpg" class="lightbox_trigger" alt="no">' + 
            '</div>';

            var target = document.querySelector(".grid");
            target.insertAdjacentHTML('beforeend', gallery);
          }
});