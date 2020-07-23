import { software } from '../../data/gear'

export default function handler(req, res) {
    res.status(200).json(software)
}