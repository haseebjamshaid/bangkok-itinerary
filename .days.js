const fs=require("fs");let s=fs.readFileSync("bangkok-field-notes.html","utf8");
const rep=(a,b)=>{if(!s.includes(a))throw new Error("MISSING: "+a.slice(0,70));s=s.replace(a,b)};

/* new coordinates */
rep(`  erawanShrine:[13.7442,100.5404],`,
    `  mahakan:[13.7545,100.5043], thaTien:[13.7434,100.4917], watPho:[13.7465,100.4927],
  hongSiengKong:[13.7340,100.5122], ratchawong:[13.7375,100.5090], rooftop:[13.7528,100.5372],
  erawanShrine:[13.7442,100.5404],`);

/* ============ DAY 1 : sunset on your own roof ============ */
rep(`  best:'Shaking off the flight and learning your <b>15-minute radius</b>. Everything tonight is walkable or one BTS stop away, and it ends with a rooftop drink twenty minutes’ stroll from your bed.',`,
    `  best:'Shaking off the flight and learning your <b>15-minute radius</b>. Everything tonight is walkable or one BTS stop away, sunset is on your own roof, and it ends with a drink twenty minutes’ stroll from your bed.',`);
rep(`  order:'Suvarnabhumi → Airport Link → <b>Hotel</b> → Erawan Shrine → Chit Lom BTS → skywalk → Siam BTS → Siam Square (dinner) → Speakeasy rooftop → <b>Hotel</b>',`,
    `  order:'Suvarnabhumi → Airport Link → <b>Base</b> → sunset on the roof → Erawan Shrine → Chit Lom BTS → skywalk → Siam BTS → Siam Square (dinner) → Speakeasy rooftop → <b>Base</b>',`);
rep(`   {base:true,ic:'i-plane',n:'Suvarnabhumi Airport',short:'Suvarnabhumi · 28 km',t:'14:10',tl:'Land',ll:LL.airport,off:'E',`,
`   {sun:'rise',t:'06:14',n:'Somewhere over the Bay of Bengal',
    p:'Today’s sunrise happens without you — you are still in the air. The first one you can actually stand under is tomorrow, and it is the best of the week, so set the alarm tonight.',
    strip:[['Dawn','05:53'],['Sunrise','06:14'],['Tomorrow','05:35 out']]},
   {base:true,ic:'i-plane',n:'Suvarnabhumi Airport',short:'Suvarnabhumi · 28 km',t:'14:10',tl:'Land',ll:LL.airport,off:'E',`);
rep(`    p:'Drop bags, shower, change into sandals. Out the door by 17:30 — the shrine is prettier at dusk.',`,
    `    p:'Drop bags, shower, change into sandals. Then go straight up — you have about ninety minutes before the sun goes.',`);
rep(`   {ref:29,ic:'i-temple',n:'Erawan Shrine',t:'17:50',stay:'25 min',cost:'Free',hours:'06:00–22:00 · dancers on request',ll:LL.erawanShrine,lbl:'l',`,
`   {sun:'set',t:'17:49',n:'The rooftop bar, eight floors up',ll:LL.rooftop,
    p:'Zero effort on a travel day: the lift. Pratunam has no tall neighbours, so the sun drops cleanly behind the Victory Monument side of the city with the Baiyoke tower lit up to your right. Order something cold and do not attempt anything else until it is dark.',
    strip:[['Sunset','17:49'],['Be up by','17:25'],['Dark','18:10']]},
   {ref:29,ic:'i-temple',n:'Erawan Shrine',t:'18:30',stay:'25 min',cost:'Free',hours:'06:00–22:00 · dancers on request',ll:LL.erawanShrine,lbl:'l',`);
rep(`   {ref:'30 · 28',ic:'i-walk',n:'Chit Lom BTS & the skywalk to Siam',short:'Chit Lom',t:'18:15',`,
    `   {ref:'30 · 28',ic:'i-walk',n:'Chit Lom BTS & the skywalk to Siam',short:'Chit Lom',t:'19:00',`);
rep(`   {ref:27,ic:'i-food',n:'Siam Square',t:'18:35',stay:'1 h 40',`,`   {ref:27,ic:'i-food',n:'Siam Square',t:'19:20',stay:'1 h 30',`);
rep(`short:'Speakeasy',t:'20:30',stay:'1 h 15',`,`short:'Speakeasy',t:'21:05',stay:'1 h 10',`);
rep(`   {base:true,ic:'i-home',n:'Back to base',short:'Base',t:'22:00',tl:'Home',ll:LL.hotel,lbl:false,
    p:'Sleep. Tomorrow is the early one.',`,
`   {base:true,ic:'i-home',n:'Back to base',short:'Base',t:'22:30',tl:'Home',ll:LL.hotel,lbl:false,
    p:'Sleep — properly. Alarm at <b>05:30</b>: tomorrow starts at the foot of the Golden Mount in the dark.',`);

fs.writeFileSync("bangkok-field-notes.html",s);console.log("day 1 done");
