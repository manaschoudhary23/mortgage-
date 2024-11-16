function showForm() {
    document.getElementById("step1").style.display = "none"; 
    document.getElementById("step2").style.display = "block"; 
}

document.getElementById('application-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    showForm();
});

document.getElementById('calculator-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    let loanAmount = parseFloat(document.getElementById('loan-amount').value);
    let interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    let loanTerm = parseInt(document.getElementById('loan-term').value) * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    let monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
});

