export function setupModal() {
    const modal = document.getElementById('player-modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementById('close-modal');

    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.getAttribute('data-name');
            const team = e.target.getAttribute('data-team');
            modalText.textContent = `You are viewing exclusive information and advanced statistics for ${name}, current star of the ${team}.`;
            if (modal && typeof modal.showModal === 'function') {
                modal.showModal();
            }
        });
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.close();
        });
    }
}