function openBootstrapModal(imageUrl) {
    var modalImage = $('#modalImage');
    modalImage.attr('src', imageUrl);

    // Show modal
    $('#imageModal').modal('show');
}

$('.image-gallery').on('click', function(e) {
    e.preventDefault();
    var imageUrl = $(this).attr('href');
    openBootstrapModal(imageUrl);
});