const getBible = async (translation) => {
    const obj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    }
    console.log('aaa', translation)
    const rawResponse = await fetch(
        `../../public/data/${translation}.json`,
        obj,
    )
    const response = await rawResponse.json()
    return response;
}

export default getBible