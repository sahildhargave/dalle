import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt} from "../utils"
import { Form ,Loader} from "../components";

const CreatePost = () => {
   const navigate = useNavigate();
   const [from, setForm ] = useState({
	name: '',
	prompt:'',
	photo:'',
   });

   const [generatingImg ,setGeneratingImg] = useState(false);
   const [ loading,setLoading] = useState(false);

const handleSubmit =  () =>{


}
  return (
	<section className="max-w-7xl mx-auto">
<div className="">
	
			<h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
			<p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>Create imaginative and visully stunning images generated 
			through DALL-E AI and share them with the
			community</p>
</div>
<form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
<div className='flex flex-col gap-5'>
<Form
labelName="Your Name"
type="text"
name="name"
placeholder="Sahil Dhargave"
value={form.name}
handleChange={handleChange}

/>
</div>
</form>
	</section>
  )
}

export default CreatePost