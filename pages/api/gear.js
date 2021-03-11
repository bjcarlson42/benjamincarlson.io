import { gear } from '../../data/gear'

export default function handler(req, res) {
    res.status(200).json(gear)
}