const guests = []; // Armazenamento em memória (temporário)

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(guests);
    } else if (req.method === 'POST') {
        const { guest, companions } = req.body;
        if (!guest || !Array.isArray(companions)) {
            return res.status(400).json({ error: 'Invalid data' });
        }
        guests.push({ guest, companions });
        res.status(201).json({ message: 'Confirmation saved' });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
