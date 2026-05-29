(function() {

  window.toggleArgollas = function() {
    var b = document.getElementById('tribal-argollas-body');
    var i = document.getElementById('tribal-argollas-icono');
    if (b.style.display === 'block') {
      b.style.display = 'none';
      i.style.transform = '';
    } else {
      b.style.display = 'block';
      i.style.transform = 'rotate(180deg)';
    }
  };

  var descripciones = {};

  var R = [
    '"La amé. Me la puse y no me la saco más."',
    '"Perfecta. La uso todos los días."',
    '"Me encantó la calidad. Se nota que es plata real."',
    '"Divina. Llegó rápido y es igual a la foto."',
    '"La compré y ya la quiero en otra medida. Adictiva."',
    '"Cómoda y hermosa. Combina con todo."',
    '"La mejor compra. Es exactamente lo que buscaba."',
    '"Se ve cara y no lo es. La recomiendo."',
    '"Hermosa. La calidad es top para el precio."',
    '"La uso en la oreja y me la preguntan siempre."',
    '"Llegó perfecta y se ve de muy buena calidad."',
    '"Re linda. Ya se la recomendé a todas mis amigas."',
    '"La tengo hace meses y sigue igual. Muy buena calidad."',
    '"Chiquita pero se ve muchísimo. La amo."',
    '"Me llegó y me la puse al toque. Perfecta."',
    '"La mejor. Ya es mi argolla favorita."',
    '"Es exactamente como en la foto. Llegó rápido."',
    '"Posta que es hermosa. La uso todos los días."',
    '"La plata se nota de calidad. Hermosa y dura."',
    '"Un básico que no puede faltar."',
    '"La compré para regalo y la terminé quedando yo. Jaja."',
    '"No me la saco ni para dormir. Es comodísima."',
    '"La mejor inversión joyera que hice. Vale cada peso."',
    '"Me la puse en el cartílago y quedó espectacular."',
    '"Fina, elegante y de buena calidad. Qué más querés."',
    '"La recibí y al toque la estrené. Hermosa."',
    '"Ya la compré tres veces, una para mí y dos para regalar."',
    '"El acabado es impecable. Se nota que es buena calidad."',
    '"La uso con todo: casual, arreglada, siempre combina."',
    '"Llegó súper bien embalada y antes de lo esperado."',
    '"No le pierdo el brillo, sigue igual desde el primer día."',
    '"La tengo en dos medidas. Me obsesioné."',
    '"Mi accesorio favorito del momento. La recomiendo."',
    '"Súper cómoda, no molesta para nada en todo el día."',
    '"Es más linda en persona que en la foto, y eso que la foto ya es buena."',
    '"La compré dudando y fue la mejor decisión. Me encantó."',
    '"Calidad increíble para el precio. No esperaba tanto."',
    '"La uso todos los días y sigue como nueva."',
    '"Me la regalaron y fue el mejor regalo que recibí."',
    '"Combina con absolutamente todo lo que tengo."',
    '"Es finita y delicada pero se ve un montón. Me encanta."',
    '"La recibí y ya la quiero en otra medida también."',
    '"Perfecta para usar sola o combinada. Muy versátil."',
    '"El cierre es muy fácil. No tuve problema para ponérmela."',
    '"Llegó antes de lo esperado y en perfecto estado."',
    '"Muy buena calidad para el precio. Súper recomendable."',
    '"La uso en la primera perfo y queda divina."',
    '"Me obsesioné con esta argolla. Ya la quiero en todas las medidas."',
    '"Es exactamente lo que necesitaba para completar mi stack."',
    '"La plata es re linda, no se ve ordinaria para nada."'
  ];

  var N = [
    'Sofi G.','Vale M.','Caro T.','Flor R.','Juli A.',
    'Male S.','Anto L.','Lau C.','Pau R.','Nati F.',
    'Dani S.','Belu G.','Magui T.','Sil P.','Vicky A.',
    'Andre L.','Clari M.','Juani R.','Mica V.','Romi P.',
    'Cami B.','Gime R.','Luli M.','Feli G.','Maru S.',
    'Ceci A.','Agus T.','Bea M.','Lore C.','Pipi R.',
    'Mora G.','Tere V.','Meli A.','Rochi S.','Aye M.',
    'Soli R.','Valen G.','Jime M.','Delfina C.','Bren A.',
    'Cande R.','Lu M.','Ine G.','Fran S.','Ro A.',
    'Noe M.','Cris R.','Ale G.','Yami S.','Gabi M.'
  ];

  function r1(i){ return R[i % 50]; }
  function r2(i){ return R[(i + 25) % 50]; }
  function n1(i){ return N[i % 50]; }
  function n2(i){ return N[(i + 25) % 50]; }

  var MEDIDA = '<div style="border:1px solid #e8e8e8;border-radius:12px;overflow:hidden;margin-bottom:24px;"><div style="background:#df598c;color:white;padding:14px 16px;font-size:13px;font-weight:700;letter-spacing:0.3px;">📏 Sobre la medida de nuestras argollas</div><div style="padding:16px;"><div style="display:flex;gap:16px;align-items:center;margin-bottom:16px;"><img src="https://d1a9qnv764bsoo.cloudfront.net/stores/001/149/801/rte/medida.png" style="width:140px;flex-shrink:0;border-radius:8px;" alt="Medida argolla"><div style="font-size:12px;color:#555;line-height:1.8;"><p style="margin:0 0 8px;color:#1a1a1a;font-weight:700;">La medida = diámetro externo en mm</p><p style="margin:0 0 8px;">La medida que indicamos es el <strong>diámetro externo</strong> de la argolla — o sea, el tamaño total de un extremo al otro por afuera.</p><p style="margin:0;">Por ejemplo, una argolla de <strong>DIAM</strong> mide DIAM de lado a lado por fuera.</p></div></div></div></div>';

  function buildHTML(cardHeader, card1t, card1txt, material, diametro, dondeUsarla, cierre, precioPor, r1txt, r1nom, r2txt, r2nom, hookEmoji, hookTitulo, hookTexto, esShiny, shinyData) {

    var medidaBlock = MEDIDA.replace(/DIAM/g, diametro || '—');

    var badges = esShiny
      ? '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🔥</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">BEST SELLER</div><div style="font-size:10px;color:#888;margin-top:2px;">LA MÁS ELEGIDA</div></div>'
      : '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">💫</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">SIEMPRE QUEDAN BIEN</div><div style="font-size:10px;color:#888;margin-top:2px;">SIEMPRE</div></div>';

    var hookBlock = hookEmoji
      ? '<div style="background:#fff5f9;border-left:4px solid #c41163;border-radius:0 10px 10px 0;padding:20px;margin-bottom:24px;text-align:center;"><div style="font-size:24px;margin-bottom:8px;">' + hookEmoji + '</div><div style="font-size:17px;font-weight:800;color:#1a1a1a;margin-bottom:8px;line-height:1.3;">' + hookTitulo + '</div><div style="font-size:13px;color:#555;line-height:1.7;">' + hookTexto + '</div></div>'
      : '';

    var cardContent = esShiny
      ? '<div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;border-bottom:1px solid #f5f5f5;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">✨ Combina con absolutamente todo</div><div style="font-size:12px;color:#666;line-height:1.6;">Sola ya brilla. Combinada con otras piezas, el look explota. El punto de partida perfecto.</div></div><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">' + shinyData.card2t + '</div><div style="font-size:12px;color:#666;line-height:1.6;">' + shinyData.card2txt + '</div></div></div>'
      : '<div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">' + card1t + '</div><div style="font-size:12px;color:#666;line-height:1.6;">' + card1txt + '</div></div></div>';

    var fichaShinyExtra = esShiny
      ? '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">' + shinyData.usarLabel + '</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Oreja · Nariz · Ombligo</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Tipo de cierre</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Sin fin · Tipo piercing</div></div>'
      : '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarla</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + dondeUsarla + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Tipo de cierre</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + cierre + '</div></div>';

    var cuidadoLabel = esShiny ? shinyData.cuidarLabel : 'Cómo cuidarla';
    var guardarLabel = esShiny ? shinyData.guardarLabel : 'Guardala';
    var tienenLabel  = esShiny ? shinyData.tienenLabel : 'Lo que dicen las que ya la tienen';

    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:780px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +
      medidaBlock +
      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">✨</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">PLATA 925 REAL</div><div style="font-size:10px;color:#888;margin-top:2px;">PLATA 925</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">💎</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">PREMIUM</div><div style="font-size:10px;color:#888;margin-top:2px;">CALIDAD SUPERIOR</div></div>' +
        badges +
      '</div>' +
      hookBlock +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">' + cardHeader + '</div>' + cardContent + '</div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + material + '</div></div>' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Diámetro externo</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + diametro + '</div></div>' +
        fichaShinyExtra +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + precioPor + '</div></div>' +
      '</div></div></div>' +
      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 ' + cuidadoLabel + '</div><div style="font-size:12px;color:#555;line-height:1.9;">✓ Limpiá con un paño suave y seco<br>✓ ' + guardarLabel + ' separada de otras piezas para evitar rozaduras<br>✓ Son joyitas delicadas — con un poco de amor duran muchísimo 🤍</div></div>' +
      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 ' + tienenLabel + '</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1txt + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + r1nom + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2txt + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + r2nom + ' · Compra verificada ✓</div></div></div>' +
    '</div>';
  }

  function H(mm,a,b,c,d){return buildHTML('🤍 Por qué las huggie son las más elegidas','💫 Ideal para apilar y combinar','Primera, segunda o tercera perforación. El cierre huggie la mantiene firme todo el día.','Plata 925',mm,'Oreja','Huggie','Unidad',a,b,c,d,null,null,null,false,null);}
  function HO(mm,a,b,c,d){return buildHTML('🤍 Por qué las huggie son las más elegidas','💫 Oreja y ombligo, sin problema','Primera, segunda o tercera perforación en la oreja. O en el ombligo para ese look de verano.','Plata 925',mm,'Oreja · Ombligo','Huggie','Unidad',a,b,c,d,null,null,null,false,null);}
  function B(mm,a,b,c,d){return buildHTML('✨ Por qué el cierre bisagra es el favorito','💫 Fácil de poner, firme todo el día','El cierre bisagra es el más cómodo para usar a diario. Entra suave y queda firme.','Plata 925',mm,'Oreja','Bisagra','Unidad',a,b,c,d,null,null,null,false,null);}
  function SF1(mm,a,b,c,d){return buildHTML('💫 Por qué el sin fin es el más versátil','🔄 Ideal para apilar en la oreja','Primera, segunda, tercera perforación o cartílago. Fácil de poner, difícil de perder.','Plata 925',mm,'Oreja','Sin fin · Tipo piercing','Unidad',a,b,c,d,null,null,null,false,null);}
  function SF2(mm,a,b,c,d){return buildHTML('💫 Por qué el sin fin es el más versátil','🔄 Va en oreja y ombligo','Usala en la oreja (primera, segunda o cartílago) o en el ombligo para ese look de verano.','Plata 925',mm,'Oreja · Ombligo','Sin fin · Tipo piercing','Unidad',a,b,c,d,null,null,null,false,null);}
  function SF3(mm,a,b,c,d){return buildHTML('💫 Por qué el sin fin es el más versátil','🔄 Va en oreja, ombligo y nariz','Primera, segunda o cartílago en la oreja. O usala en el ombligo o la nariz.','Plata 925',mm,'Oreja · Ombligo · Nariz','Sin fin · Tipo piercing','Unidad',a,b,c,d,null,null,null,false,null);}
  function SF3B(mm,a,b,c,d){return buildHTML('💫 Por qué el sin fin es el más versátil','🔄 Va en oreja, nariz y ombligo','Oreja (primera, segunda o cartílago), nariz u ombligo.','Plata 925',mm,'Oreja · Nariz · Ombligo','Sin fin · Tipo piercing','Unidad',a,b,c,d,null,null,null,false,null);}
  function SF4(mm,a,b,c,d){return buildHTML('💫 Por qué el sin fin es el más versátil','🔄 Va en oreja, labio, ombligo y nariz','Oreja (primera, segunda o cartílago), labio, ombligo o nariz.','Plata 925',mm,'Oreja · Labio · Ombligo · Nariz','Sin fin · Tipo piercing','Unidad',a,b,c,d,null,null,null,false,null);}
  function SFE(mm,a,b,c,d){return buildHTML('💫 Por qué el sin fin es el más versátil','🔄 Ideal para apilar en la oreja','Primera, segunda, tercera perforación o cartílago. Fácil de poner, queda segura todo el día.','Plata 925',mm,'Oreja','Sin fin · Encaje','Unidad',a,b,c,d,null,null,null,false,null);}
  function HPAR(mm,a,b,c,d){return buildHTML('🤍 Por qué las huggie son las más elegidas','💫 Ideal para apilar y combinar','Primera, segunda o tercera perforación. El cierre huggie las mantiene firmes todo el día.','Plata 925',mm,'Oreja','Huggie','Par ✦ Dos argollas',a,b,c,d,null,null,null,false,null);}
  function BPAR(mm,a,b,c,d){return buildHTML('✨ Por qué el cierre bisagra es el favorito','💫 Fácil de poner, firme todo el día','El cierre bisagra es el más cómodo para usar a diario. Entra suave y quedan firmes.','Plata 925',mm,'Oreja','Bisagra','Par ✦ Dos argollas',a,b,c,d,null,null,null,false,null);}
  function SFEPAR(mm,a,b,c,d){return buildHTML('💫 Por qué el sin fin es el más versátil','🔄 Ideal para apilar en la oreja','Primera, segunda, tercera perforación o cartílago. Fácil de poner, quedan seguras todo el día.','Plata 925',mm,'Oreja','Sin fin · Encaje','Par ✦ Dos argollas',a,b,c,d,null,null,null,false,null);}

  function shiny(diametro,card2t,card2txt,precioPor,usarLabel,cuidarLabel,guardarLabel,tienenLabel,r1txt,r1nom,r2txt,r2nom){
    var sd = {card2t:card2t,card2txt:card2txt,usarLabel:usarLabel,cuidarLabel:cuidarLabel,guardarLabel:guardarLabel,tienenLabel:tienenLabel};
    return buildHTML('✨ Por qué la Shiny es la Shiny',null,null,'Plata 925',diametro,null,null,precioPor,r1txt,r1nom,r2txt,r2nom,'💎','La joyita que no te podés sacar.','Brillosa y versátil. Va con todo y es fácil de poner.<br>La más elegida por ustedes para brillar. ✨',true,sd);
  }

  function lisa(mm,dondeUsarla,precioPor,r1txt,r1nom,r2txt,r2nom){
    return buildHTML('✨ Por qué la Lisa es un básico que no puede faltar','💫 Va en cualquier perfo de la oreja','Primera, segunda, tercera o cartílago. Siempre queda bien y combina perfecto con otras joyitas.','Plata 925',mm,dondeUsarla,'Bisagra',precioPor,r1txt,r1nom,r2txt,r2nom,'✨','La argolla que combina con todo.','Lisa, clásica y de calidad real. Va en cualquier perforación de la oreja y se adapta a todos tus looks.',false,null);
  }

  descripciones["/productos/abby-10mm-10515-rz3dq/"]        = HO  ('10 mm',r1(0), n1(0), r2(0), n2(0));
  descripciones["/productos/ale-perla-13mm-10523-wtqy1/"]   = B   ('13 mm',r1(1), n1(1), r2(1), n2(1));
  descripciones["/productos/archi-white-8mm-09106/"]         = SF3 ('8 mm' ,r1(2), n1(2), r2(2), n2(2));
  descripciones["/productos/archie-white-10mm-07130/"]       = SF3 ('10 mm',r1(3), n1(3), r2(3), n2(3));
  descripciones["/productos/bali-tita-8mm-05149-ypzot/"]     = SF3 ('8 mm' ,r1(4), n1(4), r2(4), n2(4));
  descripciones["/productos/bali-titi-8mm-09975-dpplx/"]     = SF3 ('8 mm' ,r1(5), n1(5), r2(5), n2(5));
  descripciones["/productos/bear-11mm-10506-kc6jp/"]         = H   ('11 mm',r1(6), n1(6), r2(6), n2(6));
  descripciones["/productos/becky-10mm-10546-cipz7/"]        = B   ('10 mm',r1(7), n1(7), r2(7), n2(7));
  descripciones["/productos/big-bowli-12mm-10516-ss1t1/"]    = SFE ('12 mm',r1(8), n1(8), r2(8), n2(8));
  descripciones["/productos/bouwli-12mm-09104/"]             = SFE ('12 mm',r1(9), n1(9), r2(9), n2(9));
  descripciones["/productos/circle-strass-10mm-11343-3wcr7/"]= B   ('10 mm',r1(10),n1(10),r2(10),n2(10));
  descripciones["/productos/dafne-9mm-10539-5w1b3/"]         = H   ('9 mm' ,r1(11),n1(11),r2(11),n2(11));
  descripciones["/productos/dolly-13mm-05878-cwbwe/"]        = SFE ('13 mm',r1(12),n1(12),r2(12),n2(12));
  descripciones["/productos/emi-10mm-09964-n5p16/"]          = SF4 ('10 mm',r1(13),n1(13),r2(13),n2(13));
  descripciones["/productos/emi-8mm-00183/"]                 = SF4 ('8 mm' ,r1(14),n1(14),r2(14),n2(14));
  descripciones["/productos/eye-10mm-08492/"]                = B   ('10 mm',r1(15),n1(15),r2(15),n2(15));
  descripciones["/productos/farly-9mm-09960-9xkn4/"]         = SF1 ('9 mm' ,r1(16),n1(16),r2(16),n2(16));
  descripciones["/productos/florci-10mm-10540-6z2ef/"]       = H   ('10 mm',r1(17),n1(17),r2(17),n2(17));
  descripciones["/productos/ginebra-10mm-09144/"]            = SF4 ('10 mm',r1(18),n1(18),r2(18),n2(18));
  descripciones["/productos/ginebra-7mm-09142/"]             = SF4 ('7 mm' ,r1(19),n1(19),r2(19),n2(19));
  descripciones["/productos/ginebra-8mm-09970-qpmc9/"]       = SF4 ('8 mm' ,r1(20),n1(20),r2(20),n2(20));
  descripciones["/productos/giulia-11mm-10197-f5wvt/"]       = H   ('11 mm',r1(21),n1(21),r2(21),n2(21));
  descripciones["/productos/glitter-11mm-10509-mygns/"]      = H   ('11 mm',r1(22),n1(22),r2(22),n2(22));
  descripciones["/productos/heart-9mm-02826-9pf09/"]         = SF1 ('9 mm' ,r1(23),n1(23),r2(23),n2(23));
  descripciones["/productos/heart-strass-10mm-10529-7iy32/"] = B   ('10 mm',r1(24),n1(24),r2(24),n2(24));
  descripciones["/productos/heart-strass-12mm-05865/"]       = B   ('12 mm',r1(25),n1(25),r2(25),n2(25));
  descripciones["/productos/hexa-12mm-07136-ysfq7/"]         = SF2 ('12 mm',r1(26),n1(26),r2(26),n2(26));
  descripciones["/productos/hexa-9mm-05868-hiekf/"]          = SF2 ('9 mm' ,r1(27),n1(27),r2(27),n2(27));
  descripciones["/productos/joddie-10mm-10514-r5p9f/"]       = H   ('10 mm',r1(28),n1(28),r2(28),n2(28));
  descripciones["/productos/levy-14mm-10534-1pcod/"]         = H   ('14 mm',r1(29),n1(29),r2(29),n2(29));
  descripciones["/productos/lila-11mm-10557-aiokr/"]         = SF2 ('11 mm',r1(30),n1(30),r2(30),n2(30));
  descripciones["/productos/lila-9mm-10556-9pcim/"]          = SF4 ('9 mm' ,r1(31),n1(31),r2(31),n2(31));
  descripciones["/productos/loster-9mm-10519-vgprb/"]        = H   ('9 mm' ,r1(32),n1(32),r2(32),n2(32));
  descripciones["/productos/lua-10mm-10548-ec669/"]          = H   ('10 mm',r1(33),n1(33),r2(33),n2(33));
  descripciones["/productos/lua-13mm-10543-9unnb/"]          = H   ('13 mm',r1(34),n1(34),r2(34),n2(34));
  descripciones["/productos/lua-15mm-10547-db1p2/"]          = H   ('15 mm',r1(35),n1(35),r2(35),n2(35));
  descripciones["/productos/lucky-13mm-10522-y05qw/"]        = B   ('13 mm',r1(36),n1(36),r2(36),n2(36));
  descripciones["/productos/lulitas-10mm-09979-h8mfy/"]      = SF4 ('10 mm',r1(37),n1(37),r2(37),n2(37));
  descripciones["/productos/lulitas-8mm-09965-o90wn/"]       = SF3 ('8 mm' ,r1(38),n1(38),r2(38),n2(38));
  descripciones["/productos/lunita-10mm-10542-91ie7/"]       = H   ('10 mm',r1(39),n1(39),r2(39),n2(39));
  descripciones["/productos/maani-10mm-07119-qhfqc/"]        = H   ('10 mm',r1(40),n1(40),r2(40),n2(40));
  descripciones["/productos/maya-10mm-10535-2ia8f/"]         = B   ('10 mm',r1(41),n1(41),r2(41),n2(41));
  descripciones["/productos/mili-12mm-08259/"]               = SFE ('12 mm',r1(42),n1(42),r2(42),n2(42));
  descripciones["/productos/naty-13mm-10528-6jkjq/"]         = B   ('13 mm',r1(43),n1(43),r2(43),n2(43));
  descripciones["/productos/ovila-12mm-10512-p5979/"]        = B   ('12 mm',r1(44),n1(44),r2(44),n2(44));
  descripciones["/productos/pamira-12mm-10560-d6fz9/"]       = H   ('12 mm',r1(45),n1(45),r2(45),n2(45));
  descripciones["/productos/papry-10mm-09954-vbeqk/"]        = SF4 ('10 mm',r1(46),n1(46),r2(46),n2(46));
  descripciones["/productos/paris-9mm-10541-7xl9l/"]         = H   ('9 mm' ,r1(47),n1(47),r2(47),n2(47));
  descripciones["/productos/paulines-10mm-09959-96llw/"]     = SF3B('10 mm',r1(48),n1(48),r2(48),n2(48));
  descripciones["/productos/paulines-12mm-09456/"]           = SF2 ('12 mm',r1(49),n1(49),r2(49),n2(49));
  descripciones["/productos/pipi-8mm-09145/"]                = SF3 ('8 mm' ,r1(50),n1(50),r2(50),n2(50));
  descripciones["/productos/polly-10mm-10530-8eibt/"]        = B   ('10 mm',r1(51),n1(51),r2(51),n2(51));
  descripciones["/productos/print-stras-13mm-10527-5pld8/"]  = B   ('13 mm',r1(52),n1(52),r2(52),n2(52));
  descripciones["/productos/rayo-12mm-00342/"]               = B   ('12 mm',r1(53),n1(53),r2(53),n2(53));
  descripciones["/productos/rolly-10mm-10559-kv94q/"]        = SF2 ('10 mm',r1(54),n1(54),r2(54),n2(54));
  descripciones["/productos/sin-fin-10mm-05143/"]            = SF4 ('10 mm',r1(55),n1(55),r2(55),n2(55));
  descripciones["/productos/sin-fin-12mm-07129/"]            = SF2 ('12 mm',r1(56),n1(56),r2(56),n2(56));
  descripciones["/productos/sin-fin-6mm-10555-8ugki/"]       = SF1 ('6 mm' ,r1(57),n1(57),r2(57),n2(57));
  descripciones["/productos/star-strass-10mm-09564-k762z/"]  = B   ('10 mm',r1(58),n1(58),r2(58),n2(58));
  descripciones["/productos/stuart-11mm-08496-x1f8o/"]       = H   ('11 mm',r1(59),n1(59),r2(59),n2(59));
  descripciones["/productos/tatii-12mm-10532-aicmv/"]        = B   ('12 mm',r1(60),n1(60),r2(60),n2(60));
  descripciones["/productos/tini-11mm-10507-l582i/"]         = H   ('11 mm',r1(61),n1(61),r2(61),n2(61));
  descripciones["/productos/tini-13mm-10545-boz1j/"]         = H   ('13 mm',r1(62),n1(62),r2(62),n2(62));
  descripciones["/productos/trina-10mm-05716-66kvg/"]        = SF3 ('10 mm',r1(63),n1(63),r2(63),n2(63));
  descripciones["/productos/tura-8mm-10520-w9idw/"]          = SF1 ('8 mm' ,r1(64),n1(64),r2(64),n2(64));
  descripciones["/productos/turin-7mm-05161-c8z9n/"]         = SF1 ('7 mm' ,r1(65),n1(65),r2(65),n2(65));

  descripciones["/productos/aisha-10mm-04057-1ewsy/"]          = SF3 ('10 mm',r1(74),n1(74),r2(74),n2(74));
  descripciones["/productos/madi-10mm-03031-1ee7r/"]           = SF3 ('10 mm',r1(75),n1(75),r2(75),n2(75));
  descripciones["/productos/pauli-8mm-03838-1kcrr/"]           = SF3 ('8 mm' ,r1(76),n1(76),r2(76),n2(76));
  descripciones["/productos/baby-white-8mm-05174-t31ef/"]      = SF3 ('8 mm' ,r1(77),n1(77),r2(77),n2(77));
  descripciones["/productos/trixie-12mm-05876-1hqvk/"]         = SFE ('12 mm',r1(78),n1(78),r2(78),n2(78));
  descripciones["/productos/shiny-arcoiris-10mm-09957-qqqgf/"] = SF3 ('10 mm',r1(79),n1(79),r2(79),n2(79));
  descripciones["/productos/sin-fin-8mm-09981-3qu0v/"]         = SF4 ('8 mm' ,r1(80),n1(80),r2(80),n2(80));
  descripciones["/productos/farly-10mm-11672-76k0r/"]          = buildHTML('💫 Por qué el sin fin es el más versátil','🔄 Va en oreja, nariz y ombligo','Primera, segunda o cartílago en la oreja. O usala en el ombligo o la nariz.','Plata 925','10 mm','Oreja · Nariz · Ombligo','Sin fin · Encaje','Unidad',r1(81),n1(81),r2(81),n2(81),null,null,null,false,null);

  descripciones["/productos/coldplay-8mm-09970-1a9hp/"]        = SF3 ('8 mm' ,r1(85),n1(85),r2(85),n2(85));
  descripciones["/productos/cora-10mm-11682-tjtht/"]           = B   ('10 mm',r1(86),n1(86),r2(86),n2(86));
  descripciones["/productos/cira-10mm-11683-1gqy7/"]           = SF4 ('10 mm',r1(87),n1(87),r2(87),n2(87));
  descripciones["/productos/madi-8mm-11684-eyg6e/"]            = SF4 ('8 mm' ,r1(88),n1(88),r2(88),n2(88));
  descripciones["/productos/coldplay-10mm-11696-tpcmn/"]       = SF4 ('10 mm',r1(89),n1(89),r2(89),n2(89));
  descripciones["/productos/lara-9mm-05864-kt8xh/"]            = SF4 ('9 mm' ,r1(90),n1(90),r2(90),n2(90));
  descripciones["/productos/mini-lara-7mm-11699-xee8s/"]       = SF4 ('7 mm' ,r1(91),n1(91),r2(91),n2(91));
  descripciones["/productos/selene-8mm-11700-1gsv4/"]          = SF4 ('8 mm' ,r1(92),n1(92),r2(92),n2(92));
  descripciones["/productos/selene-10mm-11701-vn805/"]         = SF4 ('10 mm',r1(93),n1(93),r2(93),n2(93));
  descripciones["/productos/lidya-10mm-11702-15f1q/"]          = SF4 ('10 mm',r1(94),n1(94),r2(94),n2(94));
  descripciones["/productos/lulitas-8mm-09965-hudjf/"]         = SF3 ('8 mm' ,r1(95),n1(95),r2(95),n2(95));
  descripciones["/productos/zunna-10mm-11727-1ijft/"]          = SF4 ('10 mm',r1(96),n1(96),r2(96),n2(96));

  descripciones["/productos/shiny-lula-10mm-11693-rc3b5/"] = shiny('10 mm','💫 Primera, segunda... todas las opciones','La podés usar tanto en primera perforación como en segundas, armando un mix divino.','Unidad','Dónde usarla','Cómo cuidarla','Guardala','Lo que dicen las que ya la tienen','"La compré pensando en usarla solo en la oreja y terminé poniéndomela en la nariz también. Es hermosa y súper versátil."','Dani L.','"El brillo que tiene es una locura. La uso todos los días y sigue igual que el primer día. Ya se la recomendé a todas."','Pau G.');

  descripciones["/productos/par-bouwli-12mm-11163-141ai/"]   = SFEPAR('12 mm',r1(66),n1(66),r2(66),n2(66));
  descripciones["/productos/par-dolly-13mm-11224-y6e9z/"]    = SFEPAR('13 mm',r1(67),n1(67),r2(67),n2(67));
  descripciones["/productos/par-florci-10mm-11308-x6jqh/"]   = HPAR ('10 mm',r1(68),n1(68),r2(68),n2(68));
  descripciones["/productos/par-joddie-10mm-11307-1l3bd/"]   = HPAR ('10 mm',r1(69),n1(69),r2(69),n2(69));
  descripciones["/productos/par-lisa-12mm-11155-1c96y/"]     = BPAR ('12 mm',r1(70),n1(70),r2(70),n2(70));
  descripciones["/productos/par-lucky-13mm-11204-5dhfj/"]    = BPAR ('13 mm',r1(71),n1(71),r2(71),n2(71));
  descripciones["/productos/par-tini-11mm-11205-1brxt/"]     = HPAR ('11 mm',r1(72),n1(72),r2(72),n2(72));
  descripciones["/productos/par-paris-9mm-11157-13mkx/"]     = HPAR ('9 mm' ,r1(73),n1(73),r2(73),n2(73));

  descripciones["/productos/par-glitter-11mm-11612-1k2qt/"]  = HPAR ('11 mm',r1(82),n1(82),r2(82),n2(82));
  descripciones["/productos/par-lunita-10mm-11613-10516/"]   = HPAR ('10 mm',r1(83),n1(83),r2(83),n2(83));
  descripciones["/productos/par-lisas-14mm-09148-1r46x/"]    = BPAR ('14 mm',r1(84),n1(84),r2(84),n2(84));

  descripciones["/productos/shiny-10mm-05165/"] = shiny('10 mm','💫 Primera, segunda... todas las opciones','La podés usar tanto en primera perforación como en segundas, armando un mix divino.','Unidad','Dónde usarla','Cómo cuidarla','Guardala','Lo que dicen las que ya la tienen','"La uso en la oreja y en la nariz y siempre me preguntan dónde la compré. Hace meses que la tengo y sigue igual de brillosa."','Valentina R.','"Tengo piel súper sensible y nunca me molestó. Se la recomendé a mi hermana y también la compró. Un básico real."','Cami B.');
  descripciones["/productos/shiny-7mm-00334/"] = shiny('7 mm','💫 Para todos tus piercings','Lóbulo en 2da o 3era perfo, cartílago, nariz u ombligo. Una sola pieza, infinitas combinaciones.','Unidad','Dónde usarla','Cómo cuidarla','Guardala','Lo que dicen las que ya la tienen','"Chiquita pero se ve un montón. La tengo en la segunda perfo del lóbulo y combina con todo. Ya la pedí en la de 10mm también."','Sofi M.','"Me la puse en el cartílago y quedó perfecta. La plata es re linda, no se ve ordinaria para nada. La recomiendo 100%."','Juli R.');
  descripciones["/productos/shiny-8mm-09143/"] = shiny('8 mm','💫 Para todos tus piercings','Lóbulo en 2da o 3era perfo, cartílago, nariz u ombligo. Una sola pieza, infinitas combinaciones.','Unidad','Dónde usarla','Cómo cuidarla','Guardala','Lo que dicen las que ya la tienen','"El tamaño ideal. No es tan chiquita que pase desapercibida ni tan grande que se vea exagerada. La uso todos los días."','Caro V.','"La compré para usar en el cartílago y me enamoré. Ya tengo las tres: la 7, la 8 y la 10. No me arrepiento para nada."','Agus T.');
  descripciones["/productos/slim-shiny-10mm-11131-196fw/"] = shiny('10 mm','💫 Primera, segunda... todas las opciones','La podés usar tanto en primera perforación como en segundas, armando un mix divino.','Unidad','Dónde usarla','Cómo cuidarla','Guardala','Lo que dicen las que ya la tienen','"La tengo en las dos orejas y me la quiero comprar en otra medida también. Es re fina y elegante, no se ve recargada para nada."','Mica L.','"La compré para el ombligo y no me la saco más. El brillo que tiene es una locura, se ve increíble."','Romi P.');
  descripciones["/productos/par-shiny-7mm-11161-ud4ze/"] = shiny('7 mm','💰 El par sale más barato','Dos Shiny 7mm juntas salen menos que comprarlas por separado. La forma más inteligente de armar tu stack.','Par ✦ Más barato que por separado','Dónde usarlas','Cómo cuidarlas','Guardalas','Lo que dicen las que ya las tienen','"Las compré de par y re bien, me salió más barato que pedir una por una. Las uso en las dos orejas y quedan divinas juntas."','Flor M.','"Compré el par para tener una en cada oreja y no me arrepiento. Combinan perfectas y el precio por las dos es una ganga."','Male S.');
  descripciones["/productos/par-shiny-8mm-11160-72ar8/"] = shiny('8 mm','💰 El par sale más barato','Dos Shiny 8mm juntas salen menos que comprarlas por separado. La forma más inteligente de armar tu stack.','Par ✦ Más barato que por separado','Dónde usarlas','Cómo cuidarlas','Guardalas','Lo que dicen las que ya las tienen','"Las pedí de par y me llegaron hermosas. Las uso una en cada oreja y la gente siempre me pregunta dónde las compré."','Juli C.','"Compré el par porque me salía más barato y fue la mejor decisión. El tamaño 8mm es el justo, no muy grande ni muy chico."','Sofi A.');

  descripciones["/productos/lisa-10mm-00049/"] = lisa('10 mm','Oreja','Unidad','"La compré para la segunda perfo y es exactamente lo que buscaba. Simple, elegante y combina con todo lo que tengo."','Cami R.','"Me la puse en el cartílago y no me la saco más. Es re fina y discreta pero se nota. Un básico que toda colección necesita."','Lau M.');
  descripciones["/productos/lisa-12mm-00048/"] = lisa('12 mm','Oreja','Unidad','"La de 12mm es el tamaño perfecto para mí. Se ve con presencia pero sin ser exagerada. La uso todos los días."','Vale G.','"Estaba dudando entre la 10 y la 12 y elegí la más grande. No me arrepiento, se ve hermosa y es re cómoda."','Anto S.');

  function inyectar() {
    var path = window.location.pathname.replace(/\/$/, "") + "/";
    var html = descripciones[path];
    if (!html) return;
    var contenedor = document.querySelector("#product-description");
    if (contenedor && !contenedor.querySelector('.tribal-desc')) {
      contenedor.innerHTML = html;
    }
  }

  inyectar();
  setTimeout(inyectar, 1000);
  setTimeout(inyectar, 2500);

})();
