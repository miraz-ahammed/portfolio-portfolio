const fs = require('fs');
const path = require('path');

const lines = [
  '%PDF-1.3',
];

const contentLines = [
  'BT',
  '/F1 20 Tf',
  '40 780 Td (Miraz Ahammed) Tj',
  '0 -28 Td (Frontend Web Developer) Tj',
  '0 -40 Td (Email: tanjilapatwaryy@gmail.com  |  Phone: 01872249768) Tj',
  '0 -24 Td (LinkedIn: https://linkedin.com/in/miraz-ahammed  |  GitHub: https://github.com/miraz-ahammed) Tj',
  '0 -32 Td (Location: Bangladesh) Tj',
  '0 -40 Td ( ) Tj',
  '/F1 14 Tf',
  '0 -18 Td (Professional Summary) Tj',
  '0 -20 Td (Dedicated and skilled Frontend Web Developer with a passion for building modern, responsive, and user-friendly web applications.) Tj',
  '0 -18 Td (Focused on delivering high-performance digital experiences using Next.js, React.js, and Tailwind CSS.) Tj',
  '0 -24 Td ( ) Tj',
  '0 -18 Td (Technical Skills) Tj',
  '0 -18 Td (- Languages: HTML5, CSS3, JavaScript (ES6+)) Tj',
  '0 -18 Td (- Frameworks/Libraries: React.js, Next.js, Node.js, Express.js, MongoDB) Tj',
  '0 -18 Td (- Styling: Tailwind CSS) Tj',
  '0 -18 Td (- Tools: VS Code, Git, GitHub) Tj',
  '0 -18 Td (- Operating Systems: Windows 10) Tj',
  '0 -24 Td ( ) Tj',
  '0 -18 Td (Projects) Tj',
  '0 -18 Td (1. Tiles Gallery) Tj',
  '0 -18 Td (2. GitHub Issues Tracker) Tj',
  '0 -18 Td (3. SkillSwap) Tj',
  '0 -18 Td (4. IdeaVault) Tj',
  '0 -24 Td ( ) Tj',
  '0 -18 Td (Education) Tj',
  '0 -18 Td (- Habibullah Bahar College) Tj',
  '0 -24 Td ( ) Tj',
  '0 -18 Td (Languages) Tj',
  '0 -18 Td (- Bengali - Native) Tj',
  '0 -18 Td (- English - Professional) Tj',
  '0 -24 Td ( ) Tj',
  '0 -18 Td (Soft Skills) Tj',
  '0 -18 Td (- Team Collaboration & Communication) Tj',
  '0 -18 Td (- Problem Solving & Analytical Thinking) Tj',
  '0 -18 Td (- Fast Learner & Adaptable to new technologies) Tj',
  'ET',
];

const stream = contentLines.join('\n') + '\n';

const objects = [
  { num: 1, data: '<< /Type /Catalog /Pages 2 0 R >>\n' },
  { num: 2, data: '<< /Type /Pages /Kids [3 0 R] /Count 1 >>\n' },
  { num: 3, data: '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\n' },
  { num: 4, data: `<< /Length ${Buffer.byteLength(stream, 'ascii')} >>\nstream\n${stream}endstream\n` },
  { num: 5, data: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\n' },
];

const bufferParts = [];
const encoder = new TextEncoder();

const appendLine = (line) => {
  bufferParts.push(Buffer.from(line + '\n', 'ascii'));
};

appendLine('%PDF-1.3');

const offsets = {};
let currentOffset = Buffer.byteLength('%PDF-1.3\n', 'ascii');

for (const obj of objects) {
  offsets[obj.num] = currentOffset;
  const header = `${obj.num} 0 obj\n`;
  appendLine(header.trim());
  currentOffset += Buffer.byteLength(header, 'ascii');
  const dataBuf = Buffer.from(obj.data, 'ascii');
  bufferParts.push(dataBuf);
  currentOffset += dataBuf.length;
  const end = 'endobj\n';
  bufferParts.push(Buffer.from(end, 'ascii'));
  currentOffset += Buffer.byteLength(end, 'ascii');
}

const xrefStart = currentOffset;
appendLine('xref');
appendLine(`0 ${objects.length + 1}`);
appendLine('0000000000 65535 f ');
for (let i = 1; i <= objects.length; i++) {
  const off = String(offsets[i]).padStart(10, '0');
  appendLine(`${off} 00000 n `);
}
appendLine('trailer');
appendLine(`<< /Size ${objects.length + 1} /Root 1 0 R >>`);
appendLine('startxref');
appendLine(String(xrefStart));
appendLine('%%EOF');

const output = Buffer.concat(bufferParts);
fs.writeFileSync(path.join(__dirname, 'public', 'my-cv.pdf'), output);
console.log('Updated public/my-cv.pdf');
