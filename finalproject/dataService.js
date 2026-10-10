export async function fetchPlayers() {
    try {
        const response = await fetch('./basketball-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in asynchronous request:", error);
        throw error;
    }
}