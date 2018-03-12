export function Memory() {
  this.img = ['https://ssli.ebayimg.com/images/g/EoIAAOSw5VtaJbKk/s-l640.jpg', 'https://i1.wp.com/recgympros.com/wp-content/uploads/2016/01/teddy.jpg?fit=1200%2C900&w=640', 'http://www.givegift.com.hk/images/Teddy-Bear-n-Doll/640x480/Harrods-Oliver-teddy-bear~PIC76609924_v2.jpg', 'http://cidcoplush.net/BIG%20PAW%20BROWN.jpg', 'http://cidcoplush.net/BIG%20PAW%20BGE.jpg'];

  this.getImages = function() {
    var images = [];
    this.img.forEach(function(img) {
      images.push(img);
      images.push(img);
    });

    for (var i = 0; i < 10; i++) {
      var idx = i + Math.floor(Math.random() * (9 - i));
      var temp = images[i];
      images[i] = images[idx];
      images[idx] = temp;
    }
    return images;
  };
}
