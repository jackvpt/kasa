import { useState, useEffect } from "react"

export function useFetch(url) {
	const [fetchedData, setFetchedData] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		if (!url) return
		setLoading(true)
		async function fetchData() {
			try {
				const response = await fetch(url)
				const data = await response.json()
				setFetchedData(data)
			} catch (err) {
				console.log(err)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [url])
	return { isLoading, fetchedData, error }
}


