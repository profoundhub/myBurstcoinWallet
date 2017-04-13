
var bgArray = [
  'https://i.supload.com/r1569XdhTl.jpg',
  'https://i.supload.com/r1Ypcm_n6g.jpg',
  'https://i.supload.com/Skgp5mdn6l.jpg',
  'https://i.supload.com/rkp9Xd36e.jpg',
  'https://i.supload.com/HkET9md2pl.jpg',
  'https://i.supload.com/HJvp9md3pe.jpg',
  'https://i.supload.com/r1mpq7Onpx.png',
  'https://i.supload.com/H1_pq7Ohpl.jpg',
  'https://i.supload.com/ByGpcmO3px.jpg',
  'https://i.supload.com/SJITc7un6l.jpg',
  'https://i.supload.com/Hyr6cXd26x.jpg',  
  'https://i.supload.com/HJ-TqXu26e.jpg'
]
$('#backgrounds').on('change', function() {
  value = $(this).val() - 1;
  $('#bgDiv').css({
    'background-image': 'url(' + bgArray[value] + ')'
  });
});