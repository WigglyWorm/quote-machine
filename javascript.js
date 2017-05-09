$(document).ready(function() {

  var quote;

  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        $('#quote').text(response.quoteText);
        if (response.quoteAuthor) {
          $('#author').text('- ' + response.quoteAuthor);
        } else {
          $('#author').text('- unkown');
        }
      }
    });
  }

  getNewQuote();

  $('.get-quote').on('click', function(e) {
    e.preventDefault();
    getNewQuote();
  });

  $('.share-quote').on('click', function(e) {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
  });

});

// Change background onclick
$(document).ready(function(){
  var currentBackground = 0;
  
  $(".get-quote").click(function() {
    removeAllBgClasses();
    currentBackground = (currentBackground +1) % 10;
    $('body').addClass("bg-"+currentBackground);
  });
  
  
  function removeAllBgClasses() {
    $('body').removeClass("bg-0 bg-1 bg-2 bg-3 bg-4 bg-5 bg-6 bg-7 bg-8 bg-9");
  }
})