const cards = [
{ title: "Prize", body: "Bragging rights, spotlight in the YSWS gallery, and a yubikey!" },
{ title: "Who", body: "Members of Hack Club." },
{ title: "Where", body: "Online submissions via the official Hackvault form." },
{ title: "How", body: "Ship working code, a README, usage instructions, and a working version of your app which can run on Windows, MacOS and Linux." }
];


const examples = [
{ title: "Your project could be here!", desc: " " },
{ title: "Same as here!", desc: " " }
];


document.addEventListener('DOMContentLoaded', () => {
const cardContainer = document.getElementById('info-cards');
const exampleContainer = document.getElementById('examples');


cards.forEach(card => {
const div = document.createElement('div');
div.className = 'rounded-xl bg-slate-900/40 p-4';
div.innerHTML = `<h4 class="font-semibold">${card.title}</h4><p class="text-sm text-slate-300 mt-1">${card.body}</p>`;
cardContainer.appendChild(div);
});


examples.forEach(ex => {
const div = document.createElement('div');
div.className = 'rounded-lg border border-slate-700/40 p-4 bg-slate-900/30';
div.innerHTML = `<h5 class="font-semibold">${ex.title}</h5><p class="text-sm text-slate-300 mt-1">${ex.desc}</p><div class="mt-3 text-xs text-slate-400">Demo: <span class="underline">example.com/${ex.title.toLowerCase().replace(/\s+/g, '-')}</span></div>`;
exampleContainer.appendChild(div);
});
});