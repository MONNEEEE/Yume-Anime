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
    cover: "ลิงก์รูปปกเดิมของมึง",
    synopsis: "เรื่องย่อเดิมของมึง",
    studio: "ชื่อสตูดิโอเดิม",

    // 👇 เพิ่ม videos ตรงนี้ ก่อนปีกกาปิดของ Frieren
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
  synopsis: "ใส่เรื่องย่อของอนิเมะเรื่องนี้ตรงนี้",
  studio: "ใส่ชื่อสตูดิโอเมื่อมีข้อมูลที่ยืนยันแล้ว",

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
  // อนิเมะเรื่องอื่นของมึงต่อจากตรงนี้
];

// ทำให้หน้า HTML อื่นเรียกใช้ฐานข้อมูลเดียวกันได้
href="detail.html?id=frieren"
window.animeData = animeData;
