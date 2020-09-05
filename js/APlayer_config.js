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

    audio: [
		{
            name: '没什么大不了（なんでもないや）（女声翻唱remix）',													<!-- 歌曲 -->
            artist: 'Maxone,夏璃夜',																					<!-- 歌手 -->
            lrc: '',																									<!-- 歌词 -->
            cover: 'http://p2.music.126.net/QvhFaxmaBYJnKsnk4ndsFQ==/109951162821138535.jpg?param=130y130',				<!-- 图片 -->
            url: 'http://music.163.com/song/media/outer/url?id=445886994.mp3'											<!-- 音乐 -->
                  },
        {
            name: 'Proud Of You',
            artist: '冯曦妤',
            lrc: '',
            cover: 'http://p1.music.126.net/-IRIgBXX12ZdupIQgcHFLQ==/109951163281530923.jpg',
            url: 'http://music.163.com/song/media/outer/url?id=229070.mp3'
                  },
		{
            name: '你的答案',
            artist: '阿冗',
            lrc: '',
            cover: 'http://p1.music.126.net/OlX-4S4L0Hdkyy_DQ27zag==/109951164459621658.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=1400256289.mp3'
                  },
		{
            name: '笔记',
            artist: '周笔畅',
            lrc: '',
            cover: 'http://p1.music.126.net/9WvlVAqDesQshpIuZ_Knew==/112150186046307.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=350909.mp3'
                  },
		{
            name: '大唐（demo）',
            artist: '托比昂',
            lrc: '',
            cover: 'http://p2.music.126.net/UNOVsz--jhBh1CnhXy_HqA==/109951164179062226.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=1386068860.mp3'
                  },	 
		{
            name: '相思',
            artist: '毛阿敏',
            lrc: '',
            cover: 'http://p2.music.126.net/OhnKZ86JoWQrVzTokYemuQ==/19078725765198702.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=276294.mp3'
                  },
		{
            name: 'Ayasa绚沙-告白の夜（AIHS remix）',
            artist: 'Aihs蝉飞海',
            lrc: '',
            cover: 'http://p2.music.126.net/szacPs6J48BSWyUrZkPcDA==/109951163938455561.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=1352991157.mp3'
                  },
		{
            name: '耿耿于怀',
            artist: '王笑文',
            lrc: '',
            cover: 'http://p2.music.126.net/_QgLdet7nTHEi4-4vtJA8g==/1401877329195852.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=407679465.mp3'
                  },
		{
            name: 'LOVE Theme from TIGA <M-2>',
            artist: '矢野立美',
            lrc: '',
            cover: 'http://p1.music.126.net/ovp01WdK31MShAHgi9i7OQ==/19231557881557586.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=4968365.mp3'
                  },
		{
            name: 'Senbonzakura [SS-Extended+Bass]',
            artist: 'Lindsey Stirling',
            lrc: '',
            cover: 'http://p1.music.126.net/4tTN8CnR7wG4E1cauIPCvQ==/109951163240682406.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=4875307.mp3'
                  },
		{
            name: 'I Want My Tears Back',
            artist: 'Nightwish',
            lrc: '',
            cover: 'http://p1.music.126.net/fhTee0GORPpAo_WCOLVxqw==/2555265022980841.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=21311956.mp3'
                  },
		{
            name: 'Monody (Radio Edit)',
            artist: 'TheFatRat / Laura Brehm',
            lrc: '',
            cover: 'http://p2.music.126.net/8myOXjbgKgCjQCqIqmYbaw==/18702692789941362.jpg?param=130y130',
            url: '/music/600535275.mp3'
                  }		  
        ]
});