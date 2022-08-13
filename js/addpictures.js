document.addEventListener('DOMContentLoaded', function () {
    var number = 12

        for (let i = 0; i < number; i++) {
            var gallery =
            '<div class="gallery">' +
                '<img src="./images/photo' + i + '.jpg" class="lightbox_trigger" alt="no">' + 
            '</div>';

            var target = document.querySelector(".grid");
            target.insertAdjacentHTML('beforeend', gallery);
          }
});