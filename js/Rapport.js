function generatePDFReport() {
    const username = document.getElementById('pdfUsername').value;
    if (!username) {
        alert("Veuillez entrer un nom d'utilisateur");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username);

    if (!user) {
        alert("Utilisateur non trouvé");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Rapport TCF - Résultats Détaillés", 105, 20, { align: "center" });

    doc.setFontSize(16);
    doc.text("Informations de l'Utilisateur", 20, 40);
    doc.setFontSize(12);
    doc.text(`Nom d'utilisateur: ${user.username}`, 25, 50);
    doc.text(`Niveau actuel: ${user.NV}`, 25, 60);

    doc.setFontSize(16);
    doc.text("Résumé des Progrès", 20, 80);
    doc.setFontSize(12);

    let yPos = 90;
    if (user.completedCategories) {
        Object.entries(user.completedCategories).forEach(([level, categories]) => {
            const completedCount = Object.values(categories).filter(v => v).length;
            if (completedCount > 0) {
                doc.text(`Niveau ${level}: ${completedCount}/3 catégories complétées`, 25, yPos);
                yPos += 10;
            }
        });
    } else {
        doc.text("Aucun progrès enregistré.", 25, yPos);
        yPos += 10;
    }

    yPos += 10;
    doc.setFontSize(16);
    doc.text("Statistiques par Niveau", 20, yPos);
    yPos += 10;
    doc.setFontSize(12);

    if (user.scoreInLevel && user.attemptsByLevel) {
        Object.entries(user.scoreInLevel).forEach(([level, score]) => {
            const attempts = user.attemptsByLevel[level] || 0;
            if (score > 0 || attempts > 0) {
                const successRate = attempts > 0 ? ((score / (attempts * 100)) * 100).toFixed(2) : "N/A";
                doc.text(`Niveau ${level}:`, 25, yPos);
                doc.text(`Score total: ${score}`, 35, yPos + 7);
                doc.text(`Tentatives: ${attempts}`, 35, yPos + 14);
                doc.text(`Taux de réussite: ${successRate}%`, 35, yPos + 21);
                yPos += 28;
            }
        });
    } else {
        doc.text("Pas de données statistiques disponibles.", 25, yPos);
        yPos += 10;
    }

    doc.addPage();
    doc.setFontSize(16);
    doc.text("Historique des Questions", 20, 20);
    
    let currentY = 30;
    if (user.reports) {
        Object.entries(user.reports).forEach(([level, data]) => {
            const questions = data.questions; 
            console.log(questions);
            if (questions && questions.length > 0) { 
                console.log(`Questions found for level ${level}:`, questions); 
                doc.setFontSize(14);
                doc.text(`Niveau ${level}:`, 20, currentY);
                currentY += 10;
                doc.setFontSize(10);
        
                questions.forEach((q, index) => {
                    if (currentY > 270) {
                        doc.addPage();
                        currentY = 20;
                    }
        
                    doc.text(`${index + 1}. ${q.question}`, 25, currentY);
                    currentY += 7;
        
                    if (q.correct) {
                        doc.setTextColor(0, 150, 0); 
                    } else {
                        doc.setTextColor(255, 0, 0); 
                    }
                    doc.text(`Réponse: ${q.answer}`, 30, currentY);
                    currentY += 7;
        
                    if (!q.correct) {
                        doc.setTextColor(0, 150, 0);
                        doc.text(`Correction: ${q.correctAnswer}`, 30, currentY);
                        currentY += 7;
                    }
        
                    doc.setTextColor(100, 100, 100);
                    doc.text(`Catégorie: Compréhension`, 30, currentY);
                    doc.text(`Niveau: ${data.level}`, 30, currentY + 7);
                    currentY += 17;
                    doc.setTextColor(0, 0, 0);
                });
                currentY += 10;
            } else {
                console.log(`No questions found for level ${level}`);
            }
    });
} else {
        doc.text("Pas d'historique de questions disponible.", 20, currentY);
    }

    const filename = `rapport_${username}_${new Date().toLocaleDateString()}.pdf`;
    doc.save(filename);
    console.log(`PDF saved as ${filename}`);
}


