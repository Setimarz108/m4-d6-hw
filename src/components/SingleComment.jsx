import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2NDE5MDcyNjMsImV4cCI6MTY0MzExNjg2M30.YWvR1qJfPDSr1OwPxIF-KJ1vmSJmMXBIh92tNfek4FI'
            }
        })
        if (response.ok) {
            alert('comment deleted!')
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
        {comment.comment}
        <Button variant="dark" className="ml-2" onClick={() => deleteComment(comment._id)}>delete</Button>
    </ListGroup.Item>
)

export default SingleComment