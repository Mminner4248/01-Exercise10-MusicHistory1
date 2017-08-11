var songs = [];

songs[songs.length] = "Voodoo Child - by Jimi Hendrix on the album The Jimi Hendrix Experience";
songs[songs.length] = "Legs - by ZZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic - by Alanis Morisette on the album Jagged Little Pill";
songs[songs.length] = "Texas Flood - by Stevie Ray Vaughan on the album Texas Flood";

for (let i = 0; i < songs.length; i++) {
    
    let songList = `<p>${songs[i]}</p>`;
    let songHolder = document.getElementById("songDisplay");
    songHolder.innerHTML += songList;
}

