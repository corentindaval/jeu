const bdepart=document.getElementById("demarer");
const zjeu=document.getElementById("zonejeu");
const bvalider=document.getElementById("validation");
const saisie=document.getElementById("zsaisie");
const aff=document.getElementById("reponse");
let nbvies=0;
let nbmystere=0;
let vieaff=0;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function nvpartie(){
	nbmystere=getRandomInt(101);
	nbvies=5;
	bdepart.style.opacity=0;
	zjeu.style.opacity=1;
	aff.innerHTML="proposer un nombre de 0 a 100";
	saisie.value=""; 
}

function jeu(){
	let proposition="";
	proposition=saisie.value;
	if(proposition==""){
		aff.innerHTML="veuiller entrer un nombre";
	}else{
		if(nbvies>0){
			if(proposition>nbmystere){
				nbvies=nbvies-1;
				vieaff=nbvies+1;
				aff.innerHTML="c'est moins. il vous reste "+vieaff+" vies.";
			}else{
				if(proposition<nbmystere){
					nbvies=nbvies-1;
					vieaff=nbvies+1;
					aff.innerHTML="c'est plus. il vous reste "+vieaff+" vies.";
				}else{
					if(proposition==nbmystere){
					vieaff=nbvies+1;
					aff.innerHTML="gagner! vous avez trouver le nombre mystere avec "+vieaff+" vies restantes.";
					bdepart.value="recommencer la partie";
					bdepart.style.opacity=1;
					}
				}
			}
		}else{
			if(nbvies==0){
				if(proposition==nbmystere){
			vieaff=nbvies;
			aff.innerHTML="gagner! vous avez trouver le nombre mystere avec "+vieaff+" vies restantes.";
			bdepart.value="recommencer la partie";
			bdepart.style.opacity=1;
				}else{
			aff.innerHTML="perdu!le nombre mystere était "+nbmystere;
			bdepart.value="recommencer la partie";
			bdepart.style.opacity=1;
				}
			
			}else{
			nbvies=0;
			}
			
		}
	}
	
}

function init(){
	saisie.value="";
	bdepart.style.opacity=1;
	zjeu.style.opacity=0;
}
if(document.readyState==="complete"){
	init();
}else{
	document.addEventListener("DOMContentLoaded",function(){
		init();
	});
}

bdepart.addEventListener("click",function(){
	nvpartie();
});

bvalider.addEventListener("click",function(){
	jeu();
});