// Base de datos mock de mangas
let mangasDB = [
  {
    id: 1,
    titulo: "Doraemon",
    kanji: "ドラえもん",
    categoria: "🐣 Kodomo 🐣",
    descripcion: "Creado por Fujiko F. Fujio, narra las aventuras de Nobita, un niño torpe, y Doraemon, un gato robot del futuro que lo ayuda con inventos increíbles. Cada historia combina humor, imaginación y lecciones de vida sobre la responsabilidad y la amistad. Es uno de los mangas kodomo más influyentes y queridos de Japón y del mundo.",
    imagen: "/mangas/kodomo/doraemon/doraemon-portada.jpeg",
    tomos: [
        {
            id: 1,
            nombre: "Tomo 1",
            imagen: "/mangas/kodomo/doraemon/tomo-1/01.jpeg",
            paginas: [
            "/mangas/kodomo/doraemon/tomo-1/01.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/02.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/03.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/04.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/05.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/06.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/07.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/08.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/09.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/10.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/11.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/12.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/13.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/14.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/15.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/16.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/17.jpeg",
            "/mangas/kodomo/doraemon/tomo-1/18.jpeg"
            ]
            },
            {
                id: 2,
                nombre: "Tomo 2",
                imagen: "/mangas/kodomo/doraemon/tomo-2/01.jpeg",
                paginas: [
                  "/mangas/kodomo/doraemon/tomo-2/01.jpeg",
                  "/mangas/kodomo/doraemon/tomo-2/02.jpeg",
                  "/mangas/kodomo/doraemon/tomo-2/03.jpeg",
                  "/mangas/kodomo/doraemon/tomo-2/04.jpeg",
                  "/mangas/kodomo/doraemon/tomo-2/05.jpeg"
                ]
            },
            {
             id: 3,
              nombre: "Tomo 3",
              imagen: "/mangas/kodomo/doraemon/tomo-3/01.jpg",
              paginas: [
                  "/mangas/kodomo/doraemon/tomo-3/01.jpg",
                  "/mangas/kodomo/doraemon/tomo-3/02.jpeg",
                  "/mangas/kodomo/doraemon/tomo-3/03.jpeg",
                  "/mangas/kodomo/doraemon/tomo-3/04.jpeg",
                  "/mangas/kodomo/doraemon/tomo-3/05.jpeg"
                ]
              }
      ]
    },

    {
    id: 2,
    titulo: "Chi's Sweet Home",
    kanji: "チーズスイートホーム",
    categoria: "🐣 Kodomo 🐣",
    descripcion: "Obra de Konami Kanata, cuenta la vida cotidiana de Chi, una gatita curiosa que es adoptada por una familia amorosa. A través de sus pequeñas aventuras, muestra el mundo desde la mirada inocente de un gato. Es un manga kodomo tierno, relajante y visualmente adorable, ideal para todas las edades.",
    imagen: "/mangas/kodomo/chis-sweet-home/chi-portada.jpeg",
    tomos: [
        {
            id: 1,
            nombre: "Tomo 1",
            imagen: "/mangas/kodomo/chis-sweet-home/tomo-1/01.jpeg",
            paginas: [
                "/mangas/kodomo/chis-sweet-home/tomo-1/01.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/02.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/03.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/04.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/05.jpeg",
                "/mangas/komodo/chis-sweet-home/tomo-1/06.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/07.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/08.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/09.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/10.jpeg",
                "/mangas/kodomo/chis-sweet-home/tomo-1/11.jpeg"
            ]
        },
        ]
    },
    {
    id:3,
    titulo: "Neon Genesis Evangelion",
    kanji: "新世紀エヴァンゲリオン",
    categoria: "🤖 Mecha 🤖",
    descripcion: "Creado por Hideaki Anno, es un manga y anime de mechas que sigue a Shinji Ikari, un joven que pilota el robot Evangelion para luchar contra seres llamados Ángeles. Más allá de la acción, explora emociones humanas, religión y existencialismo, siendo una obra icónica del anime moderno.",
    imagen: "/mangas/mecha/neon-genesis-evangelion/neon-genesis-evangelion.jpg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/mecha/neon-genesis-evangelion/tomo-1/01.jpeg",
        paginas: [
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/01.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/02.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/03.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/04.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/05.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/06.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/07.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/08.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/09.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/10.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/11.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/12.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/13.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/14.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/15.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/16.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/17.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/18.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/19.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/20.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/21.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/22.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/23.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/24.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/25.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/26.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/27.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/28.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/29.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/30.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/31.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/32.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/33.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/34.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/35.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/36.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/37.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/38.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/39.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/40.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/41.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/42.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/43.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/44.jpeg",
          "/mangas/mecha/neon-genesis-evangelion/tomo-1/45.jpeg"
        ]
      }
    ]
  },
    {
    id: 4,
    titulo: "Mobile Suit Gundam THE ORIGIN", 
    kanji: "機動戦士ガンダム",
    categoria: "🤖 Mecha 🤖",
    descripcion: "Esta obra, creada por Yoshikazu Yasuhiko, es un manga mecha que rehace los eventos del clásico Mobile Suit Gundam (1979), explorando la guerra entre la Federación y el Principado de Zeon, el origen de los mobile suits y los destinos de personajes como Char Aznable.",
    imagen: "/mangas/mecha/mobile-suit-gundam-the-origin/mobile-suit-gundam-the-origin-portada.jpeg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/01.jpeg",
        paginas: [
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/01.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/02.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/03.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/04.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/05.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/06.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/07.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/08.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/09.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/10.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/11.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/12.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/13.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/14.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/15.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/16.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/17.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/18.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/19.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/20.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/21.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/22.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/23.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/24.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/25.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/26.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/27.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/28.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/29.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/30.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/31.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/32.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/33.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/34.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/35.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/36.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/37.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/38.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/39.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/40.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/41.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/42.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/43.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/44.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/45.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/46.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/47.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/48.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/49.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/50.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/51.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/52.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/53.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/54.jpeg",
          "/mangas/mecha/mobile-suit-gundam-the-origin/tomo-1/55.jpeg"
        ]
      }
    ]
  },

  {
    id: 5,
    titulo: "Re:Zero kara Hajimeru Isekai Seikatsu",
    kanji: "Re: ゼロから始める異世界生活",
    categoria: "🌀 Isekai 🌀",
    descripcion: "Creado por Tappei Nagatsuki, sigue a Subaru Natsuki, un joven transportado a otro mundo con la habilidad de volver en el tiempo al morir. Combina drama, suspenso y fantasía oscura, explorando el sacrificio, el dolor y la esperanza.",
    imagen: "/mangas/isekai/re-zero/re-zero-portada.jpg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/isekai/re-zero/tomo-1/01.jpeg",
        paginas: [
          "/mangas/isekai/re-zero/tomo-1/01.jpeg",
          "/mangas/isekai/re-zero/tomo-1/02.jpeg",
          "/mangas/isekai/re-zero/tomo-1/03.jpeg",
          "/mangas/isekai/re-zero/tomo-1/04.jpeg",
          "/mangas/isekai/re-zero/tomo-1/05.jpeg",
          "/mangas/isekai/re-zero/tomo-1/06.jpeg",
          "/mangas/isekai/re-zero/tomo-1/07.jpeg",
          "/mangas/isekai/re-zero/tomo-1/08.jpeg",
          "/mangas/isekai/re-zero/tomo-1/09.jpeg",
          "/mangas/isekai/re-zero/tomo-1/10.jpeg",
          "/mangas/isekai/re-zero/tomo-1/11.jpeg",
          "/mangas/isekai/re-zero/tomo-1/12.jpeg",
          "/mangas/isekai/re-zero/tomo-1/13.jpeg",
          "/mangas/isekai/re-zero/tomo-1/14.jpeg",
          "/mangas/isekai/re-zero/tomo-1/15.jpeg",
          "/mangas/isekai/re-zero/tomo-1/16.jpeg",
          "/mangas/isekai/re-zero/tomo-1/17.jpeg",
          "/mangas/isekai/re-zero/tomo-1/18.jpeg",
          "/mangas/isekai/re-zero/tomo-1/19.jpeg",
          "/mangas/isekai/re-zero/tomo-1/20.jpeg",
          "/mangas/isekai/re-zero/tomo-1/21.jpeg",
          "/mangas/isekai/re-zero/tomo-1/22.jpeg",
          "/mangas/isekai/re-zero/tomo-1/23.jpeg",
          "/mangas/isekai/re-zero/tomo-1/24.jpeg",
          "/mangas/isekai/re-zero/tomo-1/25.jpeg",
          "/mangas/isekai/re-zero/tomo-1/26.jpeg",
          "/mangas/isekai/re-zero/tomo-1/27.jpeg",
          "/mangas/isekai/re-zero/tomo-1/28.jpeg",
          "/mangas/isekai/re-zero/tomo-1/29.jpeg",
          "/mangas/isekai/re-zero/tomo-1/30.jpeg",
          "/mangas/isekai/re-zero/tomo-1/31.jpeg",
          "/mangas/isekai/re-zero/tomo-1/32.jpeg",
          "/mangas/isekai/re-zero/tomo-1/33.jpeg",
          "/mangas/isekai/re-zero/tomo-1/34.jpeg",
          "/mangas/isekai/re-zero/tomo-1/35.jpeg",
          "/mangas/isekai/re-zero/tomo-1/36.jpeg",
          "/mangas/isekai/re-zero/tomo-1/37.jpeg",
          "/mangas/isekai/re-zero/tomo-1/38.jpeg",
          "/mangas/isekai/re-zero/tomo-1/39.jpeg",
          "/mangas/isekai/re-zero/tomo-1/40.jpeg",
          "/mangas/isekai/re-zero/tomo-1/41.jpeg",
          "/mangas/isekai/re-zero/tomo-1/42.jpeg",
          "/mangas/isekai/re-zero/tomo-1/43.jpeg",
          "/mangas/isekai/re-zero/tomo-1/44.jpeg",
          "/mangas/isekai/re-zero/tomo-1/45.jpeg",
          "/mangas/isekai/re-zero/tomo-1/46.jpeg",
          "/mangas/isekai/re-zero/tomo-1/47.jpeg",
          "/mangas/isekai/re-zero/tomo-1/48.jpeg",
          "/mangas/isekai/re-zero/tomo-1/49.jpeg"
        ]
      }
    ]
  },

  {
    id: 6,
    titulo: "One Piece",
    kanji: "ワンピース",
    categoria: "⚔️ Shonen ⚔️", 
    descripcion: "Creado por Eiichirō Oda, sigue las aventuras de Monkey D. Luffy, un joven que sueña con convertirse en el Rey de los Piratas.\nJunto a su tripulación, recorre los mares buscando el legendario tesoro One Piece, enfrentando enemigos y forjando lazos de amistad inquebrantables.\nEs un manga shōnen emblemático, lleno de humor, acción y valores sobre la libertad y el trabajo en equipo.",
    imagen: "/mangas/shonen/one-piece/one-piece-portada.jpeg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/shonen/one-piece/tomo-1/01.jfif",
        paginas: [
          "/mangas/shonen/one-piece/tomo-1/01.jfif",
          "/mangas/shonen/one-piece/tomo-1/02.jfif",
          "/mangas/shonen/one-piece/tomo-1/03.jfif",
          "/mangas/shonen/one-piece/tomo-1/04.jfif",
          "/mangas/shonen/one-piece/tomo-1/05.jfif",
          "/mangas/shonen/one-piece/tomo-1/06.jfif",
          "/mangas/shonen/one-piece/tomo-1/07.jfif",
          "/mangas/shonen/one-piece/tomo-1/08.jfif",
          "/mangas/shonen/one-piece/tomo-1/09.jfif",
          "/mangas/shonen/one-piece/tomo-1/10.jfif",
          "/mangas/shonen/one-piece/tomo-1/11.jfif",
          "/mangas/shonen/one-piece/tomo-1/12.jfif",
          "/mangas/shonen/one-piece/tomo-1/13.jfif",
          "/mangas/shonen/one-piece/tomo-1/14.jfif",
          "/mangas/shonen/one-piece/tomo-1/15.jfif",
          "/mangas/shonen/one-piece/tomo-1/16.jfif",
          "/mangas/shonen/one-piece/tomo-1/17.jfif",
          "/mangas/shonen/one-piece/tomo-1/18.jfif",
          "/mangas/shonen/one-piece/tomo-1/19.jfif",
          "/mangas/shonen/one-piece/tomo-1/20.jfif",
          "/mangas/shonen/one-piece/tomo-1/21.jfif",
          "/mangas/shonen/one-piece/tomo-1/22.jfif",
          "/mangas/shonen/one-piece/tomo-1/23.jfif",
          "/mangas/shonen/one-piece/tomo-1/24.jfif",
          "/mangas/shonen/one-piece/tomo-1/25.jfif",
          "/mangas/shonen/one-piece/tomo-1/26.jfif",
          "/mangas/shonen/one-piece/tomo-1/27.jfif",
          "/mangas/shonen/one-piece/tomo-1/28.jfif",
          "/mangas/shonen/one-piece/tomo-1/29.jfif",
          "/mangas/shonen/one-piece/tomo-1/30.jfif",
          "/mangas/shonen/one-piece/tomo-1/31.jfif",
          "/mangas/shonen/one-piece/tomo-1/32.jfif",
          "/mangas/shonen/one-piece/tomo-1/33.jfif",
          "/mangas/shonen/one-piece/tomo-1/34.jfif",
          "/mangas/shonen/one-piece/tomo-1/35.jfif",
          "/mangas/shonen/one-piece/tomo-1/36.jfif",
          "/mangas/shonen/one-piece/tomo-1/37.jfif",
          "/mangas/shonen/one-piece/tomo-1/38.jfif",
          "/mangas/shonen/one-piece/tomo-1/39.jfif",
          "/mangas/shonen/one-piece/tomo-1/40.jfif",
          "/mangas/shonen/one-piece/tomo-1/41.jfif",
          "/mangas/shonen/one-piece/tomo-1/42.jfif",
          "/mangas/shonen/one-piece/tomo-1/43.jfif",
          "/mangas/shonen/one-piece/tomo-1/44.jfif",
          "/mangas/shonen/one-piece/tomo-1/45.jfif",
          "/mangas/shonen/one-piece/tomo-1/46.jfif",
          "/mangas/shonen/one-piece/tomo-1/47.jfif",
          "/mangas/shonen/one-piece/tomo-1/48.jfif",
          "/mangas/shonen/one-piece/tomo-1/49.jfif",
          "/mangas/shonen/one-piece/tomo-1/50.jfif",
          "/mangas/shonen/one-piece/tomo-1/51.jfif",
          "/mangas/shonen/one-piece/tomo-1/52.jfif",
          "/mangas/shonen/one-piece/tomo-1/53.jfif",
          "/mangas/shonen/one-piece/tomo-1/54.jfif",
          "/mangas/shonen/one-piece/tomo-1/55.jfif",
          "/mangas/shonen/one-piece/tomo-1/56.jfif"
        ]
      }
    ]
  },
  {
    id: 7,
    titulo: "Naruto",
    kanji: "ナルト",
    categoria: "⚔️ Shonen ⚔️",
    descripcion: "Cuenta la historia de Naruto Uzumaki, un joven ninja que sueña con convertirse en el Hokage, el líder de su aldea, para ganarse el respeto de todos. A lo largo de su viaje, enfrenta desafíos, amistades y batallas mientras busca reconocimiento, poder y un sentido de pertenencia, combinando acción, humor y fuertes mensajes sobre la perseverancia y la amistad.",
    imagen: "/mangas/shonen/naruto/naruto-portada.jpg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/shonen/naruto/tomo-1/01.jpeg",
        paginas: [
          "/mangas/shonen/naruto/tomo-1/01.jpeg",
          "/mangas/shonen/naruto/tomo-1/02.jfif",
          "/mangas/shonen/naruto/tomo-1/03.jfif",
          "/mangas/shonen/naruto/tomo-1/04.jfif",
          "/mangas/shonen/naruto/tomo-1/05.jfif",
          "/mangas/shonen/naruto/tomo-1/06.jfif",
          "/mangas/shonen/naruto/tomo-1/07.jfif",
          "/mangas/shonen/naruto/tomo-1/08.jfif",
          "/mangas/shonen/naruto/tomo-1/09.jfif",
          "/mangas/shonen/naruto/tomo-1/10.jfif",
          "/mangas/shonen/naruto/tomo-1/11.jfif",
          "/mangas/shonen/naruto/tomo-1/12.jfif",
          "/mangas/shonen/naruto/tomo-1/13.jfif",
          "/mangas/shonen/naruto/tomo-1/14.jfif",
          "/mangas/shonen/naruto/tomo-1/15.jfif",
          "/mangas/shonen/naruto/tomo-1/16.jfif",
          "/mangas/shonen/naruto/tomo-1/17.jfif",
          "/mangas/shonen/naruto/tomo-1/18.jfif",
          "/mangas/shonen/naruto/tomo-1/19.jfif",
          "/mangas/shonen/naruto/tomo-1/20.jfif",
          "/mangas/shonen/naruto/tomo-1/21.jfif",
          "/mangas/shonen/naruto/tomo-1/22.jfif",
          "/mangas/shonen/naruto/tomo-1/23.jfif",
          "/mangas/shonen/naruto/tomo-1/24.jfif",
          "/mangas/shonen/naruto/tomo-1/25.jfif",
          "/mangas/shonen/naruto/tomo-1/26.jfif",
          "/mangas/shonen/naruto/tomo-1/27.jfif",
          "/mangas/shonen/naruto/tomo-1/28.jfif",
          "/mangas/shonen/naruto/tomo-1/29.jfif",
          "/mangas/shonen/naruto/tomo-1/30.jfif",
          "/mangas/shonen/naruto/tomo-1/31.jfif",
          "/mangas/shonen/naruto/tomo-1/32.jfif",
          "/mangas/shonen/naruto/tomo-1/33.jfif",
          "/mangas/shonen/naruto/tomo-1/34.jfif",
          "/mangas/shonen/naruto/tomo-1/35.jfif",
          "/mangas/shonen/naruto/tomo-1/36.jfif",
          "/mangas/shonen/naruto/tomo-1/37.jfif",
          "/mangas/shonen/naruto/tomo-1/38.jfif",
          "/mangas/shonen/naruto/tomo-1/39.jfif",
          "/mangas/shonen/naruto/tomo-1/40.jfif",
          "/mangas/shonen/naruto/tomo-1/41.jfif",
          "/mangas/shonen/naruto/tomo-1/42.jfif",
          "/mangas/shonen/naruto/tomo-1/43.jfif",
          "/mangas/shonen/naruto/tomo-1/44.jfif",
          "/mangas/shonen/naruto/tomo-1/45.jfif",
          "/mangas/shonen/naruto/tomo-1/46.jfif",
          "/mangas/shonen/naruto/tomo-1/47.jfif",
          "/mangas/shonen/naruto/tomo-1/48.jfif",
          "/mangas/shonen/naruto/tomo-1/49.jfif",
          "/mangas/shonen/naruto/tomo-1/50.jfif",
          "/mangas/shonen/naruto/tomo-1/51.jfif",
          "/mangas/shonen/naruto/tomo-1/52.jfif",
          "/mangas/shonen/naruto/tomo-1/53.jfif",
          "/mangas/shonen/naruto/tomo-1/54.jfif",
          "/mangas/shonen/naruto/tomo-1/55.jfif",
          "/mangas/shonen/naruto/tomo-1/56.jfif"
        ]
      }
    ]
  },

  {
    id: 8,
    titulo: "Sekaiichi Hatsukoi 一Onodera Ritsu no baai一",
    kanji: "世界一初恋",
    categoria: "🌈 Shonen-ai 💙",
    descripcion: "Creado por Shungiku Nakamura, este manga shōnen-ai narra las historias románticas de varios editores en una editorial de manga. Se centra en amores pasados y reencuentros, mostrando relaciones llenas de ternura, humor y emociones realistas.",
    imagen: "/mangas/shonen-ai/sekaiichi-atsukoi/sekaiichi-atsukoi-portada.jpg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/01.jpeg",
        paginas: [
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/01.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/02.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/03.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/04.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/05.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/06.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/07.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/08.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/09.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/10.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/11.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/12.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/13.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/14.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/15.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/16.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/17.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/18.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/19.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/20.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/21.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/22.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/23.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/24.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/25.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/26.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/27.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/28.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/29.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/30.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/31.jpeg",
          "/mangas/shonen-ai/sekaiichi-atsukoi/tomo-1/32.jpeg"
        ]
      }
    ]
  },

  {
    id: 9,
    titulo: "Junjō Romantica",
    kanji: "純情ロマンチカ",
    categoria: "🌈 Shonen-ai 💙",
    descripcion: "También de Shungiku Nakamura, sigue tres parejas diferentes conectadas por lazos de amor y destino. Es un referente del género shōnen-ai, combinando romance, comedia y drama emocional con un tono dulce y apasionado.",
    imagen: "/mangas/shonen-ai/junjo-romantica/junjo-romantica-portada.jpg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/shonen-ai/junjo-romantica/tomo-1/01.jpeg",
        paginas: [
          "/mangas/shonen-ai/junjo-romantica/tomo-1/01.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/02.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/03.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/04.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/05.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/06.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/07.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/08.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/09.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/10.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/11.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/12.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/13.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/14.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/15.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/16.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/17.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/18.jpeg",
          "/mangas/shonen-ai/junjo-romantica/tomo-1/19.jpeg"
        ]
      }
    ]
  },

  {
    id: 10,
    titulo: "Berserk",
    kanji: "ベルセルク",
    categoria: "🗡️ Seinen 🗡️",
    descripcion: "Creado por Kentaro Miura, es un manga seinen oscuro y épico que sigue la vida de Guts, un mercenario marcado por el destino en un mundo brutal lleno de demonios y corrupción. Destaca por su profundidad psicológica, arte detallado y temas de lucha, venganza y humanidad.",
    imagen: "/mangas/seinen/berserk/berserk-portada.jpg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/seinen/berserk/tomo-1/01.jfif",
        paginas: [
          "/mangas/seinen/berserk/tomo-1/01.jfif",
          "/mangas/seinen/berserk/tomo-1/02.jfif",
          "/mangas/seinen/berserk/tomo-1/03.jfif",
          "/mangas/seinen/berserk/tomo-1/04.jfif",
          "/mangas/seinen/berserk/tomo-1/05.jfif",
          "/mangas/seinen/berserk/tomo-1/06.jfif",
          "/mangas/seinen/berserk/tomo-1/07.jfif",
          "/mangas/seinen/berserk/tomo-1/08.jfif",
          "/mangas/seinen/berserk/tomo-1/09.jfif",
          "/mangas/seinen/berserk/tomo-1/10.jfif",
          "/mangas/seinen/berserk/tomo-1/11.jfif",
          "/mangas/seinen/berserk/tomo-1/12.jfif",
          "/mangas/seinen/berserk/tomo-1/13.jfif",
          "/mangas/seinen/berserk/tomo-1/14.jfif",
          "/mangas/seinen/berserk/tomo-1/15.jfif",
          "/mangas/seinen/berserk/tomo-1/16.jfif",
          "/mangas/seinen/berserk/tomo-1/17.jfif",
          "/mangas/seinen/berserk/tomo-1/18.jfif",
          "/mangas/seinen/berserk/tomo-1/19.jfif",
          "/mangas/seinen/berserk/tomo-1/20.jfif",
          "/mangas/seinen/berserk/tomo-1/21.jfif",
          "/mangas/seinen/berserk/tomo-1/22.jfif",
          "/mangas/seinen/berserk/tomo-1/23.jfif",
          "/mangas/seinen/berserk/tomo-1/24.jfif",
          "/mangas/seinen/berserk/tomo-1/25.jfif",
          "/mangas/seinen/berserk/tomo-1/26.jfif",
          "/mangas/seinen/berserk/tomo-1/27.jfif",
          "/mangas/seinen/berserk/tomo-1/28.jfif",
          "/mangas/seinen/berserk/tomo-1/29.jfif",
          "/mangas/seinen/berserk/tomo-1/30.jfif",
          "/mangas/seinen/berserk/tomo-1/31.jfif",
          "/mangas/seinen/berserk/tomo-1/32.jfif",
          "/mangas/seinen/berserk/tomo-1/33.jfif",
          "/mangas/seinen/berserk/tomo-1/34.jfif",
          "/mangas/seinen/berserk/tomo-1/35.jfif",
          "/mangas/seinen/berserk/tomo-1/36.jfif",
          "/mangas/seinen/berserk/tomo-1/37.jfif",
          "/mangas/seinen/berserk/tomo-1/38.jfif",
          "/mangas/seinen/berserk/tomo-1/39.jfif",
          "/mangas/seinen/berserk/tomo-1/40.jfif",
          "/mangas/seinen/berserk/tomo-1/41.jfif",
          "/mangas/seinen/berserk/tomo-1/42.jfif",
          "/mangas/seinen/berserk/tomo-1/43.jfif",
          "/mangas/seinen/berserk/tomo-1/44.jfif",
          "/mangas/seinen/berserk/tomo-1/45.jfif",
          "/mangas/seinen/berserk/tomo-1/46.jfif",
          "/mangas/seinen/berserk/tomo-1/47.jfif",
          "/mangas/seinen/berserk/tomo-1/48.jfif",
          "/mangas/seinen/berserk/tomo-1/49.jfif",
          "/mangas/seinen/berserk/tomo-1/50.jfif",
          "/mangas/seinen/berserk/tomo-1/51.jfif",
          "/mangas/seinen/berserk/tomo-1/52.jfif",
          "/mangas/seinen/berserk/tomo-1/53.jfif",
          "/mangas/seinen/berserk/tomo-1/54.jfif",
          "/mangas/seinen/berserk/tomo-1/55.jfif",
          "/mangas/seinen/berserk/tomo-1/56.jfif",
          "/mangas/seinen/berserk/tomo-1/57.jfif",
          "/mangas/seinen/berserk/tomo-1/58.jfif",
          "/mangas/seinen/berserk/tomo-1/59.jfif",
          "/mangas/seinen/berserk/tomo-1/60.jfif",
          "/mangas/seinen/berserk/tomo-1/61.jfif",
          "/mangas/seinen/berserk/tomo-1/62.jfif",
          "/mangas/seinen/berserk/tomo-1/63.jfif",
          "/mangas/seinen/berserk/tomo-1/64.jfif",
          "/mangas/seinen/berserk/tomo-1/65.jfif",
          "/mangas/seinen/berserk/tomo-1/66.jfif",
          "/mangas/seinen/berserk/tomo-1/67.jfif",
          "/mangas/seinen/berserk/tomo-1/68.jfif",
          "/mangas/seinen/berserk/tomo-1/69.jfif",
          "/mangas/seinen/berserk/tomo-1/70.jfif",
          "/mangas/seinen/berserk/tomo-1/71.jfif",
          "/mangas/seinen/berserk/tomo-1/72.jfif",
          "/mangas/seinen/berserk/tomo-1/73.jfif",
          "/mangas/seinen/berserk/tomo-1/74.jfif",
          "/mangas/seinen/berserk/tomo-1/75.jfif",
          "/mangas/seinen/berserk/tomo-1/76.jfif",
          "/mangas/seinen/berserk/tomo-1/77.jfif",
          "/mangas/seinen/berserk/tomo-1/78.jfif",
          "/mangas/seinen/berserk/tomo-1/79.jfif",
          "/mangas/seinen/berserk/tomo-1/80.jfif",
          "/mangas/seinen/berserk/tomo-1/81.jfif",
          "/mangas/seinen/berserk/tomo-1/82.jfif",
          "/mangas/seinen/berserk/tomo-1/83.jfif",
          "/mangas/seinen/berserk/tomo-1/84.jfif",
          "/mangas/seinen/berserk/tomo-1/85.jfif",
          "/mangas/seinen/berserk/tomo-1/86.jfif",
          "/mangas/seinen/berserk/tomo-1/87.jfif",
          "/mangas/seinen/berserk/tomo-1/88.jfif",
          "/mangas/seinen/berserk/tomo-1/89.jfif",
          "/mangas/seinen/berserk/tomo-1/90.jfif",
          "/mangas/seinen/berserk/tomo-1/91.jfif",
          "/mangas/seinen/berserk/tomo-1/92.jfif",
          "/mangas/seinen/berserk/tomo-1/93.jfif"
        ]
      }
    ]
  },

  {
    id: 11, 
    titulo: "Shingeki no Kyojin",
    kanji: "進撃の巨人",
    categoria: "🗡️ Seinen 🗡️",
    descripcion: "Creado por Hajime Isayama, es un manga shōnen de tono oscuro y adulto que narra la lucha de la humanidad contra enormes criaturas humanoides llamadas titanes. Combina acción, drama y crítica social, explorando temas de libertad, miedo y poder en un mundo lleno de misterio y desesperación.",
    imagen: "/mangas/seinen/shingeki-no-kyojin/shingeki-no-kyojin-portada.jpeg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/seinen/shingeki-no-kyojin/tomo-1/01.jpeg",
        paginas: [
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/01.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/02.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/03.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/04.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/05.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/06.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/07.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/08.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/09.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/10.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/11.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/12.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/13.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/14.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/15.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/16.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/17.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/18.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/19.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/20.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/21.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/22.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/23.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/24.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/25.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/26.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/27.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/28.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/29.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/30.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/31.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/32.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/33.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/34.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/35.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/36.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/37.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/38.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/39.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/40.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/41.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/42.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/43.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/44.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/45.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/46.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/47.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/48.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/49.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/50.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/51.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/52.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/53.jpeg",
          "/mangas/seinen/shingeki-no-kyojin/tomo-1/54.jpeg"
        ]
      }
    ]
  },

  {
    id: 12,
    titulo: "Cardcaptor Sakura",
    kanji: "カードキャプターさくら",
    categoria: "✨ Majou-shoujo ✨",
    descripcion: "Creado por el grupo CLAMP, sigue a Sakura Kinomoto, una niña que accidentalmente libera unas cartas mágicas y debe recuperarlas usando sus poderes recién despertados. Es un manga majō shōjo lleno de magia, amistad y crecimiento emocional, con una estética dulce y encantadora.",
    imagen: "/mangas/majou-shoujo/cardcaptor-sakura/cardcaptor-sakura-portada.jfif",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/01.jfif",
        paginas: [
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/01.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/02.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/03.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/04.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/05.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/06.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/07.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/08.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/09.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/10.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/11.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/12.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/13.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/14.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/15.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/16.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/17.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/18.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/19.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/20.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/21.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/22.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/23.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/24.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/25.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/26.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/27.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/28.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/29.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/30.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/31.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/32.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/33.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/34.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/35.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/36.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/37.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/38.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/39.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/40.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/41.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/42.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/43.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/44.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/45.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/46.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/47.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/48.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/49.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/50.jfif",
          "/mangas/majou-shoujo/cardcaptor-sakura/tomo-1/51.jfif"
        ]
      }
    ]
  },

  {
    id: 13,
    titulo: "Gokinjo Monogatari",
    kanji: "ご近所物語",
    categoria: "💖 Shojo 💖",
    descripcion: "Creado por Ai Yazawa, este manga shōjo sigue a Mikako Kouda, una estudiante de moda que sueña con ser diseñadora, y a su amigo Tsutomu, mientras exploran el amor, la amistad y la juventud. Destaca por su estilo artístico moderno, su toque humorístico y emocional, y su enfoque en la autoexpresión y el crecimiento personal.",
    imagen: "/mangas/shojo/gokinjo-monogatari/gokinjo-monogatari-portada.jpeg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/shojo/gokinjo-monogatari/tomo-1/01.jpeg",
        paginas: [
          "/mangas/shojo/gokinjo-monogatari/tomo-1/01.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/02.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/03.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/04.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/05.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/06.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/07.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/08.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/09.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/10.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/11.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/12.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/13.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/14.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/15.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/16.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/17.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/18.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/19.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/20.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/21.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/22.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/23.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/24.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/25.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/26.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/27.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/28.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/29.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/30.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/31.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/32.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/33.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/34.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/35.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/36.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/37.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/38.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/39.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/40.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/41.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/42.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/43.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/44.jpeg",
          "/mangas/shojo/gokinjo-monogatari/tomo-1/45.jpeg"
        ]
      }
    ]
  },

  {
    id: 14,
    titulo: "Girl Friends",
    kanji: "ガールフレンズ",
    categoria: "🌈 Yuri 🌸",
    descripcion: "Obra de Milk Morinaga, cuenta la historia de Mari y Akko, dos chicas de secundaria que pasan de ser mejores amigas a descubrir sentimientos más profundos entre ellas. La obra retrata con ternura el despertar del amor y la identidad. Es un manga yuri realista, dulce y muy apreciado por su enfoque emocional y humano.",
    imagen: "/mangas/yuri/girl-friends/girl-friends-portada.jpg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/yuri/girl-friends/tomo-1/01.jpeg",
        paginas: [
          "/mangas/yuri/girl-friends/tomo-1/01.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/02.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/03.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/04.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/05.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/06.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/07.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/08.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/09.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/10.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/11.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/12.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/13.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/14.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/15.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/16.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/17.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/18.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/19.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/20.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/21.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/22.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/23.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/24.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/25.jpeg",
          "/mangas/yuri/girl-friends/tomo-1/26.jpeg"
        ]
      }
    ]
  },

  {
    id: 15,
    titulo: "Bloom Into You (Yagate Kimi ni Naru)",
    kanji: "やがて君になる",
    categoria: "🌈 Yuri 🌸",
    descripcion: "Creado por Nakatani Nio, sigue a Yuu Koito, una estudiante que nunca ha sentido amor romántico, y a Touko Nanami, su senpai que parece tenerlo todo claro. A medida que se conocen, ambas exploran lo que significa amar y ser amadas realmente. Es un manga yuri sensible, introspectivo y bellamente ilustrado.",
    imagen: "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/bloom-into-you-portada.jpeg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/01.jpeg",
        paginas: [
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/01.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/02.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/03.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/04.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/05.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/06.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/07.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/08.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/09.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/10.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/11.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/12.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/13.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/14.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/15.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/16.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/17.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/18.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/19.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/20.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/21.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/22.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/23.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/24.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/25.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/26.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/27.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/28.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/29.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/30.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/31.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/32.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/33.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/34.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/35.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/36.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/37.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/38.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/39.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/40.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/41.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/42.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/43.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/44.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/45.jpeg",
          "/mangas/yuri/bloom-into-you-yagate-kimi-ni-naru/tomo-1/46.jpeg"
        ]
      }
    ]
  },

  {
    id: 16,
    titulo: "Paradise Kiss",
    kanji: "パラダイス・キス",
    categoria: "💄 Josei 💄",
    descripcion: "Creado por Ai Yazawa, este manga josei sigue a Yukari Hayasaka, una estudiante que entra al mundo de la moda al conocer a un grupo de diseñadores excéntricos liderados por George. Explora la identidad, el amor y la independencia, con un estilo elegante y emocional característico de Yazawa.",
    imagen: "/mangas/josei/paradise-kiss/paradise-kiss-portada.jpeg",
    tomos: [
      {
        id: 1,
        nombre: "Tomo 1",
        imagen: "/mangas/josei/paradise-kiss/tomo-1/01.jpg",
        paginas: [
          "/mangas/josei/paradise-kiss/tomo-1/01.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/02.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/03.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/04.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/05.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/06.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/07.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/08.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/09.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/10.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/11.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/12.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/13.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/14.jpg",
          "/mangas/josei/paradise-kiss/tomo-1/15.jpg"
        ]
      
      }
    ]
  },
{
  id: 17,
  titulo: "Hamtaro",
  kanji: "とっとこハム太郎",
  categoria: "🐣 Kodomo 🐣",
  descripcion:
    "Narra las aventuras de Hamtaro y sus amigos hámsters, quienes viven pequeñas historias llenas de ternura, amistad y diversión. Es ideal para niños por su humor suave y personajes adorables.",
  imagen: "/mangas/kodomo/hamtaro/hamtaro-portada.jpg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/kodomo/hamtaro/tomo-1/01.jfif",
      paginas: [
        "/mangas/kodomo/hamtaro/tomo-1/01.jfif",
        "/mangas/kodomo/hamtaro/tomo-1/02.jfif",
        "/mangas/kodomo/hamtaro/tomo-1/03.jfif",
        "/mangas/kodomo/hamtaro/tomo-1/04.jfif",
        "/mangas/kodomo/hamtaro/tomo-1/05.jfif"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/kodomo/hamtaro/tomo-2/01.jpg",
      paginas: [
        "/mangas/kodomo/hamtaro/tomo-2/01.jpg",
        "/mangas/kodomo/hamtaro/tomo-2/02.jpg",
        "/mangas/kodomo/hamtaro/tomo-2/03.jpg",
        "/mangas/kodomo/hamtaro/tomo-2/04.jpg",
        "/mangas/kodomo/hamtaro/tomo-2/05.jpg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/kodomo/hamtaro/tomo-3/01.jpg",
      paginas: [
        "/mangas/kodomo/hamtaro/tomo-3/01.jpg",
        "/mangas/kodomo/hamtaro/tomo-3/02.jpg",
        "/mangas/kodomo/hamtaro/tomo-3/03.jpg",
        "/mangas/kodomo/hamtaro/tomo-3/04.jpg",
        "/mangas/kodomo/hamtaro/tomo-3/05.jpg"
      ]
    }
  ]
},

{
  id: 18,
  titulo: "Pokémon Adventures",
  kanji: "ポケットモンスター SPECIAL",
  categoria: "🐣 Kodomo 🐣",
  descripcion:
    "Sigue a distintos entrenadores Pokémon, como Red, en aventuras llenas de amistad, exploración y desafíos. Es Kodomo por su tono positivo, educativo y lleno de criaturas amigables.",
  imagen: "/mangas/kodomo/pokemon/pokemon-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/kodomo/pokemon/tomo-1/01.jpeg",
      paginas: [
        "/mangas/kodomo/pokemon/tomo-1/01.jpeg",
        "/mangas/kodomo/pokemon/tomo-1/02.jpeg",
        "/mangas/kodomo/pokemon/tomo-1/03.jpeg",
        "/mangas/kodomo/pokemon/tomo-1/04.jpeg",
        "/mangas/kodomo/pokemon/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/kodomo/pokemon/tomo-2/01.jpeg",
      paginas: [
        "/mangas/kodomo/pokemon/tomo-2/01.jpeg",
        "/mangas/kodomo/pokemon/tomo-2/02.jpeg",
        "/mangas/kodomo/pokemon/tomo-2/03.jpeg",
        "/mangas/kodomo/pokemon/tomo-2/04.jpeg",
        "/mangas/kodomo/pokemon/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/kodomo/pokemon/tomo-3/01.jpeg",
      paginas: [
        "/mangas/kodomo/pokemon/tomo-3/01.jpeg",
        "/mangas/kodomo/pokemon/tomo-3/02.jpeg",
        "/mangas/kodomo/pokemon/tomo-3/03.jpeg",
        "/mangas/kodomo/pokemon/tomo-3/04.jpeg",
        "/mangas/kodomo/pokemon/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 19,
  titulo: "Yo-kai Watch ~Waku Waku Nyanderful Days~",
  kanji: "妖怪ウォッチ ～わくわくにゃんだふるデイズ",
  categoria: "🐣 Kodomo 🐣",
  descripcion:
    "Un manga adorable y humorístico que muestra el día a día de Jibanyan y otros Yo-kai, viviendo pequeñas aventuras divertidas y llenas de ternura.",
  imagen: "/mangas/kodomo/yo-kai-watch/yo-kai-watch-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/kodomo/yo-kai-watch/tomo-1/01.jpeg",
      paginas: [
        "/mangas/kodomo/yo-kai-watch/tomo-1/01.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/02.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/03.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/04.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/05.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/06.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/07.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/08.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/09.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-1/10.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/kodomo/yo-kai-watch/tomo-2/01.jpeg",
      paginas: [
        "/mangas/kodomo/yo-kai-watch/tomo-2/01.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-2/02.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-2/03.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-2/04.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/kodomo/yo-kai-watch/tomo-3/01.jpeg",
      paginas: [
        "/mangas/kodomo/yo-kai-watch/tomo-3/01.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-3/02.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-3/03.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-3/04.jpeg",
        "/mangas/kodomo/yo-kai-watch/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 20,
  titulo: "Kotarou wa hitorigurashi",
  kanji: "コタローは1人暮らし",
  categoria: "🐣 Kodomo 🐣",
  descripcion:
    "Sigue a Kotarō, un niño pequeño que vive completamente solo en un apartamento, sorprendiendo a sus vecinos. Con humor y ternura, el manga explora sus vínculos con los adultos que lo rodean y los secretos detrás de su independencia.",
  imagen: "/mangas/kodomo/kotarou-wa-hitorigurashi/kotarou-wa-hitorigurashi-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-1/01.jpeg",
      paginas: [
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-1/01.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-1/02.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-1/03.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-1/04.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-2/01.jpeg",
      paginas: [
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-2/01.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-2/02.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-2/03.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-2/04.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-3/01.jpeg",
      paginas: [
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-3/01.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-3/02.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-3/03.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-3/04.jpeg",
        "/mangas/kodomo/kotarou-wa-hitorigurashi/tomo-3/05.jpeg"
      ]
    }
  ]
},


{
  id: 22,
  titulo: "Mazinger Z",
  kanji: "マジンガーZ",
  categoria: "🤖 Mecha 🤖",
  descripcion:
    "El joven Kōji Kabuto pilota al poderoso robot Mazinger Z para detener al Doctor Hell, marcando el nacimiento del mecha piloted clásico.",
  imagen: "/mangas/mecha/mazinger-z/mazinger-z-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/mecha/mazinger-z/tomo-1/01.jpeg",
      paginas: [
        "/mangas/mecha/mazinger-z/tomo-1/01.jpeg",
        "/mangas/mecha/mazinger-z/tomo-1/02.jpeg",
        "/mangas/mecha/mazinger-z/tomo-1/03.jpeg",
        "/mangas/mecha/mazinger-z/tomo-1/04.jpeg",
        "/mangas/mecha/mazinger-z/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/mecha/mazinger-z/tomo-2/01.jpeg",
      paginas: [
        "/mangas/mecha/mazinger-z/tomo-2/01.jpeg",
        "/mangas/mecha/mazinger-z/tomo-2/02.jpeg",
        "/mangas/mecha/mazinger-z/tomo-2/03.jpeg",
        "/mangas/mecha/mazinger-z/tomo-2/04.jpeg",
        "/mangas/mecha/mazinger-z/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/mecha/mazinger-z/tomo-3/01.jpeg",
      paginas: [
        "/mangas/mecha/mazinger-z/tomo-3/01.jpeg",
        "/mangas/mecha/mazinger-z/tomo-3/02.jpeg",
        "/mangas/mecha/mazinger-z/tomo-3/03.jpeg",
        "/mangas/mecha/mazinger-z/tomo-3/04.jpeg",
        "/mangas/mecha/mazinger-z/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 23,
  titulo: "Full Metal Panic!",
  kanji: "フルメタル・パニック!",
  categoria: "🤖 Mecha 🤖",
  descripcion:
    "Un soldado adolescente protege a una estudiante terca mientras combate en mechas, mezclando acción militar, comedia escolar y romance.",
  imagen: "/mangas/mecha/full-metal-panic/full-metal-panic-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/mecha/full-metal-panic/tomo-1/01.jpeg",
      paginas: [
        "/mangas/mecha/full-metal-panic/tomo-1/01.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-1/02.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-1/03.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-1/04.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/mecha/full-metal-panic/tomo-2/01.jpeg",
      paginas: [
        "/mangas/mecha/full-metal-panic/tomo-2/01.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-2/02.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-2/03.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-2/04.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/mecha/full-metal-panic/tomo-3/01.jpeg",
      paginas: [
        "/mangas/mecha/full-metal-panic/tomo-3/01.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-3/02.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-3/03.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-3/04.jpeg",
        "/mangas/mecha/full-metal-panic/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 24,
  titulo: "Eighty Six",
  kanji: "エイティシックス",
  categoria: "🤖 Mecha 🤖",
  descripcion:
    "En medio de una guerra futurista, jóvenes pilotos marginados combaten dentro de drones/mechas llamados Juggernauts, mientras enfrentan discriminación, trauma y secretos militares.",
  imagen: "/mangas/mecha/eighty-six/eighty-six-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/mecha/eighty-six/tomo-1/01.jpeg",
      paginas: [
        "/mangas/mecha/eighty-six/tomo-1/01.jpeg",
        "/mangas/mecha/eighty-six/tomo-1/02.jpeg",
        "/mangas/mecha/eighty-six/tomo-1/03.jpeg",
        "/mangas/mecha/eighty-six/tomo-1/04.jpeg",
        "/mangas/mecha/eighty-six/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/mecha/eighty-six/tomo-2/01.jpeg",
      paginas: [
        "/mangas/mecha/eighty-six/tomo-2/01.jpeg",
        "/mangas/mecha/eighty-six/tomo-2/02.jpeg",
        "/mangas/mecha/eighty-six/tomo-2/03.jpeg",
        "/mangas/mecha/eighty-six/tomo-2/04.jpeg",
        "/mangas/mecha/eighty-six/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/mecha/eighty-six/tomo-3/01.jpeg",
      paginas: [
        "/mangas/mecha/eighty-six/tomo-3/01.jpeg",
        "/mangas/mecha/eighty-six/tomo-3/02.jpeg",
        "/mangas/mecha/eighty-six/tomo-3/03.jpeg",
        "/mangas/mecha/eighty-six/tomo-3/04.jpeg",
        "/mangas/mecha/eighty-six/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 25,
  titulo: "Digimon Adventure",
  kanji: "デジモンアドベンチャー",
  categoria: "🌀 Isekai 🌀",
  descripcion:
    "Un grupo de niños llega al Mundo Digital, donde junto a sus Digimon enfrentan desafíos mientras descubren su propio crecimiento y vínculos.",
  imagen: "/mangas/isekai/digimon/digimon-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/isekai/digimon/tomo-1/01.jpeg",
      paginas: [
        "/mangas/isekai/digimon/tomo-1/01.jpeg",
        "/mangas/isekai/digimon/tomo-1/02.jpeg",
        "/mangas/isekai/digimon/tomo-1/03.jpeg",
        "/mangas/isekai/digimon/tomo-1/04.jpeg",
        "/mangas/isekai/digimon/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/isekai/digimon/tomo-2/01.jpeg",
      paginas: [
        "/mangas/isekai/digimon/tomo-2/01.jpeg",
        "/mangas/isekai/digimon/tomo-2/02.jpeg",
        "/mangas/isekai/digimon/tomo-2/03.jpeg",
        "/mangas/isekai/digimon/tomo-2/04.jpeg",
        "/mangas/isekai/digimon/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/isekai/digimon/tomo-3/01.jpeg",
      paginas: [
        "/mangas/isekai/digimon/tomo-3/01.jpeg",
        "/mangas/isekai/digimon/tomo-3/02.jpeg",
        "/mangas/isekai/digimon/tomo-3/03.jpeg",
        "/mangas/isekai/digimon/tomo-3/04.jpeg",
        "/mangas/isekai/digimon/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 26,
  titulo: "So I'm a Spider, So What?",
  kanji: "蜘蛛ですが、なにか？",
  categoria: "🌀 Isekai 🌀",
  descripcion:
    "Sigue a una estudiante que reencarna como una araña en un peligroso laberinto lleno de monstruos. Usando ingenio y evolución constante, lucha por sobrevivir mientras descubre secretos sobre el mundo y su propia existencia.",
  imagen: "/mangas/isekai/so-im-a-spider/so-im-a-spider-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/isekai/so-im-a-spider/tomo-1/01.jpeg",
      paginas: [
        "/mangas/isekai/so-im-a-spider/tomo-1/01.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-1/02.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-1/03.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-1/04.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/isekai/so-im-a-spider/tomo-2/01.jpeg",
      paginas: [
        "/mangas/isekai/so-im-a-spider/tomo-2/01.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-2/02.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-2/03.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-2/04.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/isekai/so-im-a-spider/tomo-3/01.jpeg",
      paginas: [
        "/mangas/isekai/so-im-a-spider/tomo-3/01.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-3/02.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-3/03.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-3/04.jpeg",
        "/mangas/isekai/so-im-a-spider/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 28,
  titulo: "Sword Art Online",
  kanji: "ソードアート・オンライン",
  categoria: "🌀 Isekai 🌀",
  descripcion:
    "Kirito queda atrapado en un VRMMO donde morir en el juego significa morir en la vida real, luchando por sobrevivir y liberar a los jugadores.",
  imagen: "/mangas/isekai/sword-art-online/sword-art-online-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/isekai/sword-art-online/tomo-1/01.jpeg",
      paginas: [
        "/mangas/isekai/sword-art-online/tomo-1/01.jpeg",
        "/mangas/isekai/sword-art-online/tomo-1/02.jpeg",
        "/mangas/isekai/sword-art-online/tomo-1/03.jpeg",
        "/mangas/isekai/sword-art-online/tomo-1/04.jpeg",
        "/mangas/isekai/sword-art-online/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/isekai/sword-art-online/tomo-2/01.jpeg",
      paginas: [
        "/mangas/isekai/sword-art-online/tomo-2/01.jpeg",
        "/mangas/isekai/sword-art-online/tomo-2/02.jpeg",
        "/mangas/isekai/sword-art-online/tomo-2/03.jpeg",
        "/mangas/isekai/sword-art-online/tomo-2/04.jpeg",
        "/mangas/isekai/sword-art-online/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/isekai/sword-art-online/tomo-3/01.jpeg",
      paginas: [
        "/mangas/isekai/sword-art-online/tomo-3/01.jpeg",
        "/mangas/isekai/sword-art-online/tomo-3/02.jpeg",
        "/mangas/isekai/sword-art-online/tomo-3/03.jpeg",
        "/mangas/isekai/sword-art-online/tomo-3/04.jpeg",
        "/mangas/isekai/sword-art-online/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 29,
  titulo: "Tate no Yuusha no Nariagari",
  kanji: "盾の勇者の成り上がり",
  categoria: "🌀 Isekai 🌀",
  descripcion:
    "Naofumi es invocado como el Héroe del Escudo, pero traicionado desde el inicio; deberá levantarse desde cero para sobrevivir y cambiar su destino.",
  imagen: "/mangas/isekai/tate-no-yuusha-no-nariagari/tate-no-yuusha-no-nariagari-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-1/01.jpeg",
      paginas: [
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-1/01.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-1/02.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-1/03.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-1/04.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-2/01.jpeg",
      paginas: [
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-2/01.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-2/02.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-2/03.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-2/04.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-3/01.jpeg",
      paginas: [
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-3/01.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-3/02.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-3/03.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-3/04.jpeg",
        "/mangas/isekai/tate-no-yuusha-no-nariagari/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 30,
  titulo: "Tate no Yuusha no Nariagari",
  kanji: "盾の勇者の成り上がり",
  categoria: "🌀 Isekai 🌀",
  descripcion:
    "Naofumi es invocado como el Héroe del Escudo, pero traicionado desde el inicio; deberá levantarse desde cero para sobrevivir y cambiar su destino.",
  imagen: "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/kono-subarashii-sekai-ni-shukufuku-wo-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-1/01.jpeg",
      paginas: [
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-1/01.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-1/02.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-1/03.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-1/04.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-2/01.jpeg",
      paginas: [
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-2/01.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-2/02.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-2/03.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-2/04.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-3/01.jpeg",
      paginas: [
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-3/01.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-3/02.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-3/03.jpeg",
        "/mangas/isekai/kono-subarashii-sekai-ni-shukufuku-wo/tomo-3/04.jpeg"
      ]
    }
  ]
},

{
  id: 31,
  titulo: "Dragon Ball",
  kanji: "ドラゴンボール",
  categoria: "⚔️ Shonen ⚔️",
  descripcion:
    "Naofumi es invocado como el Héroe del Escudo, pero traicionado desde el inicio; deberá levantarse desde cero para sobrevivir y cambiar su destino.",
  imagen: "/mangas/shonen/dragon-ball/dragon-ball-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shonen/dragon-ball/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shonen/dragon-ball/tomo-1/01.jpeg",
        "/mangas/shonen/dragon-ball/tomo-1/02.jpeg",
        "/mangas/shonen/dragon-ball/tomo-1/03.jpeg",
        "/mangas/shonen/dragon-ball/tomo-1/04.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen/dragon-ball/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shonen/dragon-ball/tomo-2/01.jpeg",
        "/mangas/shonen/dragon-ball/tomo-2/02.jpeg",
        "/mangas/shonen/dragon-ball/tomo-2/03.jpeg",
        "/mangas/shonen/dragon-ball/tomo-2/04.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/shonen/dragon-ball/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shonen/dragon-ball/tomo-3/01.jpeg",
        "/mangas/shonen/dragon-ball/tomo-3/02.jpeg",
        "/mangas/shonen/dragon-ball/tomo-3/03.jpeg",
        "/mangas/shonen/dragon-ball/tomo-3/04.jpeg"
      ]
    }
  ]
},

{
  id: 32,
  titulo: "Bleach",
  kanji: "ブリーチ",
  categoria: "⚔️ Shonen ⚔️",
  descripcion:
    "De Tite Kubo, narra cómo Ichigo Kurosaki obtiene poderes de Shinigami y protege a los vivos y espíritus de criaturas llamadas HollowsDestaca por su estilo visual, mundos espirituales y combates estilizados.",
  imagen: "/mangas/shonen/bleach/bleach-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shonen/bleach/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shonen/bleach/tomo-1/01.jpeg",
        "/mangas/shonen/bleach/tomo-1/02.jpeg",
        "/mangas/shonen/bleach/tomo-1/03.jpeg",
        "/mangas/shonen/bleach/tomo-1/04.jpeg",
        "/mangas/shonen/bleach/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen/bleach/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shonen/bleach/tomo-2/01.jpeg",
        "/mangas/shonen/bleach/tomo-2/02.jpeg",
        "/mangas/shonen/bleach/tomo-2/03.jpeg",
        "/mangas/shonen/bleach/tomo-2/04.jpeg",
        "/mangas/shonen/bleach/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/shonen/bleach/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shonen/bleach/tomo-3/01.jpeg",
        "/mangas/shonen/bleach/tomo-3/02.jpeg",
        "/mangas/shonen/bleach/tomo-3/03.jpeg",
        "/mangas/shonen/bleach/tomo-3/04.jpeg",
        "/mangas/shonen/bleach/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 33,
  titulo: "My Hero Academia",
  kanji: "僕のヒーローアカデミア",
  categoria: "⚔️ Shonen ⚔️",
  descripcion:
    "De Kōhei Horikoshi, sigue a Izuku Midoriya, un chico sin poderes en un mundo lleno de héroes, que hereda la habilidad de su ídolo. Explora heroísmo, responsabilidad y crecimiento, con acción escolar y emocional.",
  imagen: "/mangas/shonen/my-hero-academia/my-hero-academia-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 0",
      imagen: "/mangas/shonen/my-hero-academia/tomo-0/01.jpeg",
      paginas: [
        "/mangas/shonen/my-hero-academia/tomo-0/01.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-0/02.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-0/03.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-0/04.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-0/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen/my-hero-academia/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shonen/my-hero-academia/tomo-1/01.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-1/02.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-1/03.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-1/04.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-1/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen/my-hero-academia/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shonen/my-hero-academia/tomo-2/01.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-2/02.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-2/03.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-2/04.jpeg",
        "/mangas/shonen/my-hero-academia/tomo-2/05.jpeg"
      ]
    }
  ]
},

{
  id: 34,
  titulo: "Jujutsu Kaisen",
  kanji: "呪術廻戦",
  categoria: "⚔️ Shonen ⚔️",
  descripcion:
    "Creado por Gege Akutami, trata de Yuji Itadori, quien se une a la escuela de hechicería tras ingerir un poderoso espíritu maldito. Es un shōnen oscuro con terror, artes místicas y dilemas humanos.",
  imagen: "/mangas/shonen/jujutsu-kaisen/jujutsu-kaisen-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shonen/jujutsu-kaisen/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shonen/jujutsu-kaisen/tomo-1/01.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-1/02.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-1/03.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-1/04.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen/jujutsu-kaisen/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shonen/jujutsu-kaisen/tomo-2/01.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-2/02.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-2/03.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-2/04.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/shonen/jujutsu-kaisen/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shonen/jujutsu-kaisen/tomo-3/01.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-3/02.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-3/03.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-3/04.jpeg",
        "/mangas/shonen/jujutsu-kaisen/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 35,
  titulo: "Given",
  kanji: "ギヴン",
  categoria: "🌈 Shonen-ai 💙",
  descripcion:
    "Narra la relación entre dos chicos unidos por la música, el duelo emocional y el crecimiento personal dentro de una banda.",
  imagen: "/mangas/shonen-ai/given/given-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shonen-ai/given/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/given/tomo-1/01.jpeg",
        "/mangas/shonen-ai/given/tomo-1/02.jpeg",
        "/mangas/shonen-ai/given/tomo-1/03.jpeg",
        "/mangas/shonen-ai/given/tomo-1/04.jpeg",
        "/mangas/shonen-ai/given/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen-ai/given/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/given/tomo-2/01.jpeg",
        "/mangas/shonen-ai/given/tomo-2/02.jpeg",
        "/mangas/shonen-ai/given/tomo-2/03.jpeg",
        "/mangas/shonen-ai/given/tomo-2/04.jpeg",
        "/mangas/shonen-ai/given/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/shonen-ai/given/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/given/tomo-3/01.jpeg",
        "/mangas/shonen-ai/given/tomo-3/02.jpeg",
        "/mangas/shonen-ai/given/tomo-3/03.jpeg",
        "/mangas/shonen-ai/given/tomo-3/04.jpeg",
        "/mangas/shonen-ai/given/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 36,
  titulo: "Ten Count",
  kanji: "テンカウント",
  categoria: "🌈 Shonen-ai 💙",
  descripcion:
    "Un terapeuta y su paciente, quien sufre misofobia, desarrollan una relación íntima mientras exploran emociones profundas y traumas.",
  imagen: "/mangas/shonen-ai/ten-count/ten-count-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shonen-ai/ten-count/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/ten-count/tomo-1/01.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-1/02.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-1/03.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-1/04.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen-ai/ten-count/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/ten-count/tomo-2/01.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-2/02.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-2/03.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-2/04.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/shonen-ai/ten-count/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/ten-count/tomo-3/01.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-3/02.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-3/03.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-3/04.jpeg",
        "/mangas/shonen-ai/ten-count/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 37,
  titulo: "Hitorijime My Hero",
  kanji: "ひとりじめマイヒーロー",
  categoria: "🌈 Shonen-ai 💙",
  descripcion:
    "Un profesor y un estudiante mayor se ven envueltos en una relación tierna, protectora y llena de crecimiento emocional.",
  imagen: "/mangas/shonen-ai/hitorijime-my-hero/hitorijime-my-hero-portada.jpg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shonen-ai/hitorijime-my-hero/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-1/01.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-1/02.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-1/03.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-1/04.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen-ai/hitorijime-my-hero/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-2/01.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-2/02.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-2/03.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-2/04.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/shonen-ai/hitorijime-my-hero/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-3/01.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-3/02.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-3/03.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-3/04.jpeg",
        "/mangas/shonen-ai/hitorijime-my-hero/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 38,
  titulo: "Love Stage!!",
  kanji: "ラブステージ!!",
  categoria: "🌈 Shonen-ai 💙",
  descripcion:
    "Izumi, un chico con familia famosa, termina trabajando con un actor que cree que él es mujer, iniciando una historia cómica y romántica.",
  imagen: "/mangas/shonen-ai/love-stage/love-stage-portada.jpg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 0",
      imagen: "/mangas/shonen-ai/love-stage/tomo-0/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/love-stage/tomo-0/01.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-0/02.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-0/03.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-0/04.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-0/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/shonen-ai/love-stage/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/love-stage/tomo-1/01.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-1/02.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-1/03.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-1/04.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-1/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/shonen-ai/love-stage/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shonen-ai/love-stage/tomo-2/01.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-2/02.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-2/03.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-2/04.jpeg",
        "/mangas/shonen-ai/love-stage/tomo-2/05.jpeg"
      ]
    }
  ]
},

{
  id: 39,
  titulo: "Tokyo Ghoul",
  kanji: "東京喰種トーキョーグール",
  categoria: "🗡️ Seinen 🗡️",
  descripcion:
    "La vida de Kaneki cambia cuando se convierte en un ghoul, seres que solo pueden comer carne humana. Mientras lucha por sobrevivir entre humanos y ghouls, debe enfrentarse a su nueva naturaleza y a un mundo lleno de conflicto y dolor.",
  imagen: "/mangas/seinen/tokyo-ghoul/tokyo-ghoul-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/seinen/tokyo-ghoul/tomo-1/01.jpeg",
      paginas: [
        "/mangas/seinen/tokyo-ghoul/tomo-1/01.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-1/02.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-1/03.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-1/04.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/seinen/tokyo-ghoul/tomo-2/01.jpeg",
      paginas: [
        "/mangas/seinen/tokyo-ghoul/tomo-2/01.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-2/02.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-2/03.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-2/04.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/seinen/tokyo-ghoul/tomo-3/01.jpeg",
      paginas: [
        "/mangas/seinen/tokyo-ghoul/tomo-3/01.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-3/02.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-3/03.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-3/04.jpeg",
        "/mangas/seinen/tokyo-ghoul/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 40,
  titulo: "Monster",
  kanji: "モンスター",
  categoria: "🗡️ Seinen 🗡️",
  descripcion:
    "El doctor Kenzo Tenma persigue a Johan, un hombre al que salvó y que se convierte en un asesino. Thriller psicológico sobre moralidad, identidad y el origen del mal.",
  imagen: "/mangas/seinen/monster/monster-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/seinen/monster/tomo-1/01.jpeg",
      paginas: [
        "/mangas/seinen/monster/tomo-1/01.jpeg",
        "/mangas/seinen/monster/tomo-1/02.jpeg",
        "/mangas/seinen/monster/tomo-1/03.jpeg",
        "/mangas/seinen/monster/tomo-1/04.jpeg",
        "/mangas/seinen/monster/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/seinen/monster/tomo-2/01.jpeg",
      paginas: [
        "/mangas/seinen/monster/tomo-2/01.jpeg",
        "/mangas/seinen/monster/tomo-2/02.jpeg",
        "/mangas/seinen/monster/tomo-2/03.jpeg",
        "/mangas/seinen/monster/tomo-2/04.jpeg",
        "/mangas/seinen/monster/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/seinen/monster/tomo-3/01.jpeg",
      paginas: [
        "/mangas/seinen/monster/tomo-3/01.jpeg",
        "/mangas/seinen/monster/tomo-3/02.jpeg",
        "/mangas/seinen/monster/tomo-3/03.jpeg",
        "/mangas/seinen/monster/tomo-3/04.jpeg",
        "/mangas/seinen/monster/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 41,
  titulo: "Vagabound",
  kanji: "モンスター",
  categoria: "🗡️ Seinen 🗡️",
  descripcion:
    "Adaptación de la vida del espadachín Miyamoto Musashi, mezclando filosofía, arte detallado y combates realistas en una narrativa profunda.",
  imagen: "/mangas/seinen/vagabound/vagabound-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/seinen/vagabound/tomo-1/01.jpeg",
      paginas: [
        "/mangas/seinen/vagabound/tomo-1/01.jpeg",
        "/mangas/seinen/vagabound/tomo-1/02.jpeg",
        "/mangas/seinen/vagabound/tomo-1/03.jpeg",
        "/mangas/seinen/vagabound/tomo-1/04.jpeg",
        "/mangas/seinen/vagabound/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/seinen/vagabound/tomo-2/01.jpeg",
      paginas: [
        "/mangas/seinen/vagabound/tomo-2/01.jpeg",
        "/mangas/seinen/vagabound/tomo-2/02.jpeg",
        "/mangas/seinen/vagabound/tomo-2/03.jpeg",
        "/mangas/seinen/vagabound/tomo-2/04.jpeg",
        "/mangas/seinen/vagabound/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/seinen/vagabound/tomo-3/01.jpeg",
      paginas: [
        "/mangas/seinen/vagabound/tomo-3/01.jpeg",
        "/mangas/seinen/vagabound/tomo-3/02.jpeg",
        "/mangas/seinen/vagabound/tomo-3/03.jpeg",
        "/mangas/seinen/vagabound/tomo-3/04.jpeg",
        "/mangas/seinen/vagabound/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 42,
  titulo: "Vinland Saga",
  kanji: "ヴィンランド・サガ",
  categoria: "🗡️ Seinen 🗡️",
  descripcion:
    "Sigue a Thorfinn, un joven guerrero vikingo que busca venganza y luego un nuevo propósito. Aventura histórica madura con temas de violencia, redención y libertad.",
  imagen: "/mangas/seinen/vinland-saga/vinland-saga-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/seinen/vinland-saga/tomo-1/01.jpeg",
      paginas: [
        "/mangas/seinen/vinland-saga/tomo-1/01.jpeg",
        "/mangas/seinen/vinland-saga/tomo-1/02.jpeg",
        "/mangas/seinen/vinland-saga/tomo-1/03.jpeg",
        "/mangas/seinen/vinland-saga/tomo-1/04.jpeg",
        "/mangas/seinen/vinland-saga/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/seinen/vinland-saga/tomo-2/01.jpeg",
      paginas: [
        "/mangas/seinen/vinland-saga/tomo-2/01.jpeg",
        "/mangas/seinen/vinland-saga/tomo-2/02.jpeg",
        "/mangas/seinen/vinland-saga/tomo-2/03.jpeg",
        "/mangas/seinen/vinland-saga/tomo-2/04.jpeg",
        "/mangas/seinen/vinland-saga/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 3",
      imagen: "/mangas/seinen/vinland-saga/tomo-3/01.jpeg",
      paginas: [
        "/mangas/seinen/vinland-saga/tomo-3/01.jpeg",
        "/mangas/seinen/vinland-saga/tomo-3/02.jpeg",
        "/mangas/seinen/vinland-saga/tomo-3/03.jpeg",
        "/mangas/seinen/vinland-saga/tomo-3/04.jpeg",
        "/mangas/seinen/vinland-saga/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 42,
  titulo: "Sailor Moon",
  kanji: "美少女戦士セーラームーン",
  categoria: "✨ Majou-shoujo ✨",
  descripcion:
    "Usagi descubre que es una guerrera mágica destinada a proteger la Tierra de fuerzas oscuras. Combina romance, transformación y heroísmo icónico.",
  imagen: "/mangas/majou-shoujo/sailor-moon/sailor-moon-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/sailor-moon/tomo-1/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/sailor-moon/tomo-1/01.jpeg",
        "/mangas/majou-shoujo/sailor-moon/tomo-1/02.jpeg",
        "/mangas/majou-shoujo/sailor-moon/tomo-1/03.jpeg",
        "/mangas/majou-shoujo/sailor-moon/tomo-1/04.jpeg",
        "/mangas/majou-shoujo/sailor-moon/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/sailor-moon/tomo-2/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/sailor-moon/01.jpeg",
        "/mangas/majou-shoujo/sailor-moon/02.jpeg",
        "/mangas/majou-shoujo/sailor-moon/03.jpeg",
        "/mangas/majou-shoujo/sailor-moon/04.jpeg",
        "/mangas/majou-shoujo/sailor-moon/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/majou-shoujo/sailor-moon/tomo-3/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/sailor-moon/tomo-3/01.jpeg",
        "/mangas/majou-shoujo/sailor-moon/tomo-3/02.jpeg",
        "/mangas/majou-shoujo/sailor-moon/tomo-3/03.jpeg",
        "/mangas/majou-shoujo/sailor-moon/tomo-3/04.jpeg",
        "/mangas/majou-shoujo/sailor-moon/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 43,
  titulo: "Puella Magi Madoka Magica",
  kanji: "魔法少女まどか☆マギカ",
  categoria: "✨ Majou-shoujo ✨",
  descripcion:
    "Madoka recibe la oportunidad de convertirse en chica mágica, pero descubre que este mundo tiene un alto costo emocional. Es una visión más oscura del género.",
  imagen: "/mangas/majou-shoujo/madoka-magica/madoka-magica-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/madoka-magica/tomo-1/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/madoka-magica/tomo-1/01.jpeg",
        "/mangas/majou-shoujo/madoka-magica/tomo-1/02.jpeg",
        "/mangas/majou-shoujo/madoka-magica/tomo-1/03.jpeg",
        "/mangas/majou-shoujo/madoka-magica/tomo-1/04.jpeg",
        "/mangas/majou-shoujo/madoka-magica/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/madoka-magica/tomo-2/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/madoka-magica/01.jpeg",
        "/mangas/majou-shoujo/madoka-magica/02.jpeg",
        "/mangas/majou-shoujo/madoka-magica/03.jpeg",
        "/mangas/majou-shoujo/madoka-magica/04.jpeg",
        "/mangas/majou-shoujo/madoka-magica/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/majou-shoujo/madoka-magica/tomo-3/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/madoka-magica/tomo-3/01.jpeg",
        "/mangas/majou-shoujo/madoka-magica/tomo-3/02.jpeg",
        "/mangas/majou-shoujo/madoka-magica/tomo-3/03.jpeg",
        "/mangas/majou-shoujo/madoka-magica/tomo-3/04.jpeg",
        "/mangas/majou-shoujo/madoka-magica/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 21,
  titulo: "Saber Marionette J",
  kanji: "魔法少女プリティサミー外伝 マリオネットJ)",
  categoria: "🤖 Mecha 🤖",
  descripcion:
    "Sigue a J, una joven marioneta con habilidades especiales que despierta en el mundo humano y se enfrenta a peligros mientras descubre su propósito y origen.",
  imagen: "/mangas/mecha/saber-marionette-j/saber-marionette-j-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/mecha/saber-marionette-j/tomo-1/01.jpeg",
      paginas: [
        "/mangas/mecha/saber-marionette-j/tomo-1/01.jpeg",
        "/mangas/mecha/saber-marionette-j/tomo-1/02.jpeg",
        "/mangas/mecha/saber-marionette-j/tomo-1/03.jpeg",
        "/mangas/mecha/saber-marionette-j/tomo-1/04.jpeg",
        "/mangas/mecha/saber-marionette-j/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/mecha/saber-marionette-j/tomo-2/01.jpeg",
      paginas: [
        "/mangas/mecha/saber-marionette-j/01.jpeg",
        "/mangas/mecha/saber-marionette-j/02.jpeg",
        "/mangas/mecha/saber-marionette-j/03.jpeg",
        "/mangas/mecha/saber-marionette-j/04.jpeg",
        "/mangas/mecha/saber-marionette-j/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/mecha/saber-marionette-j/tomo-3/01.jpeg",
      paginas: [
        "/mangas/mecha/saber-marionette-j/tomo-3/01.jpeg",
        "/mangas/mecha/saber-marionette-j/tomo-3/02.jpeg",
        "/mangas/mecha/saber-marionette-j/tomo-3/03.jpeg",
        "/mangas/mecha/saber-marionette-j/tomo-3/04.jpeg",
        "/mangas/mecha/saber-marionette-j/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 44,
  titulo: "Tokyo Mew Mew",
  kanji: "東京ミュウミュウ",
  categoria: "✨ Majou-shoujo ✨",
  descripcion:
    "Ichigo obtiene poderes de animales en peligro de extinción y, junto con otras chicas, forma un equipo para proteger la Tierra de alienígenas.",
  imagen: "/mangas/majou-shoujo/tokyo-mew-mew/tokyo-mew-mew-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/tokyo-mew-mew/tomo-1/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-1/01.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-1/02.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-1/03.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-1/04.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/tokyo-mew-mew/tomo-2/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/tokyo-mew-mew/01.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/02.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/03.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/04.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/majou-shoujo/tokyo-mew-mew/tomo-3/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-3/01.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-3/02.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-3/03.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-3/04.jpeg",
        "/mangas/majou-shoujo/tokyo-mew-mew/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 45,
  titulo: "Magical Girl Site",
  kanji: "魔法少女サイト",
  categoria: "✨ Majou-shoujo ✨",
  descripcion:
    "Aya recibe un artefacto mágico que la mete en un juego mortal. Es una versión oscura y violenta del género, con crítica social.",
  imagen: "/mangas/majou-shoujo/magical-girl-site/magical-girl-site-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/magical-girl-site/tomo-1/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/magical-girl-site/tomo-1/01.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/tomo-1/02.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/tomo-1/03.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/tomo-1/04.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/magical-girl-site/tomo-2/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/magical-girl-site/01.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/02.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/03.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/04.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/majou-shoujo/magical-girl-site/tomo-3/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/magical-girl-site/tomo-3/01.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/tomo-3/02.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/tomo-3/03.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/tomo-3/04.jpeg",
        "/mangas/majou-shoujo/magical-girl-site/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 46,
  titulo: "Shugo Chara!",
  kanji: "しゅごキャラ!",
  categoria: "✨ Majou-shoujo ✨",
  descripcion:
    "Amu obtiene guardiancitos mágicos que representan lo que quiere ser, ayudándola a descubrir su identidad mientras combate criaturas corruptas.",
  imagen: "/mangas/majou-shoujo/shugo-chara/shugo-chara-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujo/shugo-chara/tomo-1/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/shugo-chara/tomo-1/01.jpeg",
        "/mangas/majou-shoujo/shugo-chara/tomo-1/02.jpeg",
        "/mangas/majou-shoujo/shugo-chara/tomo-1/03.jpeg",
        "/mangas/majou-shoujo/shugo-chara/tomo-1/04.jpeg",
        "/mangas/majou-shoujo/shugo-chara/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/majou-shoujoshugo-chara/tomo-2/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/shugo-chara/01.jpeg",
        "/mangas/majou-shoujo/shugo-chara/02.jpeg",
        "/mangas/majou-shoujo/shugo-chara/03.jpeg",
        "/mangas/majou-shoujo/shugo-chara/04.jpeg",
        "/mangas/majou-shoujo/shugo-chara/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/majou-shoujo/shugo-chara/tomo-3/01.jpeg",
      paginas: [
        "/mangas/majou-shoujo/shugo-chara/tomo-3/01.jpeg",
        "/mangas/majou-shoujo/shugo-chara/tomo-3/02.jpeg",
        "/mangas/majou-shoujo/shugo-chara/tomo-3/03.jpeg",
        "/mangas/majou-shoujo/shugo-chara/tomo-3/04.jpeg",
        "/mangas/majou-shoujo/shugo-chara/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 47,
  titulo: "Fruits Basket",
  kanji: "フルーツバスケット",
  categoria: "💖 Shojo 💖",
  descripcion:
    "Tohru Honda convive con la familia Sōma, cuyos miembros están afectados por una maldición que los transforma en animales del zodíaco. Historia de sanación emocional, amor y aceptación.",
  imagen: "/mangas/shojo/fruits-basket/fruits-basket-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/fruits-basket/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/fruits-basket/tomo-1/01.jpeg",
        "/mangas/shojo/fruits-basket/tomo-1/02.jpeg",
        "/mangas/shojo/fruits-basket/tomo-1/03.jpeg",
        "/mangas/shojo/fruits-basket/tomo-1/04.jpeg",
        "/mangas/shojo/fruits-basket/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/fruits-basket/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shojo/fruits-basket/01.jpeg",
        "/mangas/shojo/fruits-basket/02.jpeg",
        "/mangas/shojo/fruits-basket/03.jpeg",
        "/mangas/shojo/fruits-basket/04.jpeg",
        "/mangas/shojo/fruits-basket/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/shojo/fruits-basket/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shojo/fruits-basket/tomo-3/01.jpeg",
        "/mangas/shojo/fruits-basket/tomo-3/02.jpeg",
        "/mangas/shojo/fruits-basket/tomo-3/03.jpeg",
        "/mangas/shojo/fruits-basket/tomo-3/04.jpeg",
        "/mangas/shojo/fruits-basket/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 48,
  titulo: "Clover",
  kanji: "クローバー",
  categoria: "💖 Shojo 💖",
  descripcion:
    "Un manga futurista y poético donde Sue, una joven con poderes especiales, es escoltada por un soldado llamado Kazuhiko mientras el gobierno la mantiene aislada. Explora soledad, destino y libertad con un estilo minimalista y visualmente único.",
  imagen: "/mangas/shojo/clover/clover-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/clover/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/clover/tomo-1/01.jpeg",
        "/mangas/shojo/clover/tomo-1/02.jpeg",
        "/mangas/shojo/clover/tomo-1/03.jpeg",
        "/mangas/shojo/clover/tomo-1/04.jpeg",
        "/mangas/shojo/clover/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/clover/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shojo/clover/01.jpeg",
        "/mangas/shojo/clover/02.jpeg",
        "/mangas/shojo/clover/03.jpeg",
        "/mangas/shojo/clover/04.jpeg",
        "/mangas/shojo/clover/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/shojo/clover/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shojo/clover/tomo-3/01.jpeg",
        "/mangas/shojo/clover/tomo-3/02.jpeg",
        "/mangas/shojo/clover/tomo-3/03.jpeg",
        "/mangas/shojo/clover/tomo-3/04.jpeg",
        "/mangas/shojo/clover/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 49,
  titulo: "My Dress-Up Darling",
  kanji: "その着せ替え人形は恋をする",
  categoria: "💖 Shojo 💖",
  descripcion:
    "Wakana, un chico tímido que hace muñecas hina, conoce a Marin, una chica vibrante que ama el cosplay. Juntos empiezan a crear trajes y a compartir su mundo, mientras su relación crece de forma dulce y divertida.",
  imagen: "/mangas/shojo/my-dress-up-darling/my-dress-up-darling-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/my-dress-up-darling/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/my-dress-up-darling/tomo-1/01.jpeg",
        "/mangas/shojo/my-dress-up-darling/tomo-1/02.jpeg",
        "/mangas/shojo/my-dress-up-darling/tomo-1/03.jpeg",
        "/mangas/shojo/my-dress-up-darling/tomo-1/04.jpeg",
        "/mangas/shojo/my-dress-up-darling/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/my-dress-up-darling/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shojo/my-dress-up-darling/01.jpeg",
        "/mangas/shojo/my-dress-up-darling/02.jpeg",
        "/mangas/shojo/my-dress-up-darling/03.jpeg",
        "/mangas/shojo/my-dress-up-darling/04.jpeg",
        "/mangas/shojo/my-dress-up-darling/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/shojo/my-dress-up-darling/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shojo/my-dress-up-darling/tomo-3/01.jpeg",
        "/mangas/shojo/my-dress-up-darling/tomo-3/02.jpeg",
        "/mangas/shojo/my-dress-up-darling/tomo-3/03.jpeg",
        "/mangas/shojo/my-dress-up-darling/tomo-3/04.jpeg",
        "/mangas/shojo/my-dress-up-darling/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 50,
  titulo: "Kimi Ni Todoke",
  kanji: "君に届け",
  categoria: "💖 Shojo 💖",
  descripcion:
    "Sawako, tímida y malinterpretada, comienza a abrirse al mundo gracias a su compañero Kazehaya. Un shōjo sobre bondad, autoaceptación y amor dulce.",
  imagen: "/mangas/shojo/kimi-ni-todoke/kimi-ni-todoke-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/kimi-ni-todoke/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/kimi-ni-todoke/tomo-1/01.jpeg",
        "/mangas/shojo/kimi-ni-todoke/tomo-1/02.jpeg",
        "/mangas/shojo/kimi-ni-todoke/tomo-1/03.jpeg",
        "/mangas/shojo/kimi-ni-todoke/tomo-1/04.jpeg",
        "/mangas/shojo/kimi-ni-todoke/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/kimi-ni-todoke/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shojo/kimi-ni-todoke/01.jpeg",
        "/mangas/shojo/kimi-ni-todoke/02.jpeg",
        "/mangas/shojo/kimi-ni-todoke/03.jpeg",
        "/mangas/shojo/kimi-ni-todoke/04.jpeg",
        "/mangas/shojo/kimi-ni-todoke/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/shojo/kimi-ni-todoke/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shojo/kimi-ni-todoke/tomo-3/01.jpeg",
        "/mangas/shojo/kimi-ni-todoke/tomo-3/02.jpeg",
        "/mangas/shojo/kimi-ni-todoke/tomo-3/03.jpeg",
        "/mangas/shojo/kimi-ni-todoke/tomo-3/04.jpeg",
        "/mangas/shojo/kimi-ni-todoke/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 51,
  titulo: "Kamisama Hajimemashita",
  kanji: "神様はじめました",
  categoria: "💖 Shojo 💖",
  descripcion:
    "Nanami se convierte accidentalmente en la deidad de un santuario y conoce al espíritu zorro Tomoe. Combina romance fantástico y crecimiento personal.",
  imagen: "/mangas/shojo/kamisama-hajimemashita/kamisama-hajimemashita-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/kamisama-hajimemashita/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/kamisama-hajimemashita/tomo-1/01.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/tomo-1/02.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/tomo-1/03.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/tomo-1/04.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/shojo/kamisama-hajimemashita/tomo-2/01.jpeg",
      paginas: [
        "/mangas/shojo/kamisama-hajimemashita/01.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/02.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/03.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/04.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/shojo/kamisama-hajimemashita/tomo-3/01.jpeg",
      paginas: [
        "/mangas/shojo/kamisama-hajimemashita/tomo-3/01.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/tomo-3/02.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/tomo-3/03.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/tomo-3/04.jpeg",
        "/mangas/shojo/kamisama-hajimemashita/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 52,
  titulo: "Aoi Hana",
  kanji: "青い花",
  categoria: "🌈 Yuri 🌸",
  descripcion:
    "Fumi y Akira, amigas de la infancia, se reencuentran y navegan emociones, dudas y primeros amores en un ambiente delicado y realista.",
  imagen: "/mangas/yuri/aoi-hana/aoi-hana-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/yuri/aoi-hana/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/yuri/aoi-hana/tomo-1/01.jpeg",
        "/mangas/shojo/yuri/aoi-hana/tomo-1/02.jpeg",
        "/mangas/shojo/yuri/aoi-hana/tomo-1/03.jpeg",
        "/mangas/shojo/yuri/aoi-hana/tomo-1/04.jpeg",
        "/mangas/shojo/yuri/aoi-hana/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/yuri/aoi-hana/tomo-2/01.jpeg",
      paginas: [
        "/mangas/yuri/aoi-hana/01.jpeg",
        "/mangas/yuri/aoi-hana/02.jpeg",
        "/mangas/yuri/aoi-hana/03.jpeg",
        "/mangas/yuri/aoi-hana/04.jpeg",
        "/mangas/yuri/aoi-hana/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/yuri/aoi-hana/tomo-3/01.jpeg",
      paginas: [
        "/mangas/yuri/aoi-hana/tomo-3/01.jpeg",
        "/mangas/yuri/aoi-hana/tomo-3/02.jpeg",
        "/mangas/yuri/aoi-hana/tomo-3/03.jpeg",
        "/mangas/yuri/aoi-hana/tomo-3/04.jpeg",
        "/mangas/yuri/aoi-hana/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 53,
  titulo: "Sasameki Koto",
  kanji: "ささめきこと",
  categoria: "🌈 Yuri 🌸",
  descripcion:
    "Sumika está enamorada de su mejor amiga Ushio, quien solo se fija en chicas “tiernas”. Una historia de sentimientos silenciosos, humor y crecimiento personal.",
  imagen: "/mangas/yuri/sasameki-koto/sasameki-koto-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/yuri/sasameki-koto/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/yuri/sasameki-koto/tomo-1/01.jpeg",
        "/mangas/shojo/yuri/sasameki-koto/tomo-1/02.jpeg",
        "/mangas/shojo/yuri/sasameki-koto/tomo-1/03.jpeg",
        "/mangas/shojo/yuri/sasameki-koto/tomo-1/04.jpeg",
        "/mangas/shojo/yuri/sasameki-koto/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/yuri/sasameki-koto/tomo-2/01.jpeg",
      paginas: [
        "/mangas/yuri/sasameki-koto/01.jpeg",
        "/mangas/yuri/sasameki-koto/02.jpeg",
        "/mangas/yuri/sasameki-koto/03.jpeg",
        "/mangas/yuri/sasameki-koto/04.jpeg",
        "/mangas/yuri/sasameki-koto/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/yuri/sasameki-koto/tomo-3/01.jpeg",
      paginas: [
        "/mangas/yuri/sasameki-koto/tomo-3/01.jpeg",
        "/mangas/yuri/sasameki-koto/tomo-3/02.jpeg",
        "/mangas/yuri/sasameki-koto/tomo-3/03.jpeg",
        "/mangas/yuri/sasameki-koto/tomo-3/04.jpeg",
        "/mangas/yuri/sasameki-koto/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 54,
  titulo: "Adachi to Shimamura",
  kanji: "安達としまむら",
  categoria: "🌈 Yuri 🌸",
  descripcion:
    "Dos chicas que suelen saltarse clases se conocen mejor en sus ratos juntas. Entre silencio, ternura y duda, su amistad se transforma lentamente en amor.",
  imagen: "/mangas/yuri/adachi-to-shimamura/adachi-to-shimamura-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/yuri/adachi-to-shimamura/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/yuri/adachi-to-shimamura/tomo-1/01.jpeg",
        "/mangas/shojo/yuri/adachi-to-shimamura/tomo-1/02.jpeg",
        "/mangas/shojo/yuri/adachi-to-shimamura/tomo-1/03.jpeg",
        "/mangas/shojo/yuri/adachi-to-shimamura/tomo-1/04.jpeg",
        "/mangas/shojo/yuri/adachi-to-shimamura/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/yuri/adachi-to-shimamura/tomo-2/01.jpeg",
      paginas: [
        "/mangas/yuri/adachi-to-shimamura/01.jpeg",
        "/mangas/yuri/adachi-to-shimamura/02.jpeg",
        "/mangas/yuri/adachi-to-shimamura/03.jpeg",
        "/mangas/yuri/adachi-to-shimamura/04.jpeg",
        "/mangas/yuri/adachi-to-shimamura/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/yuri/adachi-to-shimamura/tomo-3/01.jpeg",
      paginas: [
        "/mangas/yuri/adachi-to-shimamura/tomo-3/01.jpeg",
        "/mangas/yuri/adachi-to-shimamura/tomo-3/02.jpeg",
        "/mangas/yuri/adachi-to-shimamura/tomo-3/03.jpeg",
        "/mangas/yuri/adachi-to-shimamura/tomo-3/04.jpeg",
        "/mangas/yuri/adachi-to-shimamura/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 55,
  titulo: "Whisper Me a Love Song",
  kanji: "ささやくように恋を唄う",
  categoria: "🌈 Yuri 🌸",
  descripcion:
    "Sigue a Himari, una estudiante alegre que se enamora a primera vista de Yori, una chica mayor que canta en una banda. Mientras ambas intentan comprender sus sentimientos, la historia mezcla música, romance y descubrimiento emocional con un tono fresco y actual.",
  imagen: "/mangas/yuri/whisper-me-a-love-song/whisper-me-a-love-song-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/yuri/whisper-me-a-love-song/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/yuri/whisper-me-a-love-song/tomo-1/01.jpeg",
        "/mangas/shojo/yuri/whisper-me-a-love-song/tomo-1/02.jpeg",
        "/mangas/shojo/yuri/whisper-me-a-love-song/tomo-1/03.jpeg",
        "/mangas/shojo/yuri/whisper-me-a-love-song/tomo-1/04.jpeg",
        "/mangas/shojo/yuri/whisper-me-a-love-song/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/yuri/whisper-me-a-love-song/tomo-2/01.jpeg",
      paginas: [
        "/mangas/yuri/whisper-me-a-love-song/01.jpeg",
        "/mangas/yuri/whisper-me-a-love-song/02.jpeg",
        "/mangas/yuri/whisper-me-a-love-song/03.jpeg",
        "/mangas/yuri/whisper-me-a-love-song/04.jpeg",
        "/mangas/yuri/whisper-me-a-love-song/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/yuri/whisper-me-a-love-song/tomo-3/01.jpeg",
      paginas: [
        "/mangas/yuri/whisper-me-a-love-song/tomo-3/01.jpeg",
        "/mangas/yuri/whisper-me-a-love-song/tomo-3/02.jpeg",
        "/mangas/yuri/whisper-me-a-love-song/tomo-3/03.jpeg",
        "/mangas/yuri/whisper-me-a-love-song/tomo-3/04.jpeg",
        "/mangas/yuri/whisper-me-a-love-song/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 56,
  titulo: "Nana",
  kanji: "ナナ",
  categoria: "💄 Josei 💄",
  descripcion:
    "Dos chicas llamadas Nana comparten piso en Tokio mientras exploran el amor, la música, la madurez y los vínculos que cambian sus vidas para siempre.",
  imagen: "/mangas/josei/nana/nana-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/nana/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/josei/nana/tomo-1/01.jpeg",
        "/mangas/shojo/josei/nana/tomo-1/02.jpeg",
        "/mangas/shojo/josei/nana/tomo-1/03.jpeg",
        "/mangas/shojo/josei/nana/tomo-1/04.jpeg",
        "/mangas/shojo/josei/nana/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 2",
      imagen: "/mangas/josei/nana/tomo-2/01.jpeg",
      paginas: [
        "/mangas/josei/nana/tomo-2/01.jpeg",
        "/mangas/josei/nana/tomo-2/02.jpeg",
        "/mangas/josei/nana/tomo-2/03.jpeg",
        "/mangas/josei/nana/tomo-2/04.jpeg",
        "/mangas/josei/nana/tomo-2/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/josei/nana/tomo-3/01.jpeg",
      paginas: [
        "/mangas/josei/nana/tomo-3/01.jpeg",
        "/mangas/josei/nana/tomo-3/02.jpeg",
        "/mangas/josei/nana/tomo-3/03.jpeg",
        "/mangas/josei/nana/tomo-3/04.jpeg",
        "/mangas/josei/nana/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 58,
  titulo: "Hotaru no Yomeiri",
  kanji: "ホタルの嫁入り",
  categoria: "💄 Josei 💄",
  descripcion:
    "En la era Meiji, una joven noble enferma propone matrimonio a un peligroso asesino para salvar su vida, dando inicio a una relación tan oscura como inesperada.",
  imagen: "/mangas/josei/hotaru-no-yomeiri/hotaru-no-yomeiri-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/hotaru-no-yomeiri/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/josei/hotaru-no-yomeiri/tomo-1/01.jpeg",
        "/mangas/shojo/josei/hotaru-no-yomeiri/tomo-1/02.jpeg",
        "/mangas/shojo/josei/hotaru-no-yomeiri/tomo-1/03.jpeg",
        "/mangas/shojo/josei/hotaru-no-yomeiri/tomo-1/04.jpeg",
        "/mangas/shojo/josei/hotaru-no-yomeiri/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/hotaru-no-yomeiri/tomo-2/01.jpeg",
      paginas: [
        "/mangas/josei/hotaru-no-yomeiri/01.jpeg",
        "/mangas/josei/hotaru-no-yomeiri/02.jpeg",
        "/mangas/josei/hotaru-no-yomeiri/03.jpeg",
        "/mangas/josei/hotaru-no-yomeiri/04.jpeg",
        "/mangas/josei/hotaru-no-yomeiri/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/josei/hotaru-no-yomeiri/tomo-3/01.jpeg",
      paginas: [
        "/mangas/josei/hotaru-no-yomeiri/tomo-3/01.jpeg",
        "/mangas/josei/hotaru-no-yomeiri/tomo-3/02.jpeg",
        "/mangas/josei/hotaru-no-yomeiri/tomo-3/03.jpeg",
        "/mangas/josei/hotaru-no-yomeiri/tomo-3/04.jpeg",
        "/mangas/josei/hotaru-no-yomeiri/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 59,
  titulo: "Hoshifuru Ōkoku no Nina",
  kanji: "星降る王国のニナ",
  categoria: "💄 Josei 💄",
  descripcion:
    "Una historia de fantasía y romance con una protagonista fuerte en un reino estelar moderno.",
  imagen: "/mangas/josei/hoshifuru-okoku-no-nina/hoshifuru-okoku-no-nina-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/hoshifuru-okoku-no-nina/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/josei/hoshifuru-okoku-no-nina/tomo-1/01.jpeg",
        "/mangas/shojo/josei/hoshifuru-okoku-no-nina/tomo-1/02.jpeg",
        "/mangas/shojo/josei/hoshifuru-okoku-no-nina/tomo-1/03.jpeg",
        "/mangas/shojo/josei/hoshifuru-okoku-no-nina/tomo-1/04.jpeg",
        "/mangas/shojo/josei/hoshifuru-okoku-no-nina/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/hoshifuru-okoku-no-nina/tomo-2/01.jpeg",
      paginas: [
        "/mangas/josei/hoshifuru-okoku-no-nina/01.jpeg",
        "/mangas/josei/hoshifuru-okoku-no-nina/02.jpeg",
        "/mangas/josei/hoshifuru-okoku-no-nina/03.jpeg",
        "/mangas/josei/hoshifuru-okoku-no-nina/04.jpeg",
        "/mangas/josei/hoshifuru-okoku-no-nina/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/josei/hoshifuru-okoku-no-nina/tomo-3/01.jpeg",
      paginas: [
        "/mangas/josei/hoshifuru-okoku-no-nina/tomo-3/01.jpeg",
        "/mangas/josei/hoshifuru-okoku-no-nina/tomo-3/02.jpeg",
        "/mangas/josei/hoshifuru-okoku-no-nina/tomo-3/03.jpeg",
        "/mangas/josei/hoshifuru-okoku-no-nina/tomo-3/04.jpeg",
        "/mangas/josei/hoshifuru-okoku-no-nina/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 60,
  titulo: "Ikoku Nikki",
  kanji: "違国日記",
  categoria: "💄 Josei 💄",
  descripcion:
    "Una escritora solitaria acoge a su sobrina adolescente tras una tragedia, y juntas aprenden a convivir mientras sanan heridas emocionales y descubren nuevas formas de entender la vida.",
  imagen: "/mangas/josei/ikoku-nikki/ikoku-nikki-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/ikoku-nikki/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/josei/ikoku-nikki/tomo-1/01.jpeg",
        "/mangas/shojo/josei/ikoku-nikki/tomo-1/02.jpeg",
        "/mangas/shojo/josei/ikoku-nikki/tomo-1/03.jpeg",
        "/mangas/shojo/josei/ikoku-nikki/tomo-1/04.jpeg",
        "/mangas/shojo/josei/ikoku-nikki/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/ikoku-nikki/tomo-2/01.jpeg",
      paginas: [
        "/mangas/josei/ikoku-nikki/01.jpeg",
        "/mangas/josei/ikoku-nikki/02.jpeg",
        "/mangas/josei/ikoku-nikki/03.jpeg",
        "/mangas/josei/ikoku-nikki/04.jpeg",
        "/mangas/josei/ikoku-nikki/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/josei/ikoku-nikki/tomo-3/01.jpeg",
      paginas: [
        "/mangas/josei/ikoku-nikki/tomo-3/01.jpeg",
        "/mangas/josei/ikoku-nikki/tomo-3/02.jpeg",
        "/mangas/josei/ikoku-nikki/tomo-3/03.jpeg",
        "/mangas/josei/ikoku-nikki/tomo-3/04.jpeg",
        "/mangas/josei/ikoku-nikki/tomo-3/05.jpeg"
      ]
    }
  ]
},

{
  id: 61,
  titulo: "Tokyo Tarareba Girls",
  kanji: "東京タラレバ娘",
  categoria: "💄 Josei 💄",
  descripcion:
    "Retrata la vida romántica y laboral de mujeres treintañeras; humor, reflexión y mucha realidad.",
  imagen: "/mangas/josei/tokyo-tarareba-girls/tokyo-tarareba-girls-portada.jpeg",
  tomos: [
    {
      id: 1,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/tokyo-tarareba-girls/tomo-1/01.jpeg",
      paginas: [
        "/mangas/shojo/josei/tokyo-tarareba-girls/tomo-1/01.jpeg",
        "/mangas/shojo/josei/tokyo-tarareba-girls/tomo-1/02.jpeg",
        "/mangas/shojo/josei/tokyo-tarareba-girls/tomo-1/03.jpeg",
        "/mangas/shojo/josei/tokyo-tarareba-girls/tomo-1/04.jpeg",
        "/mangas/shojo/josei/tokyo-tarareba-girls/tomo-1/05.jpeg"
      ]
    },
    {
      id: 2,
      nombre: "Tomo 1",
      imagen: "/mangas/josei/tokyo-tarareba-girls/tomo-2/01.jpeg",
      paginas: [
        "/mangas/josei/tokyo-tarareba-girls/01.jpeg",
        "/mangas/josei/tokyo-tarareba-girls/02.jpeg",
        "/mangas/josei/tokyo-tarareba-girls/03.jpeg",
        "/mangas/josei/tokyo-tarareba-girls/04.jpeg",
        "/mangas/josei/tokyo-tarareba-girls/05.jpeg"
      ]
    },
    {
      id: 3,
      nombre: "Tomo 2",
      imagen: "/mangas/josei/tokyo-tarareba-girls/tomo-3/01.jpeg",
      paginas: [
        "/mangas/josei/tokyo-tarareba-girls/tomo-3/01.jpeg",
        "/mangas/josei/tokyo-tarareba-girls/tomo-3/02.jpeg",
        "/mangas/josei/tokyo-tarareba-girls/tomo-3/03.jpeg",
        "/mangas/josei/tokyo-tarareba-girls/tomo-3/04.jpeg",
        "/mangas/josei/tokyo-tarareba-girls/tomo-3/05.jpeg"
      ]
    }
  ]
},

];

// Helper para próximo ID
export const getNextMangaId = () => {
  if (mangasDB.length === 0) return 1;
  return Math.max(...mangasDB.map((m) => m.id)) + 1;
};

export { mangasDB };
