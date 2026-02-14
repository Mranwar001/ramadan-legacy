import html2pdf from "html2pdf.js";

export const generatePDF = () => {
  const element = document.getElementById("pdf-content");

  if (!element) {
    alert("PDF content not found.");
    return;
  }

  const options = {
    margin: 0.5,
    filename: "Ramadan_Legacy_By_Anwar_Dahir_Yahaya.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(options).from(element).save();
};
