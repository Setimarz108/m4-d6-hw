import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState, useEffect} from 'react'


const CommentArea = ({asin}) => {

    // state = {
    //     comments: [], // comments will go here
    //     isLoading: false,
    //     isError: false
    // }

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
     
    useEffect(() => {
        fetchComments()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asin])


   const fetchComments = async () => {
       
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2NDE5MDcyNjMsImV4cCI6MTY0MzExNjg2M30.YWvR1qJfPDSr1OwPxIF-KJ1vmSJmMXBIh92tNfek4FI'
                    }
                })
                console.log(response)
                if (response.ok) {
                    let comments = await response.json()
                    console.log(comments)
                    setComments(comments)
                } else {
                    console.log('error')
                    setIsLoading(false)
                    setIsError(true)
                }
            } catch (error) {
                console.log(error)
                setIsError(true)
            }
        
    }

    
        return (
            <div>
                {isLoading && <Loading />}
                {isError && <Error />}
                
                <AddComment asin={asin} />
                <CommentList commentsToShow={comments} />
            </div>
        )
    }


export default CommentArea