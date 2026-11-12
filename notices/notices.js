/*
  LA REDONDA NOTICE BOARD
  =======================
  Flyers show as small tiles. Tapping one expands it to full size with its details.

  EASIEST WAY: open tools/content-maker.html on your computer. It writes the code below for you.

  To post a flyer:
    1. Put the flyer image in this "notices" folder (JPG or PNG, letter/portrait shape works best).
    2. Copy one { ... } block below, paste it at the TOP of the list, and edit it.
    3. Upload the image(s) and this file to the website.

  Fields:
    title / title_es   Headline in English / Spanish (Spanish is optional)
    text  / text_es    One or two short sentences shown when the flyer is expanded (optional)
    image              The full-size flyer, e.g. "notices/my-flyer.jpg"
    thumb              Optional small copy of the flyer (about 440px tall) so the page loads faster.
                       If you leave it out, the full image is used for the tile too.
    badge / badge_es   Optional short label on the tile, e.g. "Starts Sat, Dec 5" (shown instead of the end date)
    until              Last day to show it, "YYYY-MM-DD". After that day it hides itself.
                       Leave as "" to keep it up until you delete it.
    link / link_label / link_label_es   Optional button (a web page, "#training", "tel:+1...")

  The board shows notices in the order listed here, so put the newest one first.
*/
window.NOTICES = [
  /* Soccer clinic (also shown in the Private Training section) */
  {
    title: "Soccer Clinic with Coach Sebastien",
    title_es: "Clínica de fútbol con el Coach Sebastien",
    text: "Get ready for the season: individual and team skills, understanding the game, passing, shooting and teamwork. First come, first served, up to 20 players, no registration. $30 for the day, paid on site with cash or Zelle. Free for La Redonda members: join free on this page.",
    text_es: "Prepárate para la temporada: destrezas individuales y de equipo, entender el juego, pases, tiros y trabajo en equipo. Por orden de llegada, máximo 20 jugadores, sin inscripción. $30 por el día, se paga en la cancha en efectivo o Zelle. Gratis para miembros de La Redonda: únete gratis en esta página.",
    image: "notices/soccer-clinic-coach-sebastien.jpg",
    thumb: "notices/soccer-clinic-coach-sebastien-thumb.jpg",
    badge: "Sat, Nov 21 & 28 · 10–11 AM",
    badge_es: "Sáb. 21 y 28 de nov. · 10–11 AM",
    until: "2026-11-28",
    link: "sms:+17864893702",
    link_label: "Text Coach Sebastien",
    link_label_es: "Envía un texto al Coach Sebastien"
  },
  {
    title: "i9 Sports Winter Season: New Indoor Schedule at La Redonda",
    title_es: "Invierno con i9 Sports: nuevo horario bajo techo en La Redonda",
    text: "Saturdays at La Redonda: Multi-Sport 9–10 AM, Tot Soccer 10–11 AM, Pee-Wee Soccer 11 AM–12 PM, Pee-Wee Flag Football 12–1 PM. Plus a returning-player discount and the new Tot Soccer pathway. Season starts Saturday, December 5, 2026.",
    text_es: "Sábados en La Redonda: Multideporte 9–10 AM, Tot Soccer 10–11 AM, Pee-Wee Soccer 11 AM–12 PM, Pee-Wee Flag Football 12–1 PM. Además, descuento para jugadores que regresan y el nuevo programa Tot Soccer. La temporada empieza el sábado 5 de diciembre de 2026.",
    image: "notices/i9-winter-season-parent-notice.jpg",
    thumb: "notices/i9-winter-season-parent-notice-thumb.jpg",
    badge: "Starts Sat, Dec 5",
    badge_es: "Empieza sáb. 5 de dic.",
    until: "2027-01-30",
    link: "https://www.i9sports.com/venues/33180-la-redonda-indoor-turf-field-aventura-youth-sports-programs/12086",
    link_label: "See all programs",
    link_label_es: "Ver todos los programas"
  },
  {
    title: "Multi-Sport, Ages 3–6 · Saturdays 9–10 AM",
    title_es: "Multideporte, edades 3–6 · Sábados 9–10 AM",
    text: "Try soccer, flag football and baseball while building movement and coordination. 6 Saturdays on indoor, air-conditioned turf: Dec 5 and 12, then Jan 9, 16, 23 and 30 (no sessions Dec 19, Dec 26 or Jan 2). T-shirt, medal and trophy included.",
    text_es: "Prueba fútbol, flag football y béisbol mientras desarrollas movimiento y coordinación. 6 sábados en césped bajo techo con aire acondicionado: 5 y 12 de diciembre, y 9, 16, 23 y 30 de enero (no hay sesiones el 19 y 26 de diciembre ni el 2 de enero). Incluye camiseta, medalla y trofeo.",
    image: "notices/i9-multi-sport-winter-2027.jpg",
    thumb: "notices/i9-multi-sport-winter-2027-thumb.jpg",
    badge: "Starts Sat, Dec 5",
    badge_es: "Empieza sáb. 5 de dic.",
    until: "2027-01-30",
    link: "https://www.i9sports.com/venues/33180-la-redonda-indoor-turf-field-aventura-youth-sports-programs/multi-sport/12086",
    link_label: "See program details",
    link_label_es: "Ver detalles del programa"
  },
  {
    title: "Tot Soccer, Age 3 · Saturdays 10–11 AM",
    title_es: "Tot Soccer, edad 3 · Sábados 10–11 AM",
    text: "A first soccer experience for three-year-olds: first kicks, fun and confidence. 6 Saturdays on indoor, air-conditioned turf: Dec 5 and 12, then Jan 9, 16, 23 and 30 (no sessions Dec 19, Dec 26 or Jan 2). T-shirt, medal and trophy included.",
    text_es: "La primera experiencia de fútbol para niños de tres años: primeras patadas, diversión y confianza. 6 sábados en césped bajo techo con aire acondicionado: 5 y 12 de diciembre, y 9, 16, 23 y 30 de enero (no hay sesiones el 19 y 26 de diciembre ni el 2 de enero). Incluye camiseta, medalla y trofeo.",
    image: "notices/i9-tot-soccer-winter-2027.jpg",
    thumb: "notices/i9-tot-soccer-winter-2027-thumb.jpg",
    badge: "Starts Sat, Dec 5",
    badge_es: "Empieza sáb. 5 de dic.",
    until: "2027-01-30",
    link: "https://www.i9sports.com/venues/33180-la-redonda-indoor-turf-field-aventura-youth-sports-programs/soccer/12086",
    link_label: "See program details",
    link_label_es: "Ver detalles del programa"
  },
  {
    title: "Pee-Wee Soccer, Ages 4–6 · Saturdays 11 AM–12 PM",
    title_es: "Pee-Wee Soccer, edades 4–6 · Sábados 11 AM–12 PM",
    text: "Learn soccer fundamentals and teamwork through play. 6 Saturdays on indoor, air-conditioned turf: Dec 5 and 12, then Jan 9, 16, 23 and 30 (no sessions Dec 19, Dec 26 or Jan 2). Jersey, medal and trophy included.",
    text_es: "Aprende los fundamentos del fútbol y el trabajo en equipo jugando. 6 sábados en césped bajo techo con aire acondicionado: 5 y 12 de diciembre, y 9, 16, 23 y 30 de enero (no hay sesiones el 19 y 26 de diciembre ni el 2 de enero). Incluye uniforme, medalla y trofeo.",
    image: "notices/i9-peewee-soccer-winter-2027.jpg",
    thumb: "notices/i9-peewee-soccer-winter-2027-thumb.jpg",
    badge: "Starts Sat, Dec 5",
    badge_es: "Empieza sáb. 5 de dic.",
    until: "2027-01-30",
    link: "https://www.i9sports.com/venues/33180-la-redonda-indoor-turf-field-aventura-youth-sports-programs/soccer/12086",
    link_label: "See program details",
    link_label_es: "Ver detalles del programa"
  },
  {
    title: "Pee-Wee Flag Football, Ages 4–6 · Saturdays 12–1 PM",
    title_es: "Pee-Wee Flag Football, edades 4–6 · Sábados 12–1 PM",
    text: "Learn throwing, catching and teamwork through play. 6 Saturdays on indoor, air-conditioned turf: Dec 5 and 12, then Jan 9, 16, 23 and 30 (no sessions Dec 19, Dec 26 or Jan 2). Jersey, medal and trophy included.",
    text_es: "Aprende a lanzar, atrapar y trabajar en equipo jugando. 6 sábados en césped bajo techo con aire acondicionado: 5 y 12 de diciembre, y 9, 16, 23 y 30 de enero (no hay sesiones el 19 y 26 de diciembre ni el 2 de enero). Incluye uniforme, medalla y trofeo.",
    image: "notices/i9-peewee-flag-football-winter-2027.jpg",
    thumb: "notices/i9-peewee-flag-football-winter-2027-thumb.jpg",
    badge: "Starts Sat, Dec 5",
    badge_es: "Empieza sáb. 5 de dic.",
    until: "2027-01-30",
    link: "https://www.i9sports.com/venues/33180-la-redonda-indoor-turf-field-aventura-youth-sports-programs/flag-football/12086",
    link_label: "See program details",
    link_label_es: "Ver detalles del programa"
  }

];

/*
  PRIVATE TRAINING SECTION FLYERS: shown as cards in the Private Training section.
  Same fields as a notice. Each hides itself after its "until" date ("" keeps it up).
*/
window.TRAINING = [
  {
    title: "Soccer Clinic with Coach Sebastien",
    title_es: "Clínica de fútbol con el Coach Sebastien",
    text: "Get ready for the season: individual and team skills, understanding the game, passing, shooting and teamwork. First come, first served, up to 20 players, no registration. $30 for the day, paid on site with cash or Zelle. Free for La Redonda members: join free on this page.",
    text_es: "Prepárate para la temporada: destrezas individuales y de equipo, entender el juego, pases, tiros y trabajo en equipo. Por orden de llegada, máximo 20 jugadores, sin inscripción. $30 por el día, se paga en la cancha en efectivo o Zelle. Gratis para miembros de La Redonda: únete gratis en esta página.",
    image: "notices/soccer-clinic-coach-sebastien.jpg",
    thumb: "notices/soccer-clinic-coach-sebastien-thumb.jpg",
    badge: "Sat, Nov 21 & 28 · 10–11 AM",
    badge_es: "Sáb. 21 y 28 de nov. · 10–11 AM",
    until: "2026-11-28",
    link: "sms:+17864893702",
    link_label: "Text Coach Sebastien",
    link_label_es: "Envía un texto al Coach Sebastien"
  },
  {
    title: "Private Soccer Instruction with Coach Sebastien",
    title_es: "Clases privadas de fútbol con el Coach Sebastien",
    text: "Individual, small-group and futsal sessions for ages 3 and up. Call or text (786) 489-3702.",
    text_es: "Sesiones individuales, en grupos pequeños y de futsal desde los 3 años. Llama o envía un texto al (786) 489-3702.",
    image: "notices/private-training-coach-sebastien.jpg",
    thumb: "notices/private-training-coach-sebastien-thumb.jpg",
    until: "",
    link: "tel:+17864893702",
    link_label: "Call Coach Sebastien",
    link_label_es: "Llama al Coach Sebastien"
  }
];
