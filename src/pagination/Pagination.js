import React, { useEffect ,useState} from 'react'
import PageChange from './PageChange';
import PostData from './PostData';

const Pagination = () => {

    let [posts,setPosts] = useState([]);
    let [currentPage,setCurrentPage] = useState(1);
    let [dataLength,setDataLength] = useState(5);
    let [totalPages,setTotalPages] = useState(0);
    let [currentPageData,setCurrentPageData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                let res = await fetch('https://jsonplaceholder.typicode.com/posts');
                let data = await res.json();
                console.log('data', data);
                setPosts(data);
                let maxPages = Math.ceil(data.length / dataLength);
                setTotalPages(maxPages);
                pageData(data,1);

            }catch(e){
                console.log('error Occur', e);
            }
        }

        fetchData();
    },[]);

    
    const pageData = (posts,currentPage) => {
        // let onePageData = posts.filter((post) => {
        //     return post.userId === currentPage;
        // })
        let lastPostIndex = currentPage * dataLength;
        let firstPostIndex = lastPostIndex - dataLength;
        let onePageData = posts.slice(firstPostIndex,lastPostIndex)
        setCurrentPageData(prev => onePageData);
    }

    const handleNextPageChange = () => {
        if(currentPage === totalPages){
            setCurrentPage(1);
            pageData(posts,1);
        }else{
            setCurrentPage(currentPage => currentPage+1);
            pageData(posts,currentPage + 1);
        }
        // pageData(posts,currentPage + 1);

    }

    const handlePrevPageChange = () => {
        if(currentPage === 1){
            setCurrentPage(totalPages);
            pageData(posts,totalPages);
        }else{
            setCurrentPage(currentPage => currentPage-1);
            pageData(posts,currentPage - 1);
        }
        // pageData(posts,currentPage - 1);
    }

  return (
    <div>
        <p>Pagination</p>

        <div>
            <table>
                <tr>
                    <td>User Id</td>
                    <td>Title</td>
                    <td>Description</td>
                </tr>
                {
                    currentPageData.map((post) => <PostData post={post} key={post.id}></PostData>)
                }
            </table>
            
        </div>


        <PageChange currentPage={currentPage} dataLength={dataLength} handleNextPageChange={handleNextPageChange} handlePrevPageChange={handlePrevPageChange} currentPageData={currentPageData}></PageChange>

    </div>
  )
}

export default Pagination