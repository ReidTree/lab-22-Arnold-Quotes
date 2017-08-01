var express = require('express');
var router = express.Router();

var arnold = [
  { 'quote': "Your clothes, give them to me, now!",
  "movie": "- Terminator",
  "img": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/08/16/arnoldschwarzenegger.jpg"},
  { 'quote': "Do it!",
  "movie": "- Predator",
  "img": "http://static3.businessinsider.com/image/535ee09b69bedd19569c9154/how-arnold-schwarzeneggers-get-to-the-choppa-movie-quote-became-so-popular.jpg"},
  { 'quote': "If it bleeds, we can kill it",
  "movie": "- Predator",
  "img": "http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/05/arnold-schwarzenegger-predator.jpg"},
  { 'quote': "See you at the party Richter!",
  "movie": "- Total Recall",
  "img": "http://www.2createabody.com/images/ArnoldTheGreat.jpg"},
  { 'quote': "Let off some steam, Bennett",
  "movie": "- Commando",
  "img": "http://hdcoolwallpapers.com/wp-content/uploads/2015/03/HD-Arnold-Schwarzenegger-Wallpapers-01.jpg"},
  { 'quote': "I’ll be back",
  "movie": "- Terminator",
  "img": "http://3.bp.blogspot.com/-2Zn5khxNGi4/TbsJ-InShUI/AAAAAAAAAFY/qIWX1oqU26k/s1600/Arnold-Schwarzenegger-Terminator-Wallpaper.jpg"},
  { 'quote': "Get to the chopper!",
  "movie": "- Predator",
  "img": "http://i.dailymail.co.uk/i/pix/2016/02/15/06/3139077300000578-0-image-m-23_1455516147162.jpg"},
  { 'quote': "Hasta La Vista, Baby!",
  "movie": "- Terminator",
  "img": "http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/11/Arnold-Schwarzenegger-Dark-Background-HD-Wallpapers.jpeg"},
  { 'quote': "Put the cookie down!",
  "movie": "- Jingle All the Way",
  "img": "http://static5.businessinsider.com/image/558f2f8b6da811142a7f9182-4596-3147/arnold-schwarzenegger-terminator-4.jpg"}
];

router.get('/quotes', function (req, res) {
  res.json(arnold);
});



module.exports = router;
