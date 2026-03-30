// User Data (Demo)
let user = { name: 'John Doe', scores: [42, 38, 45], charity: 'Golfers Against Cancer', subscription: 'active' };

// Navigation
function goTo(page) { window.location.href = page + '.html'; }

// Subscription
function subscribe() {
    alert('🎉 Stripe Payment: $9.99/month\n✅ Welcome to Golf Platform!');
    localStorage.setItem('subscribed', 'true');
    goTo('dashboard');
}

// Score Entry
function enterScore() {
    const score = prompt('Enter your Stableford score:');
    if (score && !isNaN(score)) {
        user.scores.push(parseInt(score));
        alert(`✅ Score saved: ${score} points\n📊 Avg: ${Math.round(user.scores.reduce((a,b)=>a+b)/user.scores.length)}`);
        updateDashboard();
    }
}

// Admin Functions
function adminLogin() { 
    const pass = prompt('Admin Password:');
    if (pass === 'admin123') goTo('admin');
}

// Update Dashboard
function updateDashboard() {
    document.getElementById('latest-score').textContent = user.scores[user.scores.length-1] + ' points';
    document.getElementById('total-scores').textContent = user.scores.length;
    document.getElementById('avg-score').textContent = Math.round(user.scores.reduce((a,b)=>a+b)/user.scores.length);
}

// Check Subscription
if (localStorage.getItem('subscribed') !== 'true' && window.location.pathname.includes('dashboard')) {
    alert('Please subscribe first!'); 
    goTo('index');
}