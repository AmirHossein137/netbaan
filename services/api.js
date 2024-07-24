export const request = async (api) => {
    return (
        await fetch(api)
        .then(res => res.json())
    )
}