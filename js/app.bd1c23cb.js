(function(e){function a(a){for(var n,s,r=a[0],c=a[1],u=a[2],p=0,m=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(t,s)&&t[s]&&m.push(t[s][0]),t[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(a);while(m.length)m.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var e,a=0;a<o.length;a++){for(var i=o[a],n=!0,r=1;r<i.length;r++){var c=i[r];0!==t[c]&&(n=!1)}n&&(o.splice(a--,1),e=s(s.s=i[0]))}return e}var n={},t={app:0},o=[];function s(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,a,i){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(i,n,function(a){return e[a]}.bind(null,n));return i},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/kwestionariusz-rol-zespolowych/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var u=0;u<r.length;u++)a(r[u]);var l=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"56d7":function(e,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),t=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"mx-4",attrs:{id:"app"}},[i("b-card",{staticStyle:{"max-width":"1000px",margin:"auto"},attrs:{title:"Kwestionariusz ról zespołowych","sub-title":"Na użytek pracy licencjackiej"}},[e._l(e.sections,(function(a,n){return i("div",{key:n},[i("Section",{attrs:{title:a.title,subtitle:a.subtitle,points:a.points,questions:a.questions,values:a.values},on:{valueChange:function(a){return e.handleSectionValueChange(n,a)},reset:function(a){return e.handleSectionReset(n)}}}),e.sections.length-1!=n?i("hr"):e._e()],1)})),i("hr"),i("footer",{staticClass:"d-flex flex-column align-items-center"},[i("b-input-group",{attrs:{prepend:"Twoje imię:"}},[i("b-form-input",{model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),i("b-input-group-append",[i("b-button",{attrs:{variant:"success"},on:{click:e.saveResults}},[i("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"paper-plane"}}),e._v(" Wyślij ")],1)],1)],1)],1)],2)],1)},o=[],s=(i("cb29"),i("d81d"),i("b0c0"),i("d3b7"),i("ddb0"),i("96cf"),i("1da1")),r=i("5530"),c=i("b85c"),u=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("form",{staticStyle:{"text-align":"left"}},[i("h2",[e._v(e._s(e.title))]),i("h4",[e._v(e._s(e.subtitle))]),i("p",[e._v(" Do przydziału: "),i("b",[e._v(e._s(e.remaining))]),e._v(" punktów ")]),i("b-button",{staticClass:"mb-2",attrs:{variant:"primary"},on:{click:e.reset}},[i("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"redo",size:"sm"}}),e._v(" Reset ")],1),e._l(e.questions,(function(a,n){return i("Option",{key:n,attrs:{letter:e.letters[n],text:a,max:10,left:e.remaining,value:e.values[n]},on:{change:function(a){return e.handleInputChange(n,a)}}})}))],2)},l=[],p=(i("13d5"),i("a9e3"),function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"mb-4"},[i("label",{staticClass:"mb-0"},[i("b",[e._v(e._s(e.letter))]),e._v(" "+e._s(e.text))]),i("div",{staticClass:"d-flex align-items-baseline"},[i("input",{ref:"input",staticClass:"mr-3 custom-range",attrs:{type:"range",min:"0",max:e.max},domProps:{value:e.value},on:{input:e.updateValue}}),i("div",{staticClass:"mt-2"},[i("b",[e._v(e._s(e.value))])])])])}),m=[],d={props:{letter:String,text:String,max:Number,value:Number,left:Number},methods:{updateValue:function(){var e=this,a=Number(this.$refs.input.value);if(this.left>0||a<this.value)a=a<=this.value+this.left?a:this.value+this.left,this.$emit("change",a);else{var i=this.value;this.$nextTick((function(){e.$refs.input.value=i}))}}}},w=d,z=i("2877"),y=Object(z["a"])(w,p,m,!1,null,null,null),b=y.exports,j={methods:{reset:function(){this.$emit("reset")},handleInputChange:function(e,a){this.$emit("valueChange",{i:e,data:a})}},components:{Option:b},props:{title:String,subtitle:String,points:Number,questions:Array,values:Array},computed:{remaining:function(){var e=this.values.reduce((function(e,a){return e+a}),0);return this.points-e},letters:function(){for(var e=[],a=0;a<this.questions.length;a++){var i="A".charCodeAt(0)+a;e.push(String.fromCharCode(i))}return e}}},g=j,k=Object(z["a"])(g,u,l,!1,null,null,null),f=k.exports,h=[{title:"Część I",subtitle:"Sądzę, że osobiście wnoszę do grupy...",points:10,questions:["Wydaje mi się, że szybko dostrzegam i umiem wykorzystać nowe możliwości","Mogę dobrze pracować z różnymi ludźmi",'"Produkowanie" pomysłów to moja naturalna zdolność','Moja siła tkwi w tym, że potrafię z ludzi "wyciągnąć" to, co mają w sobie najlepszego, aby przyczynili się do osiągnięcia celów i zadań grupowych',"Moja główna umiejętność polega na doprowadzaniu do końca i wiąże się z efektywnością","Jestem w stanie przez jakiś czas zaakceptować niepopularność mojej osoby, jeśli prowadzi do wartościowych wyników","Zwykle wyczuwam, co jest realistyczne i prawdopodobne, jeśli chodzi o osiągnięcie sukcesu","Zwykle mogę zaproponować jakieś alternatywne wyjście bez uprzedzeń i niechęci"]},{title:"Część II",subtitle:"Jeśli mam jakieś niedociągnięcia w pracy grupowej to dlatego, że...",points:10,questions:["Nie mogę się uspokoić, dopóki narada nie jest uporządkowana, kontrolowana i ogólnie dobrze prowadzona","Mam skłonność do bycia wspaniałomyślnym dla tych, których przekonujące pomysły nie zostały odpowiednio przemyślane","Mam skłonność do gadulstwa, gdy grupa rozpracowuje nowe pomysły","Mój chłodny ogląd spraw utrudnia mi przyłączenie się do gotowości i entuzjazmu kolegów","Czasami jestem spostrzegany jako wywierający nadmierny nacisk i autorytatywny wpływ, jeśli coś musi zostać rzeczywiście zrobione","Trudno mi kierować „na pierwszej linii”, gdyż czuję się zbyt odpowiedzialny za atmosferę grupową","Mam skłonność do rozmyślania o tym, co w danej chwili wpada mi do głowy, przez co tracę kontakt z tym, co się dzieje","Koledzy widzą mnie jako niepotrzebnie przejmującego się szczegółami i możliwością, że sprawy mogą się źle ułożyć"]},{title:"Część III",subtitle:"Gdy jestem wciągnięty razem z innymi w przygotowanie projektu...",points:10,questions:["Mam skłonność do wywierania wpływu na ludzi, lecz bez wywierania na nich presji","Moja czujność pozwala zapobiegać wielu pomyłkom i błędom","Jestem gotów kłaść nacisk na działanie, aby upewnić się, że narada nie jest stratą czasu lub, że prowadzi do utracenia z widoku głównego celu","Zwykle można na mnie polegać, że wymyślę coś oryginalnego","Zawsze jestem gotów uczynić dobrą sugestię przedmiotem zainteresowania całej grupy","Zawsze poszukuję ostatnich nowinek, nowych odkryć i wyników badań na określony temat","Mam przekonanie, że moja umiejętność wydawania sądu może pomóc w podjęciu odpowiednich decyzji","Moją specjalnością jest zorganizowanie najbardziej znaczącej części pracy"]},{title:"Część IV",subtitle:"Moją charakterystyczną cechą w pracy grupowej jest...",points:10,questions:["Rzeczywiście interesuję się bliższym poznaniem moich kolegów","Nie mam oporów przed przeciwstawianiem się zdaniu większości","Zwykle potrafię przyjąć taką linię argumentacji, aby obalić błędny punkt widzenia","Sądzę, że mam szczególny talent do wprowadzania pomysłów w życie, gdy plan ma być zastosowany","Mam skłonność do unikania tego, co oczywiste i do zaskakiwania czymś niespodziewanym","Doprowadzam to, czego się podejmę do perfekcji","Jestem gotów do nawiązywania i wykorzystywania kontaktów poza grupowych, jeśli jest to potrzebne","Nawet jeśli interesuje mnie wiele aspektów sprawy, nie mam problemów z podjęciem decyzji co do wyboru rozwiązania"]},{title:"Część V",subtitle:"Czerpię satysfakcję z pracy, gdyż...",points:10,questions:["Cieszy mnie analizowanie sytuacji i rozważanie możliwości wyboru","Interesuje mnie znalezienie praktycznych rozwiązań problemów","Lubię mieć przekonanie, że sprzyjam kształtowaniu dobrych kontaktów międzyludzkich w pracy","Lubię mieć duży wpływ na decyzje","Cieszę się z kontaktów z ludźmi, którzy mają coś nowego do zaoferowania","Jestem w stanie doprowadzić do zgody w ważnych dla pracy sprawach","Wczuwam się w moją część zadania, jeśli pragnę poświęcić zadaniu całą swoją uwagę","Lubię znaleźć taki obszar, który pobudza moja wyobraźnię"]},{title:"Część VI",subtitle:"Jeśli nagle otrzymuję trudne zadanie do wykonania w ograniczonym czasie i wobec nieznanych mi osób...",points:10,questions:["Mam ochotę zaszyć się w kącie, aby wymyślić sposób na wyjście z impasu","Byłbym gotów do współpracy z osobą, która wykazała najbardziej pozytywne nastawienie","Znalazłbym sposób na zmniejszenie skali zadania prze ustalenie, co mogłyby zrobić poszczególne jednostk","Moje naturalne wyczucie spraw pilnych pozwoli na postępowanie zgodnie z planem","Z pewnością zachowam spokój i zdolność do trzeźwego osądu","Mimo nacisków zachowam stałość celu","Byłbym przygotowany do przejęcia konstruktywnego kierownictwa, jeśli stwierdziłbym, że grupa nie robi postępu","Zainicjowałbym dyskusję w celu stymulowania nowych pomysłów, rozwiązań"]},{title:"Część VII",subtitle:"W odniesieniu do problemów, za które jestem w grupie odpowiedzialny..",points:10,questions:["Mam skłonność do ujawniania niezadowolenia wobec tych, którzy moim zdaniem przeszkadzają w osiąganiu postępów","Inni mogą mnie krytykować za to, że jestem analityczny i niedostatecznie opieram się na intuicji","Moje pragnienie, aby praca została starannie wykonana, może wstrzymywać pójście do przodu","Mam skłonność do nudzenia się i oczekuję, że inni będą mnie stymulować i „zapalać”","Trudno mi rozpocząć, jeśli cele nie są dla mnie jasne","Czasami nie jestem tak efektywny, jak bym chciał, jeśli chodzi o wyjaśnienie złożonych problemów, jakie przede mną stoją","Mam świadomość, że wymagam od innych rzeczy, których sam nie mogę zrobić","Waham się, gdy należałoby przeforsować mój punkt widzenia, gdy mam do czynienia z jawną opozycją"]}],v=h,_=i("59ca"),x=(i("e71f"),{apiKey:"AIzaSyBSg0iEvkxnmw5MiQOg_YUmRRAFZG9XWNY",authDomain:"team-roles-questionnaire.firebaseapp.com",databaseURL:"https://team-roles-questionnaire.firebaseio.com",projectId:"team-roles-questionnaire",storageBucket:"team-roles-questionnaire.appspot.com",messagingSenderId:"213655372843",appId:"1:213655372843:web:98fbec345be55d9c14966e"});_["initializeApp"](x);var C=_["firestore"](),M=C.collection("questionnaires"),O={name:"App",components:{Section:f},data:function(){var e,a=[],i=Object(c["a"])(v);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.values=new Array(n.questions.length).fill(0),a.push(n)}}catch(t){i.e(t)}finally{i.f()}return{sections:a,name:""}},methods:{handleSectionValueChange:function(e,a){var i=a.i,n=a.data;this.sections=this.sections.map((function(a,t){return t!==e?a:Object(r["a"])(Object(r["a"])({},a),{},{values:a.values.map((function(e,a){return a!==i?e:n}))})}))},handleSectionReset:function(e){this.sections=this.sections.map((function(a,i){return i!==e?a:Object(r["a"])(Object(r["a"])({},a),{},{values:a.values.map((function(){return 0}))})}))},saveResults:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,M.add({data:e.sections,date:new Date,name:e.name});case 3:e.$bvModal.msgBoxOk("Kwestionariusz został zapisany"),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),e.$bvModal.msgBoxOk("Wystąpił błąd: ".concat(a.t0));case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()}}},S=O,q=(i("5c0b"),Object(z["a"])(S,t,o,!1,null,null,null)),I=q.exports,$=i("5f5b"),R=(i("f9e3"),i("2dd8"),i("ecee")),N=i("ad3d"),Z=i("c074");R["c"].add(Z["a"],Z["b"]),n["default"].component("font-awesome-icon",N["a"]),n["default"].config.productionTip=!1,n["default"].use($["a"]),new n["default"]({render:function(e){return e(I)}}).$mount("#app")},"5c0b":function(e,a,i){"use strict";var n=i("9c0c"),t=i.n(n);t.a},"9c0c":function(e,a,i){}});
//# sourceMappingURL=app.bd1c23cb.js.map