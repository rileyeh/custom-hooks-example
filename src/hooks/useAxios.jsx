import { useState, useEffect } from 'react'
import axios from 'axios'

const axiosHook = (url) => {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (error) {
        setErr(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, err, loading }
}

export default axiosHook
