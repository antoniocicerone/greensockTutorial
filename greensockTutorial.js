// SELETTORI JAVASCRIPT

// seleziona elemento per id
var obj1 = document.getElementById('ob1');

//seleiona elemento per tag
var h1 = document.getElementsByTagName('h1');

//seleziona elemento per classe
var intro = document.getElementByClassName('intro');

//seleziona per il primo figlio della classe
var firstItem = document.getElementByClassName('list')[0].firstElementChild;

//seleziona per il secondo figlio della classe
var secondItem = document.getElementByClassName('list')[0].children[1];

//seleziona l'ultimo figlio della classe
var lastItem = document.getElementByClassName('list')[0].lastElementChild;

// END SELETTORI


// ANIMAZIONI tweenlite + cssplugin(con anim css) * TweenMax nessun plugin
//1 è un secondo .to dalla posizione iniziale a
TweenLite.to(element, 1, {width: 100});
//posizione
TweenLite.to(element, 1, {x: 100});

//da questa posizione a quella del css
TweenLite.from(element, 1, {x: 100});

//dalla prima alla seconda posizione
TweenLite.fromTo(element, 1, {x: 100}, {x: 300});

//posizione veloce
TweenLite.set(element, {x: 100});

//delay ritardo, autoAlpha controlla dov essere opacità
TweenLite.from(element, 1, {autoAlpha: 0, delay: 1});

//tipo animaz ease: plugin EasePack.js
//link per i vari effetti http://www.greensock.com/ease-visualizer
TweenLite.from(element, 1, {x: 100, ease:Power1.easeIn});

//SE USI TWEENMAX NON SERVONO I PLUGIN EASE E CSS


//eventi 
TweenLite.from(element, 1, {
	x: 100,
	ease:Power1.easeIn,
	onStart: onStart,
	onUpdate: onUpdate,
	onComplete: onComplete
});

function onStart() {
	console.log('inizio');	
}

function onUpdate() {
	console.log('in progresso');	
}

function onUpdate() {	
	console.log('fine');	
}

// fine eventi


// ANIMAZIONE DI MOLTI ELEMENTI TimelineLite

var obj1 = document.getElementById('ob1'),
    obj2 = document.getElementById('ob2'),
    obj3 = document.getElementById('ob3'),
    bt = document.getElementByClassName('bt'),
    bt2 = document.getElementByClassName('bt2'),
    tl = new new TimelineLite();

tl
	.from(obj1, 0.3, {x: 100, autoAlpha:0, ease:Power1.easeIn})
	.from(obj2, 0.3, {x: 100, autoAlpha:0, ease:Power1.easeIn}, '+=1')
	.from(obj3, 0.3, {x: 100, autoAlpha:0, ease:Power1.easeIn}, 3)
	.staggerTo(bt, 0.3, {x: -20, autoAlpha:0, ease:Power1.easeIn}, 0.1)
	.staggerFrom(bt2, 1, {cycle: {
			x:[50, -50],
			scale: [2, 0.5]
		}, autoAlpha:0, ease:Power1.easeIn}, 0.1);
	

//.staggerTo animazione multipla a bt N.B vale anche .staggerFrom e staggerFromTo
// con cycle si alternano tra certi valori

//3 è il rirardo, vedi +=1


// END ANIMAZIONE DI MOLTI ELEMENTI

FINO A LEZIONE 8 DI 11





