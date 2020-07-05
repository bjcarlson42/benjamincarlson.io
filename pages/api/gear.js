import { software } from '../../gear'

export default function handler(req, res) {
    res.status(200).json(software)
}