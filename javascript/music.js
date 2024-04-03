document.addEventListener("DOMContentLoaded", function() {
// Define audio sources and index
var songs = [
  "storage/music/musicTwo.mp3",
  "storage/music/musicThree.mp3",
  "storage/music/musicFour.mp3",
  "storage/music/musicFive.mp3",
  "storage/music/musicSix.mp3",
  "storage/music/musicSeven.mp3",
  "storage/music/musicEight.mp3",
  "storage/music/musicNine.mp3",
  "storage/music/musicTen.mp3",
  "storage/music/musicEleven.mp3"
]; // Add your song sources here

var currentSongIndex = 0; // Start from 0 if the first song is preloaded
var audioElement = document.getElementById("audio");

// Add event listeners to buttons
document.getElementById("prev-btn").addEventListener("click", showPrevious);
document.getElementById("next-btn").addEventListener("click", showNext);
document.getElementById("play-btn").addEventListener("click", play);
document.getElementById("pause-btn").addEventListener("click", pause);

// Function to display the previous GIF and song
function showPrevious() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audioElement.src = songs[currentSongIndex];
  audioElement.play();
  updateGif(); // Update the GIF when the song changes
}

// Function to display the next GIF and song
function showNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audioElement.src = songs[currentSongIndex];
  audioElement.play();
  updateGif(); // Update the GIF when the song changes
}

// Function to play the song
function play() {
  audioElement.play();
}

// Function to pause the song
function pause() {
  audioElement.pause();
}

// Function to update the GIF based on the currently playing song
function updateGif() {
  // Get the GIF element
  var gifElement = document.getElementById("gif");
  
  // Define GIF filenames corresponding to each song index
  var gifFilenames = [
    "gif1.gif", 
    "gif2.gif", 
    "gif3.gif", 
    "gif4.gif", 
    "gif5.gif", 
    "gif7.gif", 
    "gif8.gif",
    "gif9.gif",
    "gif10.gif",
    "gif11.gif"

  ]; // Add your GIF filenames here, corresponding to each song

  // Update the GIF based on the current song index
  gifElement.src = "images/statics/" + gifFilenames[currentSongIndex];
}
});