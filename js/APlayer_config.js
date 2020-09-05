const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: '没什么大不了（なんでもないや）（女声翻唱remix）',
            artist: 'Maxone,夏璃夜',
            lrc: '没什么大不了（なんでもないや）（女声翻唱remix）-Maxone,夏璃夜.lrc',
            cover: 'http://music.163.com/#/song?id=445886994',
            url: 'http://music.163.com/song/media/outer/url?id=445886994.mp3'
                  },
        {
            name: '我们的歌',
            artist: '王力宏',
            lrc: '',
            cover: '',
            url: '/music/我们的歌 - 王力宏.mp3'
                  }
        ]
});