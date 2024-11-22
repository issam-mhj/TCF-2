function generatePDFReport() {
    const { jsPDF } = window.jspdf; 
    const docpdf = new jsPDF();
    docpdf.setFontSize(20);
    const users = localStorage.getItem('users');
    if (users) {
        docpdf.text('Liste des utilisateurs :', 10, 20); 
        docpdf.text(users, 10, 30); 
        docpdf.text(`- Questions posées : ${users.questionsAsked}`, 15, 40);
        docpdf.text(`✅ Réponses correctes : ${users.correctAnswers}`, 15, 50);
        docpdf.text(`❌ Réponses incorrectes : ${users.wrongAnswers}`, 15, 60);
        docpdf.text(`🏆 Score total : ${users.totalScore}`, 15,70);
        docpdf.text(`🌟 Niveau atteint : ${users.level}`, 15, 80);

    } else {
        docpdf.text('Aucun utilisateur trouvé.', 10, 20);
    }
    docpdf.save('generatePDFReport.pdf');
}