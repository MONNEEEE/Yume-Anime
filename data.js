
const animeData = [
  {
    id: "frieren",
    title: "คำอธิษฐานในวันที่จากลา Frieren",
    originalTitle: "葬送のフリーレン",
    year: 2023,
    status: "จบแล้ว",
    episodes: 28,
    genres: ["Fantasy", "Adventure", "Drama"],
    dubbedThai: true,
    subbedThai: true,
    popular: true,
    latest: false,
    airing: false,
    cover: "",
    synopsis:
      "เรื่องราวของฟรีเรน เอลฟ์นักเวทที่ออกเดินทางเพื่อทำความเข้าใจความหมายของชีวิตและความสัมพันธ์ หลังการเดินทางของผู้กล้าสิ้นสุดลง",
    studio: "Madhouse",
    videos: {
      1: {
        dub: { url: "", type: "mp4" },
        sub: { url: "", type: "mp4" }
      },
      2: {
        dub: { url: "", type: "mp4" },
        sub: { url: "", type: "mp4" }
      }
    }
  },

  {
    id: "dandadan",
    title: "ดันดาดัน Dandadan",
    originalTitle: "ダンダダン",
    year: 2024,
    status: "จบแล้ว",
    episodes: 12,
    genres: ["Action", "Comedy", "Fantasy"],
    dubbedThai: true,
    subbedThai: true,
    popular: true,
    latest: false,
    airing: false,
    cover: "",
    synopsis:
      "เรื่องราวของโมโมะและโอคารุนที่เข้าไปพัวพันกับเหตุการณ์เหนือธรรมชาติ ทั้งเรื่องวิญญาณและมนุษย์ต่างดาว",
    studio: "Science SARU",
    videos: {
      1: {
        dub: { url: "", type: "mp4" },
        sub: { url: "", type: "mp4" }
      },
      2: {
        dub: { url: "", type: "mp4" },
        sub: { url: "", type: "mp4" }
      }
    }
  }
];

// ทำให้หน้า HTML สามารถเข้าถึงข้อมูลอนิเมะได้
window.animeData = animeData;