const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Bella Ciao",
      artist: "El Profesor",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FAs_I_Am_-_joshwoodward.mp3?alt=media&token=687db0de-7539-4219-aeae-099590f7f512",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fdownload%20(1).jpg?alt=media&token=0c71409d-6e68-4513-bc2c-d4d116f2db8d",
    },
    {
      id: 2,
      favourite: false,
      songName: "Beast",
      artist: "Anirudh Ravichander",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FBlind_girl_(feat._Dia_Yiannopoulou)_-_zero-project.mp3?alt=media&token=b3c03ed0-78d9-48b8-866f-0414ab83277f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fdownload.jpg?alt=media&token=dd11d507-aa97-4875-a3cc-993af4e8761f",
    },
    {
      id: 3,
      favourite: false,
      songName: "Joker - Rock and Roll",
      artist: "Hildur Guðnadóttir",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FBoomerang_-_HoneyChrome.mp3?alt=media&token=405ac3bd-475e-4465-bad5-65c5f3b1e28c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(1).jpg?alt=media&token=4523c073-3fd4-4d97-95e3-fe3b682099a4",
    },
    {
      id: 4,
      favourite: false,
      songName: "I Am A Peaky Blinder",
      artist: "Otnicka",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/Ringtone%2Fpeaky-blinder.mp3?alt=media&token=2ddb5cfb-f4e0-4604-b77c-a7f63894d3ec",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(10).jpg?alt=media&token=f2790758-4174-4442-85ca-0cdb9ded9887",
    },
    {
      id: 5,
      favourite: false,
      songName: "Naanga Vera Maari",
      artist: "Yuvan Shankar Raja",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FConstellate_-_Fleurie.mp3?alt=media&token=19d62d0b-4e59-4440-8669-fe5dc8443f32",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(11).jpg?alt=media&token=d3b9f5d2-66b9-4706-8cea-b62a1ab49fc4",
    },
    {
      id: 6,
      songName: "Your Woman",
      artist: "White Town",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FCover_Me_(album_version)_-_David_Krystal.mp3?alt=media&token=a1ac4512-346f-4e28-ba38-0d41211fd8a4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(12).jpg?alt=media&token=2e19caae-52be-4e12-b089-acfcf6437029",
    },
    {
      id: 7,
      favourite: false,
      songName: "Charlie",
      artist: "Gopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FConstellate_-_Fleurie.mp3?alt=media&token=19d62d0b-4e59-4440-8669-fe5dc8443f32",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(13)%20-%20Copy.jpg?alt=media&token=2dea42f7-99f1-47fd-9a15-a7261fa2ad36",
    },
    {
      id: 8,
      favourite: false,
      songName: "Mask Off",
      artist: "Future",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FDEJAVU_-_jaye.mp3?alt=media&token=825cc6c1-6c80-4156-805a-b3df70d087ae",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(14)%20-%20Copy.jpg?alt=media&token=ccb5ce53-c944-42fe-a52d-250ea495f3bc",
    },
    {
      id: 9,
      favourite: false,
      songName: "Hey Mama",
      artist: "David Guetta",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FDeep_Night_(A_Bit_Advanced_Music_featuring_Aminolen)_-_Aminolen.mp3?alt=media&token=939971ba-77af-4e54-a6f6-107df744a742",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(15)%20-%20Copy.jpg?alt=media&token=2195975d-90d7-48f1-b651-c1400a544c1b",
    },
    {
      id: 10,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FErick_Fill_%26amp%3B_Alwaro_-_You'll_Be_Fine_ft._Crushboys_(Original_Mix)_-_erickfill.mp3?alt=media&token=b7799215-8190-47f7-9592-4de18debabe4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(16).jpg?alt=media&token=a3a380bb-38ae-440c-96c6-437028434914",
    },
    {
      id: 11,
      favourite: false,
      songName: "Hey Mama",
      artist: "David Guetta",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FDeep_Night_(A_Bit_Advanced_Music_featuring_Aminolen)_-_Aminolen.mp3?alt=media&token=939971ba-77af-4e54-a6f6-107df744a742",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(17).jpg?alt=media&token=8a0f74b4-f21e-4e74-b117-c52c4cc0b082",
    },
    {
      id: 12,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FErick_Fill_%26amp%3B_Alwaro_-_You'll_Be_Fine_ft._Crushboys_(Original_Mix)_-_erickfill.mp3?alt=media&token=b7799215-8190-47f7-9592-4de18debabe4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(2).jpg?alt=media&token=9082cab2-3799-47d8-8cfb-34e5d96f1e08",
    },
    {
      id: 13,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FErick_Fill_%26amp%3B_Alwaro_-_You'll_Be_Fine_ft._Crushboys_(Original_Mix)_-_erickfill.mp3?alt=media&token=b7799215-8190-47f7-9592-4de18debabe4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(19).jpg?alt=media&token=e331ef9b-da4d-49d8-bb2a-f196eadf70f7",
    },
    {
      id: 14,
      favourite: false,
      songName: "Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FErick_Fill_%26amp%3B_Alwaro_-_You'll_Be_Fine_ft._Crushboys_(Original_Mix)_-_erickfill.mp3?alt=media&token=b7799215-8190-47f7-9592-4de18debabe4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(18).jpg?alt=media&token=31149a8b-5405-4aac-b81b-070f493e8ffe",
    },
    {
      id: 15,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/audios%2FErick_Fill_%26amp%3B_Alwaro_-_You'll_Be_Fine_ft._Crushboys_(Original_Mix)_-_erickfill.mp3?alt=media&token=b7799215-8190-47f7-9592-4de18debabe4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-14ca3.appspot.com/o/images%2Fimages%20(20).jpg?alt=media&token=a72df79f-c612-42a5-a9a0-fa1d3979eda8",
    },
  ];
  
  export { Songs };
  