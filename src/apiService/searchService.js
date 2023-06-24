import axios from 'axios'

export const search = async (q) => {
    try {
        const res = await axios.get(`/users/search`, {
            params: {
                q,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
