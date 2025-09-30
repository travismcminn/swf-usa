
async function loadDealers() {
  const res = await fetch('dealers.json');
  const dealers = await res.json();
  const list = document.getElementById('dealerList');
  const q = document.getElementById('q');
  const state = document.getElementById('state');

  function render(items) {
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p class="text-sm text-gray-600">No dealers found.</p>';
      return;
    }
    items.forEach(d => {
      const el = document.createElement('a');
      el.className = 'block p-5 border bg-white rounded-xl hover:shadow-lg transition';
      el.href = d.website || '#';
      el.target = '_blank';
      el.rel = 'noopener';
      el.innerHTML = `
        <div class="flex items-center justify-between gap-4">
          <div>
            <h3 class="font-semibold">${d.name}</h3>
            <p class="text-sm text-gray-600">${d.address}, ${d.city}, ${d.state} ${d.zip}</p>
            <p class="text-sm text-gray-600 mt-1">Phone: ${d.phone} ${d.email ? '· ' + d.email : ''}</p>
          </div>
          <span class="text-xs px-3 py-1 rounded-full bg-gray-100">${d.state}</span>
        </div>`;
      list.appendChild(el);
    });
  }

  function filter() {
    const term = q.value.toLowerCase().trim();
    const st = state.value;
    let filtered = dealers.filter(d => {
      const text = (d.name + ' ' + d.city + ' ' + d.state + ' ' + d.zip + ' ' + d.address).toLowerCase();
      const matchText = term ? text.includes(term) : true;
      const matchState = st ? d.state === st : true;
      return matchText && matchState;
    });
    render(filtered);
  }

  q.addEventListener('input', filter);
  state.addEventListener('change', filter);

  render(dealers);
}

document.addEventListener('DOMContentLoaded', loadDealers);
