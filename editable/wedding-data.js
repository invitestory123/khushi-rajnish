/**
 * wedding-data.js — Customer-facing editable data layer for rajwada-royale
 * Edit this file to update couple names, parents, dates, love story, events, venue, gallery, contacts, and media.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Rajnish",
    bride: "Khushi",
    monogram: "K & R",
    hashtag: "#KhushiWedsRajnish",
  },

  mainEvent: {
    title: "Khushi & Rajnish — Wedding Ceremony",
    startsAt: "2026-12-09T10:00:00+05:30",
    durationMinutes: 420,
    dateLabel: "Wednesday, 9 December 2026",
    timeLabel: "10:00 AM onwards",
  },

  families: {
    brideSide: {
      parents: "Smt. Sushila Devi & Sh. Risal Singh Numberdar",
      line: "feel immense pleasure in requesting your presence on the auspicious occasion of the Wedding Ceremony of their loving granddaughter (D/o Smt. Renu Rani & Sh. Ravinder Singh)",
    },
    groomSide: {
      parents: "Smt. & Sh. Amar Singh Rana",
      line: "of Bhukhri (Mohali) — parents of their beloved son",
    },
  },

  invitationNote: "At their residence: Village Model Town Karhera (Yamunanagar). \"Nannhe Nannhe Pav Mere, Kaise Aaye Bulaane Ko, Meri Masi Ji Ki Shadi Main, Bhul Na Jana Aane Ko\" — Shivansh",

  story: [],

  events: [
    {
      key: "sangeet",
      name: "Ladies Sangeet",
      startsAt: "2026-12-08T19:00:00+05:30",
      durationMinutes: 180,
      venue: "Maharana Partap Palace",
      address: "Village Palewala (Yamunanagar)",
      dressCode: "Festive traditional",
      dressCodeColor: "#C9A84C",
      note: "Tuesday, 8th December 2026 · 7:00 PM onwards.",
    },
    {
      key: "barat",
      name: "Reception of Barat",
      startsAt: "2026-12-09T10:00:00+05:30",
      durationMinutes: 120,
      venue: "Maharana Partap Palace",
      address: "Village Palewala (Yamunanagar)",
      dressCode: "Traditional formals",
      dressCodeColor: "#C9A84C",
      note: "Wednesday, 9th December 2026 · 10:00 AM.",
    },
    {
      key: "lunch",
      name: "Lunch",
      startsAt: "2026-12-09T12:00:00+05:30",
      durationMinutes: 180,
      venue: "Maharana Partap Palace",
      address: "Village Palewala (Yamunanagar)",
      dressCode: "Traditional formals",
      dressCodeColor: "#C9A84C",
      note: "Wednesday, 9th December 2026 · 12:00 Noon.",
    },
    {
      key: "doli",
      name: "Doli",
      startsAt: "2026-12-09T17:00:00+05:30",
      durationMinutes: 60,
      venue: "Maharana Partap Palace",
      address: "Village Palewala (Yamunanagar)",
      dressCode: "Traditional formals",
      dressCodeColor: "#C9A84C",
      note: "Wednesday, 9th December 2026 · 5:00 PM.",
    },
  ],

  venue: {
    name: "Maharana Partap Palace",
    address: "Village Palewala, Yamunanagar, Haryana",
    lat: 30.0139215,
    lng: 77.2067595,
    directionsNote: "Residence: Village Model Town Karhera (Yamunanagar). Venue: Maharana Partap Palace, Village Palewala (Ynr.).",
  },

  gallery: [
    { src: "./editable/assets/gallery-1.jpg", alt: "Khushi in embroidered maroon lehenga" },
    { src: "./editable/assets/gallery-2.jpg", alt: "Rajnish and Khushi holding hands" },
    { src: "./editable/assets/gallery-3.jpg", alt: "Rajnish and Khushi during ring ceremony" },
    { src: "./editable/assets/gallery-4.jpg", alt: "Khushi showing her bridal mehndi" },
  ],

  closing: {
    blessing: "R.S.V.P.: Sh. Yash Pal Rana, Sh. Thath Singh Rana, Sh. Raj Singh Rana, Sh. Mahinder Singh Rana, Sh. Kesar Singh Rana, Nitish Rana, Dinesh Rana, Vijay Pal Rana, Vijender Rana & Satbir Rana. W.B.C.F.: All Relatives & Friends.",
    signOff: "A Cordial Invitation From: Risal Singh Numberdar & Ravinder Singh (Tony Rana)",
  },

  contacts: [
    { name: "Risal Singh Numberdar", phone: "+919991548076" },
    { name: "Ravinder Singh (Tony Rana)", phone: "+917027306383" },
  ],

  media: {
    doorPanel: "./editable/assets/door-panel.png",
    couple: "./editable/assets/couple.png",
    floralCorner: "./editable/assets/floral-corner.png",
    garland: "./editable/assets/garland.png",
    lantern: "./editable/assets/lantern.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    ambientAudio: "./editable/assets/ambient-shehnai.mp3",
  },
};
