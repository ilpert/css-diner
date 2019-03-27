var levels = [
  {
    helpTitle : "Selezionare gli elementi in base al loro tipo",
    selectorName : "Selettore del tipo",
    doThis : "Seleziona i piatti",
    selector : "plate",
    syntax : "A",
    help : "Seleziona tutti gli elementi del tipo <strong>A</strong>. Il tipo si riferisce al tipo di tag, quindi <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> sono tutti diversi tipi di elementi.",
    examples : [
      '<strong>div</strong> seleziona tutti gli elementi <tag>div</tag> .',
      '<strong>p</strong> seleziona tutti gli elementi  <tag>p</tag> .',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Seleziona i box bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Selezionare gli elementi in base al loro tipo",
    selectorName : "Selettore del tipo",
    help : "Seleziona tutti gli elementi del tipo <strong>A</strong>. Il tipo si riferisce al tipo di tag, quindi <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> sono tutti diversi tipi di elementi.",
    examples : [
      '<strong>div</strong> seleziona tutti gli elementi <tag>div</tag>.',
      '<strong>p</strong> seleziona tutti gli elementi<tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Selezionare il piatto fancy",
    selector : "#fancy",
    selectorName: "Selettore ID ",
    helpTitle: "Seleziona l'elemento con un ID",
    syntax: "#id",
    help : "Seleziona l'elemento con uno specifico  <strong>ID</strong>. È inoltre possibile combinare il selettore ID con il selettore del tipo.",
    examples : [
      '<strong>#cool</strong> seleziona ogni elemento con un <strong>id="cool"</strong>',
      '<strong>ul#long</strong> seleziona <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Selezionare un elemento all'interno di un altro elemento",
    selectorName : "Selettore Discendente",
    doThis : "Selezionare la mela sul piatto",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleziona tutti <strong>B</strong> all'interno di <strong>A</strong>. <strong>B</strong> si chiama discendente perché si trova all'interno di un altro elemento.",
    examples : [
      "<strong>p&nbsp;&nbsp;strong</strong> seleziona tutti gli <tag>strong</tag> che sono all'interno di <tag>p</tag>",
      "<strong>#fancy&nbsp;&nbsp;span</strong> seleziona ogni elemento <tag>span</tag> che si trova all'interno dell'elemento con <strong>id='fancy'</strong>",
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Seleziona il cetriolo nel piatto fancy",
    selector : "#fancy pickle",
    helpTitle: "Combina gli ID e i Selettori discendenti",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'È possibile combinare qualsiasi selettore con il selettore discendente.',
    examples : [
      "<strong>#cool&nbsp;span</strong> seleziona tutti gli elementi <tag>span</tag> che si trovano all'interno di elementi con <strong>id='cool'</strong>."
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Seleziona le mele piccole",
    selector : ".small",
    selectorName: "Selettore di classe",
    helpTitle: "Selezionare gli elementi in base alla loro classe",
    syntax: ".nomeclasse",
    help : "Il selettore di classe seleziona tutti gli elementi con quell'attributo di classe. Gli elementi possono avere un solo ID, ma molte classi.",
    examples : [
    '<strong>.neato</strong> seleziona tutti gli elementi con <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Selezionare le piccole arance",
    selector : "orange.small",
    helpTitle: "Combina i selettori di classe",
    syntax: "A.nomeClasse",
    help : "È possibile combinare il selettore della classe con altri selettori, come il selettore del tipo.",
    examples : [
      '<strong>ul.important</strong> seleziona tutti gli <tag>ul</tag> che hanno <strong>class="important"</strong>',
      '<strong>#big.wide</strong> seleziona tutti gli elementi con <strong>id="big"</strong>che hanno anche <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Selezionare le piccole arance nei bentos",
    selector : "bento orange.small",
    syntax: "Ora tocca a te!",
    helpTitle: "Ce la puoi fare...",
    help : 'Combina quello che hai imparato negli ultimi livelli per risolvere questo!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Seleziona tutti i piatti e i bento",
    selector : "plate,bento",
    selectorName : "Combinatore di virgola",
    helpTitle: "Combina, selettori, con..... virgole!",
    syntax : "A, B",
    help : 'Con la virgola riusciamo a selezionare tutti gli elementi <strong>A</strong> e <strong>B</strong>. È possibile combinare qualsiasi selettore in questo modo, ed è possibile specificare più di due elementi.',
    examples: [
    '<strong>p, .fun</strong> seleziona tutti gli <tag>p</tag> così come tutti gli elementi con  <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> seleziona tutti elementi <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Seleziona tutto!",
    selector : "*",
    selectorName:  "Il selettore universale",
    helpTitle: "Puoi selezionare tutto!",
    syntax : "*",
    help : 'È possibile selezionare tutti gli elementi con il selettore universale! ',
    examples : [
      "<strong>p *</strong> seleziona tutti gli elementi all'interno dell'elemento <tag>p</tag>.",
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Seleziona tutto ciò che si trova sul piatto",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combina il selettore universale",
    help : "Seleziona tutti gli elementi all'interno di <strong>A</strong>.",
    examples : [
      "<strong>p *</strong> seleziona ogni elemento all'interno di tutti gli elementi <tag>p</tag> .",
      "<strong>ul.fancy *</strong> seleziona ogni elemento all'interno di tutti gli elementi<tag>ul class='fancy'</tag> ."
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Seleziona ogni mela che si trova accanto a un piatto",
    selector : "plate + apple",
    helpTitle: "Selezionare un elemento che segue direttamente un altro elemento",
    selectorName: "Selettore dei fratelli vicini",
    syntax : "A + B",
    help : "Seleziona tutti gli elementi <strong>B</strong> che seguono direttamente <strong>A</strong>. Gli elementi che si susseguono sono chiamati fratelli (sibling). Sono sullo stesso livello, o profondità. <br/><br/>Nella marcatura HTML per questo livello, gli elementi che hanno la stessa rientranza sono fratelli.",
    examples : [
      "<strong>p + .intro</strong> seleziona ogni elemento con <strong>class='intro'</strong> che segue direttamente un <tag>p</tag>.",
      "<strong>div + a</strong> seleziona ogni elemento <tag>a</tag> che segue direttamente un <tag>div</tag>."
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Selettore generale dei fratelli",
    helpTitle: "Selezionare gli elementi che seguono un altro elemento",
    syntax: "A ~ B",
    doThis : "Selezionare i cetrioli accanto al bento",
    selector : "bento ~ pickle",
    help : "È possibile selezionare tutti i fratelli di un elemento che lo seguono. Questo è come il Selettore Adiacente (A + B) tranne che ottiene tutti i seguenti elementi invece di uno.",
    examples : [
      '<strong>A ~ B</strong> seleziona tutte le <strong>B</strong> che seguono una <strong>A</strong>.'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Selettore figli (child)",
    syntax: "A > B&nbsp;",
    doThis : "Selezionare la mela direttamente su un piatto",
    selector : "plate > apple",
    helpTitle: "Selezionare i figli diretti di un elemento",
    help : "È possibile selezionare elementi che sono figli diretti di altri elementi. Un elemento figlio è qualsiasi elemento che è annidato direttamente in un altro elemento. <br><br><br>Elementi che sono annidati più in profondità di quelli che sono chiamati elementi discendenti.",
    examples : [
      '<strong>A > B</strong> seleziona tutti gli <strong>B</strong> che sono bambini diretti <strong>A</strong>.'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Pseudo-selettore first-child",
    helpTitle: "Selezionare un primo elemento figlio all'interno di un altro elemento",
    doThis : "Selezionare l'arancia superiore",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "È possibile selezionare il primo elemento figlio. Un elemento figlio è qualsiasi elemento che è direttamente annidato in un altro elemento. È possibile combinare questo pseudo-selettore con altri selettori.",
    examples : [
      '<strong>:first-child</strong> seleziona tutti i primi elementi del figlio.',
      '<strong>p:first-child</strong> seleziona tutti i figli di<tag>p</tag> ',
      '<strong>div p:first-child</strong> seleziona tutti gli elementi <tag>p</tag> del primo figlio che si trovano in una <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Pseudo-selettore only-child",
    helpTitle: "Selezionare l'unico elemento all'interno di un altro.",
    doThis : "Selezionare la mela e il cetriolo sui piatti",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Identifica un elemento il cui oggetto padre non ha altri figli",
    examples : [
      "<strong>span:only-child</strong> seleziona l'elemento <tag>span</tag> che è l'unico figlio presente.",
      "<strong>ul li:only-child</strong> seleziona solo l'elemento <tag>li</tag>che si trova in <tag>ul</tag>."
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Pseudo-selettore last-child",
    helpTitle: "Selezionare l'ultimo elemento all'interno di un altro elemento",
    doThis : "Selezionare la mela piccola e il cetriolo",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "È possibile utilizzare questo selettore per selezionare un elemento che è l'ultimo elemento figlio all'interno di un altro elemento. <br><br><br>Pro Tip &rarr; Nei casi in cui c'è un solo elemento, quell'elemento conta come primo figlio, unico figlio e ultimo figlio!",
    examples : [
      '<strong>:last-child</strong> seleziona tutti gli elementi ultimo-figlio.',
      "<strong>span:last-child</strong> seleziona tutti gli ultimi figli dell'elemento <tag>span</tag> .",
      "<strong>ul li:last-child</strong> seleziona gli ultimi elementi <tag>li</tag> all'interno di qualsiasi <tag>ul</tag>."
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Pseudo-selettore Nth Child",
    helpTitle: "Selezionare un elemento in base al suo ordine in un altro elemento",
    doThis : "Seleziona il 3 piatto",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Seleziona l'<strong>nth</strong> (Es: 1°, 3°, 12°, 12° ecc.) elemento figlio in un altro elemento.",
    examples : [
      "<strong>:nth-child(8)</strong> seleziona ogni elemento che è  l'8th figlio di un'altro elemento.",
      '<strong>div p:nth-child(2)</strong> seleziona il secondo <strong>p</strong> in ogni <strong>div</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Selettore ultimo figlio Nth",
    helpTitle: "Seleziona un elemento in base al suo ordine in un altro elemento, contando all'indietro",
    doThis : "Seleziona il primo bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Seleziona i figli dal fondo del genitore. Questo è come nth-child, ma contando da dietro!",
    examples : [
      '<strong>:nth-last-child(2)</strong> seleziona tutti gli elementi del penultimo figlio.'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "Primo selettore del tipo",
    helpTitle: "Selezionare il primo elemento di un tipo specifico",
    doThis : "Seleziona la prima mela",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Seleziona il primo elemento di quel tipo all'interno di un altro elemento.",
    examples : [
      '<strong>span:first-of-type</strong> seleziona il primo <tag>span</tag> in ogni elemento.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Nth del selettori tipo",
    doThis: "Seleziona tutti i piatti pari",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Seleziona un elemento specifico in base al suo tipo e ordine in un altro elemento - o anche in casi dispari di quell'elemento.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> seleziona la seconda istanza di un div.',
      '<strong>.example:nth-of-type(odd)</strong> seleziona tutte le istanze dispari di una classe di esempio.'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Nth-of-type Selettore con Formula",
    doThis: "Selezionare ogni 2° piatto, a partire dal 3°.",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "La formula dell'nth-of-type seleziona ogni ennesimo elemento, iniziando il conteggio in un'istanza specifica di quell'elemento.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> seleziona ogni 6° istanza di uno <tag>span</tag>, a partire dalla (e includendo) la seconda istanza.'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Selettore Only of Type",
    helpTitle: "Selezionare gli elementi che sono gli unici del loro tipo all'interno del loro elemento padre",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Selezionare la mela sul piatto centrale",
    help : "Seleziona l'unico elemento del suo tipo all'interno di un altro elemento.",
    examples : [
      "<strong>p span:only-of-type</strong> seleziona uno <tag>span</tag> all'interno di qualsiasi <tag>p</tag> se è l'unico <tag>span</tag> presente."
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Selettore Last of Type ",
    helpTitle: "Seleziona l'ultimo elemento di un tipo specifico",
    doThis : "Selezionare l'ultima mela e arancia",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Seleziona l'ultimo elemento di quel TIPO all'interno di un altro elemento. Ricorda TIPO si riferisce al TIPO di tag, quindi <tag>p</tag> e <tag>span</tag> sono TIPI diversi.",
    examples : [
      "<strong>div:last-of-type</strong> seleziona l'ultimo <tag>div</tag> in ogni elemento.",
      "<strong>p span:last-of-type</strong> seleziona l'ultimo <tag>span</tag> in ogni <tag>p</tag>."
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Selettore Empty",
    helpTitle: "Seleziona gli elementi che non hanno figli",
    doThis : "Selezionare i bento vuoti",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Seleziona gli elementi che non hanno altri elementi al loro interno.",
    examples : [
      '<strong>div:empty</strong> seleziona tutti gli elementi vuoti <tag>div</tag>.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "Pseudo-classe Negazione",
    helpTitle: "Selezionare tutti gli elementi che non corrispondono al selettore di negazione",
    doThis : "Seleziona le mele grandi",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Puoi usarlo per selezionare tutti gli elementi che non corrispondono al selettore <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> seleziona tutti gli elementi che non hanno <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> seleziona ogni <tag>div</tag> che non è il primo figlio.',
      '<strong>:not(.big, .medium)</strong> seleziona tutti gli elementi che non hanno <strong>class="big"</strong> o <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Selettore Attributo",
    helpTitle: "Selezionare tutti gli elementi che hanno un attributo specifico",
    doThis : "Seleziona gli articoli per qualcuno",
    selector : "[for]",
    syntax: "[attribute]",
    help : "Gli attributi appaiono all'interno del tag di apertura di un elemento, come questo: <tag>span attributo='valore'</tag>. Un attributo non sempre ha un valore, può essere vuoto!",
    examples : [
      '<strong>a[href]</strong> seleziona tutti gli elementi <tag>a</tag> che hanno un attributo <strong>href="anything"</strong>.',
      '<strong>[type]</strong> seleziona tutti gli elementi che hanno un attributo <strong>type="anything"</strong>.'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "Selettore Attributo",
    helpTitle: "Selezionare tutti gli elementi che hanno un attributo specifico",
    doThis : "Selezionare i piatti per qualcuno",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "Combina il selettore degli attributi con un altro selettore (come il selettore del nome del tag) aggiungendolo alla fine.",
    examples : [
      '<strong>[value]</strong> seleziona tutti gli elementi che hanno un attributo <strong>value="anything"</strong>.',
      '<strong>a[href]</strong> seleziona tutti gli elementi <tag>a</tag> che hanno un attributo <strong>href="anything"</strong>.',
      "<strong>input[disabled]</strong> seleziona tutti gli elementi <tag>input</tag> con l'attributo <strong>disabled</strong>."
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Selettore del valore dell'attributo",
    helpTitle: "Selezionare tutti gli elementi che hanno un valore specifico dell'attributo",
    doThis : "Selezionare il piatto di Vitaly",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "I selettori di attributi sono sensibili alle maiuscole e ogni carattere deve corrispondere esattamente.",
    examples : [
      '<strong>input[type="checkbox"]</strong> seleziona tutti gli elementi di input delle checkbox'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "L'attributo inizia con il selettore",
    helpTitle: "Selezionare tutti gli elementi con un valore dell'attributo che inizia con caratteri specifici",
    doThis : "Selezionare le voci per i nomi che iniziano con 'Sa'.",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> seleziona gli elementi con classe <strong>toy</strong> e sia <strong>category="Swimwear</strong> or <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "L'attributo termina con il selettore",
    helpTitle: "Selezionare tutti gli elementi con un valore dell'attributo che termina con caratteri specifici",
    doThis : "Selezionare le voci per i nomi che terminano con 'ato'.",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> seleziona tutte le immagini con un file<strong>.jpg</strong> image.',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Selettore di caratteri jolly degli attributi",
    helpTitle: "Selezionare tutti gli elementi con un valore dell'attributo che contiene caratteri specifici ovunque",
    syntax: '[attribute*="value"]',
    doThis : "Selezionare i pasti per i nomi che contengono 'obb'.",
    selector : '[for*="obb"]',
    help : "Un selettore utile se è possibile identificare un modello comune in base all'attributo, come <strong>class</strong>, <strong>href</strong> o <strong>src</strong> .",
    examples : [
      "<strong>img[src*='/thumbnails/']</strong> seleziona tutti gli elementi dell'immagine che mostrano immagini dalla cartella 'thumbnails'.",
      '<strong>[class*="heading"]</strong> seleziona tutti gli elementi con "heading" nella loro classe, come <strong>class="main-heading"</strong> e <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
