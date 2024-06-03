function fullStack(frontEnd, backEnd) {
    const frontEndDevelopers = frontEnd.split(';');
    const backEndDevelopers = backEnd.split(';');
    const commonDevelopers = [];
for (let i = 0; i < frontEndDevelopers.length; i++) {
    if (backEndDevelopers.includes(frontEndDevelopers[i])) {
        commonDevelopers.push(frontEndDevelopers[i]);
    }
}
return commonDevelopers;

}

console.log(fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'));
console.log(fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'));
