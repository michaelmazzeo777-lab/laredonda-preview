/*
  LA REDONDA PHOTOS & VIDEOS
  ==========================
  EASIEST WAY: open tools/content-maker.html on your computer. It writes the code below for you.

  To add a photo or video:
    1. Put the file in this "media" folder.
       - Photos: JPG, about 1600px on the long side.
       - Videos: MP4 (H.264). iPhone .MOV clips can be converted on a Mac with:
           avconvert --source IMG_1234.MOV --preset Preset960x540 --output my-clip.m4v
         then rename my-clip.m4v to my-clip.mp4. Keep each video under 8 MB.
       - A poster: a still JPG (about 640px) shown on the tile before the video plays.
    2. Copy one { ... } block below, paste it where you want it in the list, and edit it.
    3. Upload the files and this file.

  Fields:
    type        "photo" or "video"
    src         The photo or video file, e.g. "media/my-clip.mp4"
    poster      The still image shown on the tile (for photos, a smaller copy of the photo)
    caption / caption_es   Short caption in English / Spanish

  Only post photos and videos of children whose parents have agreed to it.
*/
window.MEDIA = [
  { type: "video", src: "media/kids-game-time.mp4",      poster: "media/kids-game-time-poster.jpg",      caption: "Game time on the turf",          caption_es: "Hora de jugar en la cancha" },
  { type: "video", src: "media/footwork-drills.mp4",      poster: "media/footwork-drills-poster.jpg",      caption: "Footwork drills with a coach",   caption_es: "Ejercicios de pies con un entrenador" },
  { type: "video", src: "media/little-kickers.mp4",       poster: "media/little-kickers-poster.jpg",       caption: "Little kickers in action",       caption_es: "Pequeños futbolistas en acción" },
  { type: "video", src: "media/agility-ladder.mp4",       poster: "media/agility-ladder-poster.jpg",       caption: "Agility ladder work",            caption_es: "Trabajo con escalera de agilidad" },
  { type: "photo", src: "media/agility-ladder-photo.jpg", poster: "media/agility-ladder-photo-poster.jpg", caption: "Agility ladder training",        caption_es: "Entrenamiento con escalera de agilidad" },
  { type: "video", src: "media/flag-football-throw.mp4",  poster: "media/flag-football-throw-poster.jpg",  caption: "Flag football: quarterback reps", caption_es: "Flag football: práctica de pases" },
  { type: "video", src: "media/speed-training.mp4",       poster: "media/speed-training-poster.jpg",       caption: "Speed and footwork training",    caption_es: "Entrenamiento de velocidad y pies" },
  { type: "video", src: "media/flag-football-run.mp4",    poster: "media/flag-football-run-poster.jpg",    caption: "Flag football fun",              caption_es: "Diversión en flag football" }
];
