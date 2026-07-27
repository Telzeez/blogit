import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

const getAllBlog = async () => {
    const req = await axios.get(baseUrl)
    const res = await req
    return res.data
}
const createBlog = async (newBlog) => {
    const req = await axios.post(baseUrl, newBlog)
    const res = await req
    return res.data
}


const updateBlog = async (id, updatedBlog) => {
    const req = await axios.put(`${baseUrl}/${id}`, updatedBlog)
    const res = await req
    return res.data

}
const deleteBlog = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request
    return response.data
}
export { getAllBlog, createBlog, updateBlog, deleteBlog }