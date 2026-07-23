from pathlib import Path
lines = [
    b'%PDF-1.3\n',
]
content_lines = [
    b'BT',
    b'/F1 20 Tf',
    b'40 780 Td (Miraz Ahammed) Tj',
    b'0 -28 Td (Frontend Web Developer) Tj',
    b'0 -40 Td (Email: tanjilapatwaryy@gmail.com  |  Phone: 01872249768) Tj',
    b'0 -24 Td (LinkedIn: https://linkedin.com/in/miraz-ahammed  |  GitHub: https://github.com/miraz-ahammed) Tj',
    b'0 -32 Td (Location: Bangladesh) Tj',
    b'0 -40 Td ( ) Tj',
    b'/F1 14 Tf',
    b'0 -18 Td (Professional Summary) Tj',
    b'0 -20 Td (Dedicated and skilled Frontend Web Developer with a passion for building modern, responsive, and user-friendly web applications.) Tj',
    b'0 -18 Td (Focused on delivering high-performance digital experiences using Next.js, React.js, and Tailwind CSS.) Tj',
    b'0 -24 Td ( ) Tj',
    b'0 -18 Td (Technical Skills) Tj',
    b'0 -18 Td (- Languages: HTML5, CSS3, JavaScript (ES6+)) Tj',
    b'0 -18 Td (- Frameworks/Libraries: React.js, Next.js, Node.js, Express.js, MongoDB) Tj',
    b'0 -18 Td (- Styling: Tailwind CSS) Tj',
    b'0 -18 Td (- Tools: VS Code, Git, GitHub) Tj',
    b'0 -18 Td (- Operating Systems: Windows 10) Tj',
    b'0 -24 Td ( ) Tj',
    b'0 -18 Td (Projects) Tj',
    b'0 -18 Td (1. Tiles Gallery) Tj',
    b'0 -18 Td (2. GitHub Issues Tracker) Tj',
    b'0 -18 Td (3. SkillSwap) Tj',
    b'0 -18 Td (4. IdeaVault) Tj',
    b'0 -24 Td ( ) Tj',
    b'0 -18 Td (Education) Tj',
    b'0 -18 Td (- Habibullah Bahar College) Tj',
    b'0 -24 Td ( ) Tj',
    b'0 -18 Td (Languages) Tj',
    b'0 -18 Td (- Bengali - Native) Tj',
    b'0 -18 Td (- English - Professional) Tj',
    b'0 -24 Td ( ) Tj',
    b'0 -18 Td (Soft Skills) Tj',
    b'0 -18 Td (- Team Collaboration & Communication) Tj',
    b'0 -18 Td (- Problem Solving & Analytical Thinking) Tj',
    b'0 -18 Td (- Fast Learner & Adaptable to new technologies) Tj',
    b'ET',
]
stream = b'\n'.join(content_lines) + b'\n'
length = len(stream)
objects = []
objects.append((1, b'<< /Type /Catalog /Pages 2 0 R >>\n'))
objects.append((2, b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>\n'))
objects.append((3, b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\n'))
objects.append((4, b'<< /Length %d >>\nstream\n' % length + stream + b'endstream\n'))
objects.append((5, b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\n'))
offset = sum(len(x) for x in lines)
obj_offsets = []
for num, data in objects:
    obj_offsets.append((num, offset))
    block = f'{num} 0 obj\n'.encode('ascii') + data + b'endobj\n'
    lines.append(block)
    offset += len(block)
xref_start = offset
xref = [b'xref\n', b'0 %d\n' % (len(objects)+1), b'0000000000 65535 f \n']
for num, off in obj_offsets:
    xref.append(b'%010d 00000 n \n' % off)
lines.extend(xref)
lines.append(b'trailer\n<< /Size %d /Root 1 0 R >>\n' % (len(objects)+1))
lines.append(b'startxref\n%d\n' % xref_start)
lines.append(b'%%EOF\n')
Path('public/my-cv.pdf').write_bytes(b''.join(lines))
print('updated public/my-cv.pdf')
