

document.getElementById('elementForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const symbol = document.getElementById('elementSymbol').value;
    fetch(`/api/element?symbol=${symbol}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('dataDisplay').innerText = data.error;
            } else {
                document.getElementById('dataDisplay').innerText = `
                    Name: ${data.name}
                    Symbol: ${data.symbol}
                    Atomic Number: ${data.atomic_number}
                    Atomic Mass: ${data.atomic_mass}
                    Group: ${data.group}
                    Period: ${data.period}
                `;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});


document.getElementById('periodForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const period = document.getElementById('periodNumber').value;
    fetch(`/api/period?period=${String(period)}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('dataDisplay').innerText = data.error;
            } else {
                document.getElementById('dataDisplay').innerText = `
                    Elements in Period ${period}: ${data.join(', ')}
                `;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});