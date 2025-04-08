import axios from "axios"


async function getQuestoins() {
    try {
        const res = await axios.get('/dmv_real_all_1-140.json')
        return res.data

    } catch (error) {
        console.log(error)
    }
}


export default getQuestoins