(function() {

  var path = window.location.pathname;
  var pathNorm = path.replace(/\/$/, '') + '/';
  var text = null;

  // ═══════════════════════════════════════════════════════════════════════════
  // 1. ARGOLLITAS DE PLATA 925 — URL exacta
  // ═══════════════════════════════════════════════════════════════════════════

  var argollitas = {};

  function h(mm){return 'Argollita de Plata 925 con cierre huggie y diametro externo de '+mm+'. Ideal para primera, segunda o tercera perforacion en la oreja. Precio por unidad. Envios a todo el pais.';}
  function ho(mm){return 'Argollita de Plata 925 con cierre huggie y diametro externo de '+mm+'. Se puede usar en oreja u ombligo. Precio por unidad. Envios a todo el pais.';}
  function b(mm){return 'Argollita de Plata 925 con cierre bisagra y diametro externo de '+mm+'. Cierre comodo que entra suave y queda firme todo el dia. Precio por unidad. Envios a todo el pais.';}
  function sf1(mm){return 'Argollita de Plata 925 con cierre sin fin tipo piercing y diametro externo de '+mm+'. Ideal para oreja en primera, segunda, tercera perforacion o cartilago. Precio por unidad. Envios a todo el pais.';}
  function sf2(mm){return 'Argollita de Plata 925 con cierre sin fin tipo piercing y diametro externo de '+mm+'. Se puede usar en oreja u ombligo. Precio por unidad. Envios a todo el pais.';}
  function sf3(mm){return 'Argollita de Plata 925 con cierre sin fin tipo piercing y diametro externo de '+mm+'. Se puede usar en oreja, ombligo o nariz. Precio por unidad. Envios a todo el pais.';}
  function sf3b(mm){return 'Argollita de Plata 925 con cierre sin fin tipo piercing y diametro externo de '+mm+'. Se puede usar en oreja, nariz u ombligo. Precio por unidad. Envios a todo el pais.';}
  function sf4(mm){return 'Argollita de Plata 925 con cierre sin fin tipo piercing y diametro externo de '+mm+'. Se puede usar en oreja, labio, ombligo o nariz. Precio por unidad. Envios a todo el pais.';}
  function sfe(mm){return 'Argollita de Plata 925 con cierre sin fin de encaje y diametro externo de '+mm+'. Ideal para oreja en primera, segunda, tercera perforacion o cartilago. Precio por unidad. Envios a todo el pais.';}
  function hpar(mm){return 'Par de argollitas de Plata 925 con cierre huggie y diametro externo de '+mm+'. Precio por par (dos argollas). Envios a todo el pais.';}
  function bpar(mm){return 'Par de argollitas de Plata 925 con cierre bisagra y diametro externo de '+mm+'. Precio por par (dos argollas). Envios a todo el pais.';}
  function sfepar(mm){return 'Par de argollitas de Plata 925 con cierre sin fin de encaje y diametro externo de '+mm+'. Precio por par (dos argollas). Envios a todo el pais.';}
  function shinyU(mm){return 'Argollita Shiny de Plata 925 con cierre sin fin tipo piercing y diametro externo de '+mm+'. Brillosa y versatil, se puede usar en oreja, nariz u ombligo. Precio por unidad. Envios a todo el pais.';}
  function shinyP(mm){return 'Par de argollitas Shiny de Plata 925 con cierre sin fin tipo piercing y diametro externo de '+mm+'. Precio por par (dos argollas). Sale mas barato que comprarlas por separado. Envios a todo el pais.';}
  function lisaF(mm){return 'Argolla Lisa de Plata 925 con cierre bisagra y diametro externo de '+mm+'. Clasica y versatil, va en cualquier perforacion de la oreja. Precio por unidad. Envios a todo el pais.';}

  argollitas['/productos/abby-10mm-10515-rz3dq/']         = ho('10mm');
  argollitas['/productos/ale-perla-13mm-10523-wtqy1/']     = b('13mm');
  argollitas['/productos/archi-white-8mm-09106/']           = sf3('8mm');
  argollitas['/productos/archie-white-10mm-07130/']         = sf3('10mm');
  argollitas['/productos/bali-tita-8mm-05149-ypzot/']       = sf3('8mm');
  argollitas['/productos/bali-titi-8mm-09975-dpplx/']       = sf3('8mm');
  argollitas['/productos/bear-11mm-10506-kc6jp/']           = h('11mm');
  argollitas['/productos/becky-10mm-10546-cipz7/']          = b('10mm');
  argollitas['/productos/big-bowli-12mm-10516-ss1t1/']      = sfe('12mm');
  argollitas['/productos/bouwli-12mm-09104/']               = sfe('12mm');
  argollitas['/productos/circle-strass-10mm-11343-3wcr7/']  = b('10mm');
  argollitas['/productos/dafne-9mm-10539-5w1b3/']           = h('9mm');
  argollitas['/productos/dolly-13mm-05878-cwbwe/']          = sfe('13mm');
  argollitas['/productos/emi-10mm-09964-n5p16/']            = sf4('10mm');
  argollitas['/productos/emi-8mm-00183/']                   = sf4('8mm');
  argollitas['/productos/eye-10mm-08492/']                  = b('10mm');
  argollitas['/productos/farly-9mm-09960-9xkn4/']           = sf1('9mm');
  argollitas['/productos/florci-10mm-10540-6z2ef/']         = h('10mm');
  argollitas['/productos/ginebra-10mm-09144/']              = sf4('10mm');
  argollitas['/productos/ginebra-7mm-09142/']               = sf4('7mm');
  argollitas['/productos/ginebra-8mm-09970-qpmc9/']         = sf4('8mm');
  argollitas['/productos/giulia-11mm-10197-f5wvt/']         = h('11mm');
  argollitas['/productos/glitter-11mm-10509-mygns/']        = h('11mm');
  argollitas['/productos/heart-9mm-02826-9pf09/']           = sf1('9mm');
  argollitas['/productos/heart-strass-10mm-10529-7iy32/']   = b('10mm');
  argollitas['/productos/heart-strass-12mm-05865/']         = b('12mm');
  argollitas['/productos/hexa-12mm-07136-ysfq7/']           = sf2('12mm');
  argollitas['/productos/hexa-9mm-05868-hiekf/']            = sf2('9mm');
  argollitas['/productos/joddie-10mm-10514-r5p9f/']         = h('10mm');
  argollitas['/productos/levy-14mm-10534-1pcod/']           = h('14mm');
  argollitas['/productos/lila-11mm-10557-aiokr/']           = sf2('11mm');
  argollitas['/productos/lila-9mm-10556-9pcim/']            = sf4('9mm');
  argollitas['/productos/loster-9mm-10519-vgprb/']          = h('9mm');
  argollitas['/productos/lua-10mm-10548-ec669/']            = h('10mm');
  argollitas['/productos/lua-13mm-10543-9unnb/']            = h('13mm');
  argollitas['/productos/lua-15mm-10547-db1p2/']            = h('15mm');
  argollitas['/productos/lucky-13mm-10522-y05qw/']          = b('13mm');
  argollitas['/productos/lulitas-10mm-09979-h8mfy/']        = sf4('10mm');
  argollitas['/productos/lulitas-8mm-09965-o90wn/']         = sf3('8mm');
  argollitas['/productos/lunita-10mm-10542-91ie7/']         = h('10mm');
  argollitas['/productos/maani-10mm-07119-qhfqc/']          = h('10mm');
  argollitas['/productos/maya-10mm-10535-2ia8f/']           = b('10mm');
  argollitas['/productos/mili-12mm-08259/']                 = sfe('12mm');
  argollitas['/productos/naty-13mm-10528-6jkjq/']           = b('13mm');
  argollitas['/productos/ovila-12mm-10512-p5979/']          = b('12mm');
  argollitas['/productos/pamira-12mm-10560-d6fz9/']         = h('12mm');
  argollitas['/productos/papry-10mm-09954-vbeqk/']          = sf4('10mm');
  argollitas['/productos/paris-9mm-10541-7xl9l/']           = h('9mm');
  argollitas['/productos/paulines-10mm-09959-96llw/']       = sf3b('10mm');
  argollitas['/productos/paulines-12mm-09456/']             = sf2('12mm');
  argollitas['/productos/pipi-8mm-09145/']                  = sf3('8mm');
  argollitas['/productos/polly-10mm-10530-8eibt/']          = b('10mm');
  argollitas['/productos/print-stras-13mm-10527-5pld8/']    = b('13mm');
  argollitas['/productos/rayo-12mm-00342/']                 = b('12mm');
  argollitas['/productos/rolly-10mm-10559-kv94q/']          = sf2('10mm');
  argollitas['/productos/sin-fin-10mm-05143/']              = sf4('10mm');
  argollitas['/productos/sin-fin-12mm-07129/']              = sf2('12mm');
  argollitas['/productos/sin-fin-6mm-10555-8ugki/']         = sf1('6mm');
  argollitas['/productos/star-strass-10mm-09564-k762z/']    = b('10mm');
  argollitas['/productos/stuart-11mm-08496-x1f8o/']         = h('11mm');
  argollitas['/productos/tatii-12mm-10532-aicmv/']          = b('12mm');
  argollitas['/productos/tini-11mm-10507-l582i/']           = h('11mm');
  argollitas['/productos/tini-13mm-10545-boz1j/']           = h('13mm');
  argollitas['/productos/trina-10mm-05716-66kvg/']          = sf3('10mm');
  argollitas['/productos/tura-8mm-10520-w9idw/']            = sf1('8mm');
  argollitas['/productos/turin-7mm-05161-c8z9n/']           = sf1('7mm');
  argollitas['/productos/aisha-10mm-04057-1ewsy/']          = sf3('10mm');
  argollitas['/productos/madi-10mm-03031-1ee7r/']           = sf3('10mm');
  argollitas['/productos/pauli-8mm-03838-1kcrr/']           = sf3('8mm');
  argollitas['/productos/baby-white-8mm-05174-t31ef/']      = sf3('8mm');
  argollitas['/productos/trixie-12mm-05876-1hqvk/']         = sfe('12mm');
  argollitas['/productos/shiny-arcoiris-10mm-09957-qqqgf/'] = sf3('10mm');
  argollitas['/productos/sin-fin-8mm-09981-3qu0v/']         = sf4('8mm');
  argollitas['/productos/farly-10mm-11672-76k0r/']          = sf3('10mm');
  argollitas['/productos/coldplay-8mm-09970-1a9hp/']        = sf3('8mm');
  argollitas['/productos/cora-10mm-11682-tjtht/']           = b('10mm');
  argollitas['/productos/cira-10mm-11683-1gqy7/']          = sf4('10mm');
  argollitas['/productos/madi-8mm-11684-eyg6e/']            = sf4('8mm');
  argollitas['/productos/coldplay-10mm-11696-tpcmn/']       = sf4('10mm');
  argollitas['/productos/lara-9mm-05864-kt8xh/']            = sf4('9mm');
  argollitas['/productos/mini-lara-7mm-11699-xee8s/']       = sf4('7mm');
  argollitas['/productos/selene-8mm-11700-1gsv4/']          = sf4('8mm');
  argollitas['/productos/selene-10mm-11701-vn805/']         = sf4('10mm');
  argollitas['/productos/lidya-10mm-11702-15f1q/']          = sf4('10mm');
  argollitas['/productos/lulitas-8mm-09965-hudjf/']         = sf3('8mm');
  argollitas['/productos/zunna-10mm-11727-1ijft/']          = sf4('10mm');
  argollitas['/productos/par-bouwli-12mm-11163-141ai/']     = sfepar('12mm');
  argollitas['/productos/par-dolly-13mm-11224-y6e9z/']      = sfepar('13mm');
  argollitas['/productos/par-florci-10mm-11308-x6jqh/']     = hpar('10mm');
  argollitas['/productos/par-joddie-10mm-11307-1l3bd/']     = hpar('10mm');
  argollitas['/productos/par-lisa-12mm-11155-1c96y/']       = bpar('12mm');
  argollitas['/productos/par-lucky-13mm-11204-5dhfj/']      = bpar('13mm');
  argollitas['/productos/par-tini-11mm-11205-1brxt/']       = hpar('11mm');
  argollitas['/productos/par-paris-9mm-11157-13mkx/']       = hpar('9mm');
  argollitas['/productos/par-glitter-11mm-11612-1k2qt/']    = hpar('11mm');
  argollitas['/productos/par-lunita-10mm-11613-10516/']     = hpar('10mm');
  argollitas['/productos/par-lisas-14mm-09148-1r46x/']      = bpar('14mm');
  argollitas['/productos/shiny-10mm-05165/']                = shinyU('10mm');
  argollitas['/productos/shiny-7mm-00334/']                 = shinyU('7mm');
  argollitas['/productos/shiny-8mm-09143/']                 = shinyU('8mm');
  argollitas['/productos/slim-shiny-10mm-11131-196fw/']     = shinyU('10mm');
  argollitas['/productos/shiny-lula-10mm-11693-rc3b5/']     = shinyU('10mm');
  argollitas['/productos/par-shiny-7mm-11161-ud4ze/']       = shinyP('7mm');
  argollitas['/productos/par-shiny-8mm-11160-72ar8/']       = shinyP('8mm');
  argollitas['/productos/lisa-10mm-00049/']                 = lisaF('10mm');
  argollitas['/productos/lisa-12mm-00048/']                 = lisaF('12mm');

  text = argollitas[pathNorm];

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. SETS — slug matching
  // ═══════════════════════════════════════════════════════════════════════════

  if (!text) {
    var SETS = {
      'set-lula-11776':['Plata 925','4 joyitas','Argolla Rayo 12mm, Argollas Lisas 12mm (1 par), Argollita Shiny Lula 10mm'],
      'set-paulin-11775':['Bronce enchapado en oro','2 pares','Argollas Mia Gold 15mm (1 par), Argollas Paulin Gold 14mm (1 par)'],
      'set-sabrina-11180':['Plata 925','2 pares','Argollitas Paris 9mm, Argollas Heart Strass 10mm'],
      'set-loop-11117':['Acero dorado con bano de oro','2 cadenitas','Cadenita Loop 45cm, Cadenita Charm 40cm'],
      'set-bennu-11189':['Acero blanco con bano de plata','2 anillos regulables','Anillo Bennu regulable, Anillo Bianca regulable'],
      'set-abraham-11139':['Acero dorado con bano de oro','4 accesorios','Aros Abraham (1 par), Mini Star, Mini Bichi'],
      'set-maru-11397':['Niquel color plateado','2 pares','Argollas Gota Jack 10 (1 par), Argollas Maru 12mm (1 par)'],
      'set-ariadna-11228':['Acero quirurgico','2 pares','Argollas Ariadna 15mm (1 par), Aros Yani (1 par)'],
      'set-abridores-gota-11103':['Plata 925','3 joyitas','Abridores Gota (1 par), Abridor Runy'],
      'set-abridores-zendaya-11104':['Plata 925','3 joyitas','Abridor Jessica, Abridor Zendaya, Abridor Scarlett'],
      'set-akira-11086':['Acero quirurgico','2 pares','Argollas Akira 22mm (1 par), Argollas Antonia 17mm (1 par)'],
      'set-akira-11744':['Acero dorado con bano de oro','2 pares','Argollas Coca 13mm (1 par), Argollas Akira 22mm (1 par)'],
      'set-ale-11134':['Acero dorado con bano de oro','2 pares','Aros Ale Perla (1 par), Aros Camila 12mm (1 par)'],
      'set-alama-11717':['Acero quirurgico','2 pares','Argollas Snake Silver (1 par), Argollas Amaranto 15mm (1 par)'],
      'set-ari-11001':['Plata 925','3 joyitas','Mini Nudito, Mini Bolita 4mm, Mini Bolita 2mm'],
      'set-becky-11355':['Plata 925','2 pares','Argollas Paris 9mm (1 par), Argollas Becky 10mm (1 par)'],
      'set-best-11698':['Niquel color plateado','2 pares','Argollas Best 10mm (1 par), Argollas Ellis (1 par)'],
      'set-boomy-11002':['Plata 925','3 joyitas','Mini Boom, Mini Olivos, Mini Bamy'],
      'set-carmen-11225':['Acero dorado con bano de oro','2 pares','Argollas Carmen (1 par), Argollas Oval (1 par)'],
      'set-char-11181':['Acero blanco con bano de plata','2 pares','Argollas Char (1 par), Perlitas 4mm (1 par)'],
      'set-cubanitas-11220':['Acero quirurgico','3 pares','Argollas Cubanitas 20mm (1 par), Aros Strass Lolita 4mm (1 par), Aros Mili 4mm (1 par)'],
      'set-dove-11188':['Acero blanco con bano de plata','2 anillos regulables','Anillo Dove regulable, Anillo Alma regulable'],
      'set-dumblove-11106':['Niquel color plateado','4 joyitas','Argollas Dumblove (1 par), Argolla Acrita, Argolla Ellis Gold'],
      'set-evelyn-11111':['Acero quirurgico','2 cadenitas','Cadenita Evelyn 40cm, Cadenita Medal 45cm'],
      'set-forza-11098':['Bronce enchapado en oro','4 joyitas','Argollas Forza Gold (1 par), Argollita Mendy, Argollita Tina Gold'],
      'set-gotas-silver-protectora-09655':['Acero quirurgico','2 piezas','Aros Gota (1 par), Pulsera Lily Protectora'],
      'set-gotita-11089':['Acero dorado con bano de oro','2 pares','Aros Gotas Jack (1 par), Argollas Mendy 10mm (1 par)'],
      'set-hadid-11080':['Acero dorado con bano de oro','3 joyitas','Argollas Lisas (1 par), Mini Aro Hadid'],
      'set-halo-11197':['Niquel color plateado','2 pares','Argollas Halo (1 par), Argollas Silver (1 par)'],
      'set-honguito-11141':['Acero dorado con bano de oro','2 pares','Argollas Honguito (1 par), Bolitas 4mm (1 par)'],
      'set-isel-11227':['Acero blanco con bano de plata','2 pares','Argollas Isel 9mm (1 par), Argollas Cuba 10mm (1 par)'],
      'set-issa-11718':['Acero quirurgico','2 pares','Argollas Issa 15mm (1 par), Argollas Amaranto 17mm (1 par)'],
      'set-lara-11100':['Acero quirurgico','5 joyitas','Argollas Lara 18mm (1 par), Argolla Amaranto 15mm, Argolla Juana 10mm, Ear Cuff Kala'],
      'set-lil-rayo-11739':['Acero dorado con bano de oro','5 joyitas','Argollas Fabita 17mm (1 par), Argollas Lili Rayo 20mm (1 par), Mini Tini'],
      'set-lowie-11183':['Plata 925','4 joyitas','Mini Nudito, Mini Stella, Mini Mariposa, Mini Lowie'],
      'set-luli-10999':['Plata 925','3 joyitas','Mini Stella, Mini Mariposa, Mini Rayito'],
      'set-mandy-11614':['Acero dorado con bano de oro','2 pares','Argollas Willemina (1 par), Argollas Mendy 10mm (1 par)'],
      'set-marucha-11221':['Acero quirurgico','2 cadenitas','Cadenita Marucha 40cm, Cadenita Snake 2.7mm 45cm'],
      'set-mizy-11092':['Bronce enchapado en oro','2 pares','Argollas Willemina (1 par), Argollas Mizy Gold (1 par)'],
      'set-niegui-11218':['Acero quirurgico','2 pares','Aros Strass Lolita 4mm (1 par), Argollas Niegui (1 par)'],
      'set-oli-11085':['Acero quirurgico','2 pares','Argollas Oli Perla (1 par), Argollas Juana 10mm (1 par)'],
      'set-paquina-11142':['Acero dorado con bano de oro','2 pares','Argollas Paquina (1 par), Aros Alul (1 par)'],
      'set-riri-11149':['Niquel color plateado','2 pares','Argollas Ellis Silver (1 par), Argollas Riri Silver (1 par)'],
      'set-rochi-11187':['Acero blanco con bano de plata','2 anillos regulables','Anillo Rochi regulable, Anillo Layla regulable'],
      'set-shakira-11095':['Acero dorado con bano de oro','4 joyitas','Ear Cuff Shakira, Argollas Mendy 10mm (1 par), Argollita Churi 9mm'],
      'set-snake-11150':['Acero quirurgico','4 joyitas','Argollita Willemina Silver, Argollita Snake Silver, Argollas Antonia 15mm (1 par)'],
      'set-spicy-11226':['Acero blanco con bano de plata','2 pares','Argollas Cuba 10mm (1 par), Argollas Spicy (1 par)'],
      'set-tini-11137':['Acero dorado con bano de oro','2 pares','Aros Tinita (1 par), Argollas Fabita 17mm (1 par)'],
      'set-trueno-11140':['Acero dorado con bano de oro','5 joyitas','Argollas Relampago 12mm (1 par), Argollas Lisas 10mm (1 par), Mini Rayito Strass'],
      'set-tulum-11398':['Niquel color plateado','2 pares','Argollas Tulum 15mm (1 par), Argollas Ellis Gold (1 par)'],
      'set-vitas-11743':['Acero quirurgico','3 pares','Argollas Vitas (1 par), Argollas Fabita 11mm (1 par), Aros Strass Lolita 3mm (1 par)'],
      'set-lover-11096':['Bronce enchapado en oro','5 joyitas','Argollas Valu Gold (1 par), Ear Cuff Kira, Argollas Fabita 15mm (1 par)'],
      'set-exa-11769':['Acero dorado con bano de oro','2 pares','Argollas Exa 20mm (1 par), Argollas Fabita 15mm (1 par)'],
      'set-coca-11768':['Acero quirurgico','2 pares','Argollas Antonia 12mm (1 par), Argollas Coca 15mm (1 par)'],
      'set-sardis-11767':['Acero quirurgico','2 pares','Aros Sardis (1 par), Perlas 4mm (1 par)'],
      'set-serlmira-11766':['Acero dorado con bano de oro','2 pares','Bolitas 3mm (1 par), Aros Serlmira (1 par)'],
      'set-sarria-11765':['Acero quirurgico','2 pares','Aros Strass Lolita (1 par), Aritos Sarria (1 par)'],
      'set-helix-11764':['Acero dorado con bano de oro','3 joyitas','Labret Myriam, Labret Cristal, Helix Milagros'],
      'set-mili-11219':['Acero quirurgico','2 pares','Aros Mili 5mm (1 par), Aros Mili 6mm (1 par)'],
      'set-abridores-formis-11102':['Plata 925','3 joyitas','Abridor Lunita, Abridor Ibera, Abridor Square'],
      'set-gotas-gold-protectora-09654':['Acero dorado con bano de oro','2 piezas','Aros Gota Jack 16mm (1 par), Pulsera Lily Protectora'],
      'set-maxim-11084':['Acero quirurgico','2 pares','Argollas Susy (1 par), Argollas Maxim (1 par)'],
      'set-mailis-11771':['Acero quirurgico','3 pares','Aros Gota Jack 16mm (1 par), Aros Mailis (1 par), Aros Strass Lolita 3mm (1 par)'],
      'set-martsa-11772':['Acero quirurgico','3 pares','Aros Martsa (1 par), Argollas Fabita 9mm (1 par), Bolitas 3mm (1 par)'],
      'set-forza-11773':['Acero quirurgico','2 pares','Argollas Forza Silver 18mm (1 par), Aros Liverpool 5mm (1 par)'],
      'set-say-11774':['Acero quirurgico','2 pares','Argollas Coca 28mm (1 par), Perlitas 8mm (1 par)'],
      'set-cora-11777':['Plata 925','5 joyitas','Argollitas Cora 10mm (1 par), Argollas Lisas 10mm (1 par), Argollita Archie White 8mm'],
      'set-balit-11778':['Plata 925','4 joyitas','Argollitas Bali Titi 8mm (1 par), Argollita Ginebra 7mm, Argollita Shiny 7mm'],
      'set-emi-11779':['Plata 925','4 joyitas','Argollita Selene 10mm, Argollita Cira 10mm, Argollita Emi 10mm, Argollita Emi 8mm']
    };

    for (var slug in SETS) {
      if (path.indexOf(slug) !== -1) {
        var s = SETS[slug];
        text = 'Set de ' + s[1] + ' de ' + s[0] + '. Incluye: ' + s[2] + '. Look resuelto listo para usar. Precio por set completo. Envios a todo el pais.';
        break;
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. BREADCRUMB FALLBACK — categorias genericas
  // ═══════════════════════════════════════════════════════════════════════════

  if (!text && path.indexOf('/productos/') !== -1) {

    var bcEl = document.querySelector('.breadcrumbs, .breadcrumb, nav[aria-label="breadcrumb"]');
    var bc = bcEl ? bcEl.textContent.toUpperCase() : '';

    var h1El = document.querySelector('h1');
    var h1 = h1El ? h1El.textContent.toUpperCase() : '';

    var combo = bc + ' ' + h1;

    // Material detection
    var mat = '';
    if (combo.indexOf('PLATA 925') !== -1 || combo.indexOf('PLATA925') !== -1) {
      mat = 'Plata 925';
    } else if (combo.indexOf('ACERO DORADO') !== -1) {
      mat = 'Acero dorado con bano de oro';
    } else if (combo.indexOf('ACERO BLANCO') !== -1) {
      mat = 'Acero blanco con bano de plata';
    } else if (combo.indexOf('ACERO QUIR') !== -1) {
      mat = 'Acero quirurgico hipoalergenico, resistente al agua y al sudor';
    } else if (combo.indexOf('ENCHAPADO') !== -1 || combo.indexOf('BRONCE') !== -1) {
      mat = 'Bronce enchapado en oro';
    } else if (combo.indexOf('NIQUEL') !== -1 || combo.indexOf('NÍQUEL') !== -1) {
      mat = 'Niquel color plateado';
    }

    // Category detection
    if (combo.indexOf('PIERCING') !== -1) {
      text = 'Piercing de ' + (mat || 'acero') + ' para oreja, nariz, ombligo o labio. Disenos para cada estilo. Envios a todo el pais.';
    } else if (combo.indexOf('EAR CUFF') !== -1) {
      text = 'Ear cuff de ' + (mat || 'acero') + '. Sin necesidad de perforacion, se engancha en el cartilago. Envios a todo el pais.';
    } else if (combo.indexOf('BRAZALETE') !== -1) {
      text = 'Brazalete de metal de fundicion. Disponible en plateado y dorado, para muneca o brazo. Envios a todo el pais.';
    } else if (combo.indexOf('TOBILLERA') !== -1) {
      text = 'Tobillera de ' + (mat || 'acero') + '. Accesorio ideal para el verano. Envios a todo el pais.';
    } else if (combo.indexOf('CADENI') !== -1 || combo.indexOf('COLLAR') !== -1) {
      text = 'Cadenita de ' + (mat || 'acero') + '. Ideal para usar sola o en layering con otras cadenitas. Envios a todo el pais.';
    } else if (combo.indexOf('PULSERA') !== -1) {
      text = 'Pulsera de ' + (mat || 'acero') + '. Accesorio versatil para uso diario. Envios a todo el pais.';
    } else if (combo.indexOf('ANILLO') !== -1) {
      text = 'Anillo de ' + (mat || 'acero') + '. Disponible en talle regulable. Envios a todo el pais.';
    } else if (combo.indexOf('ABRIDOR') !== -1) {
      text = 'Abridor de ' + (mat || 'Plata 925') + '. Ideal para primera perforacion. Envios a todo el pais.';
    } else if (combo.indexOf('GARGANTILLA') !== -1) {
      text = 'Gargantilla de ' + (mat || 'niquel') + '. Accesorio de cuello con estilo. Envios a todo el pais.';
    } else if (combo.indexOf('ARGOLLA') !== -1 && mat) {
      text = 'Argolla de ' + mat + '. Accesorio versatil para uso diario en la oreja. Envios a todo el pais.';
    } else if (combo.indexOf('AROS') !== -1 && mat) {
      text = 'Aros de ' + mat + '. Accesorio para uso diario. Envios a todo el pais.';
    } else if (combo.indexOf('CLIP EARRING') !== -1 || combo.indexOf('CLIP') !== -1) {
      text = 'Clip earring de ' + (mat || 'acero') + '. Sin necesidad de perforacion. Envios a todo el pais.';
    } else if (combo.indexOf('PELO') !== -1 || combo.indexOf('HEBILLA') !== -1) {
      text = 'Accesorio para el pelo. Envios a todo el pais.';
    } else if (combo.indexOf('CINTO') !== -1) {
      text = 'Cinto accesorio. Envios a todo el pais.';
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. INYECCION JSON-LD
  // ═══════════════════════════════════════════════════════════════════════════

  if (!text) return;

  var jsonld = document.createElement('script');
  jsonld.type = 'application/ld+json';
  jsonld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    'description': text
  });
  document.head.appendChild(jsonld);

})();
