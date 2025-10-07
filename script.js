const cards = [
{ title: "Prize", body: "Bragging rights, spotlight in the YSWS gallery, and a small hardware prize for outstanding integrations." },
{ title: "Who", body: "Students, mentors, and hobbyists — solo or teams (max 5)." },
{ title: "Where", body: "Online submissions via the official Hackcraft form." },
{ title: "How", body: "Ship working code, a README, usage instructions, and a short demo video (optional)." }
];


const examples = [
{ title: "SafeKeep", desc: "Offline-first manager with strong encryption and cross-device sync." },
{ title: "Keyring Junior", desc: "Educational password manager with a friendly onboarding flow." }
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