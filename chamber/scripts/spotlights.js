const membersUrl = 'data/members.json';

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const members = await response.json();
            displaySpotlights(members);
        }
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function displaySpotlights(members) {
    // Filter for Gold and Silver members only
    const qualifiedMembers = members.filter(member =>
        member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
    );

    // Randomly shuffle members
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

    // Select 2 or 3 members
    const selectedMembers = shuffled.slice(0, 3);

    const container = document.getElementById('spotlight-cards');
    container.innerHTML = selectedMembers.map(member => `
    <div class="card">
      <img src="${member.image}" alt="${member.name} Logo">
      <h3>${member.name}</h3>
      <p><strong>Level:</strong> ${member.membershipLevel}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    </div>
  `).join('');
}

getSpotlights();