const url = 'data/members.json';
const container = document.querySelector('#members-container');
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');

async function getMembersData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        } else {
            console.error('Error fetching members data');
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const displayMembers = (members) => {
    container.innerHTML = '';
    members.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        const levelText = member.membershipLevel === 3 ? 'Gold' : member.membershipLevel === 2 ? 'Silver' : 'Member';

        card.innerHTML = `
      <img src="${member.image}" alt="${member.name} Logo" loading="lazy" width="120" height="120">
      <h3>${member.name}</h3>
      <p class="address">${member.address}</p>
      <p class="phone">${member.phone}</p>
      <p class="level">Membership: ${levelText}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    `;
        container.appendChild(card);
    });
};

gridbutton.addEventListener('click', () => {
    container.classList.add('grid');
    container.classList.remove('list');
});

listbutton.addEventListener('click', () => {
    container.classList.add('list');
    container.classList.remove('grid');
});

getMembersData();