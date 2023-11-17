const body = document.body;
const gameContainerEl = document.getElementById('game-container');
const messageElement = document.getElementById('message');
const stateContainerEl = document.getElementById('state-container');
const coinAmountEl = document.getElementById('coin-amount');
const resetBtn = document.getElementById('reset-btn');
Object.assign(body.style, {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  height: '100vh',
  'flex-direction': 'column',
  'background-color': '#343a40',
});
Object.assign(gameContainerEl.style, {
  display: 'grid',
  'grid-template-columns': 'repeat(5, 100px)',
  gap: '10px',
});
Object.assign(stateContainerEl.style, {
  display: 'flex',
  gap: '20px',
  'margin-bottom': '24px',
  color: '#fff',
  'font-size': '2rem',
  'align-items': 'center',
});
Object.assign(resetBtn.style, {
  'font-size': '1.5rem',
  padding: '6px 12px',
  'margin-left': 'auto',
  'border-radius': '6px',
  cursor: 'pointer',
});
