let balance = 1000;

function updateBalance() {
    document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
    } else {
        alert("Please enter a valid deposit amount.");
    }
    document.getElementById("depositAmount").value = '';
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateBalance();
        } else {
            alert("Insufficient balance for this withdrawal.");
        }
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
    document.getElementById("withdrawAmount").value = '';
}

updateBalance();
