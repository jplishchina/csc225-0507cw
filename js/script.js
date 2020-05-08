jQuery(document).ready(function($){
    function createMovieListItem(movie){
        var $li= $('<li>');
        $li.addClass('list-group-item hover-invert cursor-pointer');
        $li.html(movie.title);
        $li.data('movieId', movie.id);
        return $li;
    }
    var request = axios.get('http://csc225.mockable.io/movies');
    request.then(function(response){
        response.data.forEach(function(movie){
        $('#movie-list').append(createMovieListItem(movie));
        });
        $('.list-group-item').on('click', function(){
            $('.list-group-item').removeClass('active');
            var movieId = $(this).data('movieId');
            $(this).addClass('active');
            $('#poster').html('Loading...');
            var request = axios.get('http://csc225.mockable.io/movies/'+ movieId).then(function(response){
                console.log(response.data.poster);
                var $img = $('<img>').attr('src', response.data.poster).attr('alt', response.data.title);
                $('#poster').html($img);
            });

            
        });
    });
    console.log('hello');
    
    //var content = createMovieListItem('testing');
    //$('#movie-list').html(content);
});