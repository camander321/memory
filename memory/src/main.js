import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Memory } from './memory';

$(document).ready(function(){
  var memory = new Memory();
  var images = memory.getImages();
  images.forEach(function(img) {
    $('#cards').append('<div class="col-md-2 bear"><img class="hidden" src=' + img + '></div>');
    $('#cards').children('.bear').last().click(function() {
      $(this).children('img').removeClass("hidden");
      $(this).children('img').addClass("shown");

      console.log($(".shown").attr('src'));
    });
  });
});
