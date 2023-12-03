import React, { useContext, useEffect, useState } from 'react'
import { AuthorisationContext, UserAuthorisationContext, userDataContext } from '../../Contexts/Authorize'
import { TokenAuthContext } from '../../Contexts/TokenAuth'
import userImg from '../../Assets/149071.png'
import styles from './Auth.module.css'
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { editUserAPI } from '../../services/allApi'
import { BASE_URL } from '../../services/baseUrl'
import { toast } from 'react-toastify'
function EditProfile() {
  const {sessionStore,setSessionStore} = useContext(TokenAuthContext)
  const {isAuthorized,setIsAuthorized} = useContext(AuthorisationContext)
    const {isUserAuthorized,setIsUserAuthorized} = useContext(UserAuthorisationContext)
    const {userData,setUserData} = useContext(userDataContext)
    const [show, setShow] = useState(false);
    const [userProfile,setUserProfile] = useState({
      username:"",email:"",password:"",fullname:"",alternatemail:"",about:"",profile:""
     })
     const [existingImage,setExistingImage] = useState("")
     const [preview,setPreview] = useState("")
     useEffect(()=>{
      const user = JSON.parse(sessionStorage.getItem("registeredUser"))
   
      setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,fullname:user.fullname,alternatemail:user.alternatemail,about:user.about,profile:""})
       setExistingImage(user.profile)
     
    },[show])   
  
   

    useEffect(()=>{
      if(userProfile.profile){
      setPreview(URL.createObjectURL(userProfile.profile))
      }else{
        setPreview("")
      }
        },[userProfile.profile])
      
      
      const handleProfileUpdate = async (e)=>{
        e.preventDefault()
        const {username,email,password,fullname,alternatemail,about,profile} = userProfile
      
        if(!fullname || !alternatemail || !about){
          toast.info('please add profile details')
          
          
        }else{
          const reqBody = new FormData()
          reqBody.append("username",username)
          reqBody.append("email",email)
          reqBody.append("password",password)
          reqBody.append("fullname",fullname)
          reqBody.append("alternatemail",alternatemail)
          reqBody.append("about",about)

      preview ? reqBody.append("profileImage",profile): reqBody.append("profileImage",existingImage)
      const token =  sessionStorage.getItem("token")
      if(preview){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const res = await editUserAPI(reqBody,reqHeader)
      
        if(res.status===200){
           setShow(!show)
           sessionStorage.setItem("registeredUser",JSON.stringify(res.data))
        }else{
          setShow(!show)
          console.log(res);
          console.log(res.response.data);
      
        
        }
      
      }else{
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
      }
        }
      
       
      
      }
  return (
    <>
     <div onClick={() => setShow(!show)}>
         { isAuthorized  &&  <div className={styles.userDetails}>
                <img src={userData?.photoURL || userImg || `${BASE_URL}/uploads/${existingImage}`} alt="" />
                <h6>{userData?.displayName || sessionStore?.username}</h6>
                </div>}
                { isUserAuthorized  && <div className={styles.userDetails}>
                <img src={userData?.photoURL || userImg || `${BASE_URL}/uploads/${existingImage}`} alt="userimage" />
                <h6>{userData?.displayName || sessionStore?.username}</h6>
                </div>}
     </div> 

     <Modal
        show={show}
        onHide={() => setShow(!show)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
            <div className='col-lg-12'>
            <div className='w-100 mx-auto d-flex justify-content-center align-items-center'>
                <label   className='text-center mt-2 w-25'> 
          <input onChange={e=>setUserProfile({...userProfile,profile:e.target.files[0]})} style={{display:'none'}}  type="file" />
                {existingImage !==""?<img className='p-4'  width={'100%'} src={preview?preview: `${BASE_URL}/uploads/${existingImage}`} alt="" />: <img  style={{borderRadius:'50%'}} className=' img-fluid' src={preview?preview:( userData?.photoURL || userImg)}  width={'100%'} height={"100%"}  alt="" />}</label>
                   
            </div>
                   
               <div className='mt-3'>
               <h5 className='fw-bold text-center'>{userData?.displayName || sessionStore?.username}</h5>
               <h6 className='text-center'>{userData?.email || sessionStore?.email}</h6>
            <Form className='text-center p-3'>
                
              <Form.Control value={userProfile.fullname}  onChange={e=>setUserProfile({...userProfile,fullname:e.target.value})}  className='mb-3 rounded border-0 bg-light form-control shadow-none'  type="text" placeholder="Full Name" />
              <Form.Control value={userProfile.alternatemail}  onChange={e=>setUserProfile({...userProfile,alternatemail:e.target.value})}   className='mb-3 rounded border-0 bg-light form-control shadow-none' type="text" placeholder="Alternate Email" />
              <Form.Control value={userProfile.about}  onChange={e=>setUserProfile({...userProfile,about:e.target.value})}  className='mb-3 rounded border-0 bg-light form-control shadow-none'  type="text" placeholder="About" />

        
              </Form>


            </div>
            </div>
            

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            cancel
          </Button>
          <Button type='submit'onClick={handleProfileUpdate}  variant="primary">update</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default EditProfile