import axios from "axios"


async function getQuestionsForCar() {
    try {
        const res = await axios.get('/road_signs_questions_filled.json')
        return res.data

    } catch (error) {
        console.log(error)
    }
}


export default getQuestionsForCar

