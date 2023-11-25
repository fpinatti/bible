const getBible = async () => {
    const obj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    }
    const rawResponse = await fetch(
        '../../public/data/nvi.json',
        obj,
    )
    const response = await rawResponse.json()
    return response;
}

export default getBible