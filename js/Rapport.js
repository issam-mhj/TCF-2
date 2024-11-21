function genererPdf(){
    const {jsPDF} =window.jspdf;
    const docpdf=new jsPDF();
    docpdf.setFontSize(20);
    docpdf.text('Bonjour je ma appele ikram',20,30);
    docpdf.setFontSize(12);
    docpdf.text('mon nom est Elbenallali',20,40);
    docpdf.text('mon prenom est Ikram',20,50);
    docpdf.text('mon age est 21 ans ',20,60);
    docpdf.text('je etudier a YOUCODE',20,70);
    docpdf.text('je ai une licence en physique ',20,80);
    docpdf.text('je suis de Nador',20,90);
docpdf.save('genererPdf.pdf');
}